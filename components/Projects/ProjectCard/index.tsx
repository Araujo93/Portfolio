import React, { Dispatch, SetStateAction } from "react";

// next
import { StaticImageData } from "next/image";
import Image from "next/image";

// utils
import { fadeIn } from "@/utils/motion";

// framer-motion
import { motion } from "framer-motion";

// assets
import { github, pineapple } from "@/public";

type ProjectCardProps = {
  id: string;
  name: string;
  description: string;
  image: StaticImageData;
  repo: string;
  demo: string;
  index: number;
  active: string;
  handleClick: Dispatch<SetStateAction<string>>;
  tags: any;
};

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
  tags,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] 
     h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
     h-full w-full opacity-[0.5] rounded-[24px]"
      ></div>

      <Image
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
       whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
       absolute lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
       leading-none z-20"
          >
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
           flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20"
          >
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, "_blank")}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                 flex justify-center items-center cursor-pointer
                 sm:opacity-[0.9] opacity-[0.8]"
              >
                <Image
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
             text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]"
            >
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
             max-w-3xl sm:leading-[24px] leading-[18px]
             font-poppins tracking-[1px]"
            >
              {description}
            </p>
            {demo && (
              <button
                className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-poppins items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
                onClick={() => window.open(demo, "_blank")}
              >
                <Image
                  src={pineapple}
                  alt="pineapple"
                  className="btn-icon sm:w-[34px] sm:h-[34px] 
                w-[30px] h-[30px] object-contain"
                />
                LIVE DEMO
              </button>
            )}
            <div className="z-20 absolute bottom-5 right-10">
              {tags.map((tag: { name: string; color: string }) => (
                <p
                  className={tag.color}
                  style={{ color: tag.color, backgroundColor: tag.color }}
                  key={tag.name}
                >
                  {tag.name}
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};
export default ProjectCard;
