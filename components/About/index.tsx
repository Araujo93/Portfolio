"use client";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import Image from "next/image";

import { services } from "@/constants";

import SectionWrapper from "../SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 1)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <SectionWrapper idName="about">
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <p className="sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins">
          Introduction
        </p>
        <h2 className="text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.25, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea
        quaerat alias accusamus voluptas autem! Alias odit voluptates in totam
        vita.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
