"use client";

import React from "react";

// framer-motion
import { motion } from "framer-motion";

// next
import Image from "next/image";

// assets
import { sean, waves } from "@/public/assets";

const Hero = () => {
  return (
    <>
      <div className="absolute h-[100vh] w-full top-0 left-0 z-0">
        <Image
          src={waves}
          alt="world map"
          className="w-full h-full block object-cover"
        />
      </div>

      <section className="relative flex sm:flex-row flex-col w-full h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className=" absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] sm:px-16 px-6 max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3"
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1 className="font-black text-eerieBlack lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mt-2">
              Hi, Im{" "}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase"
              >
                Sean
              </span>
            </h1>
            <p
              className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-eerieBlack w-[450px]`}
            >
              Highly skilled Frontend Developer{" "}
              <br className="sm:block hidden" />
              with strong problem-solving and communication skills
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>
        </div>
        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
        <div>
          <Image
            className="absolute bottom-0 ml-[53vw] 
            lg:ml-[78vw] md:ml-[60vw] xmd:ml-[66vw] 
            sm:h-[53vh] md:h-[63vh] xl:h-[73vh]"
            src={sean}
            alt="sean"
          />
        </div>
      </section>
    </>
  );
};
export default Hero;
