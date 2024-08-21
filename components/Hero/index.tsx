"use client";
import React from "react";

// next
import Image from "next/image";

// assets
import { waves, sean } from "@/public";

// Canvas
import { ComputersCanvas } from "../Canvas";

// components
import HeroCTA from "./HeroCTA";
import MotionScroll from "./MotionScroll";

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
        <HeroCTA />

        {/* Profile Image */}
        <div>
          <Image
            className="absolute bottom-0 ml-[58vw]
      lg:ml-[80vw] md:ml-[72vw] xmd:ml-[66vw]
      sm:h-[53vh] md:h-[63vh] xl:h-[73vh] w-auto"
            src={sean}
            alt="sean"
            priority
          />
        </div>
        {/* <div className="flex flex-[0.6]"> */}
        <ComputersCanvas />
        {/* </div> */}

        {/* Motion Scroll Div */}
        <MotionScroll />
      </section>
    </>
  );
};

export default Hero;
