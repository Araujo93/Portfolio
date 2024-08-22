"use client";
import React from "react";

// next
import Image from "next/image";

// assets
import { waves, sean } from "@/public";

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
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[55vh] md:h-[60vh] xl:h-[73vh]"
            src={sean}
            alt="sean"
            priority
          />
        </div>

        {/* Motion Scroll Div */}
        <MotionScroll />
      </section>
    </>
  );
};

export default Hero;
