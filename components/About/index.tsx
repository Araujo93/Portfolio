import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "@/constants";

import { fadeIn, textVariant } from "@/utils/motion";

import Image from "next/image";

import SectionWrapper from "@/app/hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }: any) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 1)}
        className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-taupe text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-8">
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Typescript and
        JavaScript, and expertise in frameworks like React, Next, Three.Js. I'm
        a quick learner and collaborate closely with clients to create
        efficient, scalable and user-friendly solutions that solve real-world
        problems.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
