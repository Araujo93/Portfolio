"use client";
import React from "react";

import { motion } from "framer-motion";

import { ComputersCanvas } from "../Canvas";

import Image from "next/image";

import { waves, sean } from "@/public";

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

      <section className="relative flex sm:flex-row flex-col w-full h-screen mx-auto bg-hero-pattern overflow-hidden">
        <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1 className="heroHeadText ">
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
              className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-eerieBlack w-[450px]`}
            >
              I develop 3D visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start
      justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>
        </div>

        {/* Profile Image */}
        <div>
          <Image
            className="absolute bottom-0 ml-[58vw]
      lg:ml-[80vw] md:ml-[72vw] xmd:ml-[66vw]
      sm:h-[53vh] md:h-[63vh] xl:h-[73vh] w-auto"
            src={sean}
            alt="sean"
          />
        </div>
        <ComputersCanvas />

        {/* Motion Scroll Div */}
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
      </section>
    </>
  );
};

export default Hero;
