import React, { useEffect, useMemo, useState } from "react";

// Canvas
import { BallCanvas } from "../Canvas";

// constants
import { technologies } from "@/constants";

// framer-motion
import { motion } from "framer-motion";

// utils
import { textVariant } from "@/utils/motion";

// sectionWrapper
import SectionWrapper from "@/app/hoc/SectionWrapper";
import { StaticImageData } from "next/image";

type technologies = {
  name: string;
  icon: StaticImageData;
}[];

const Tech = () => {
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:650px)");

    setMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const tech: technologies = useMemo(() => {
    if (mobile) {
      return technologies.slice(0, 6);
    } else {
      return technologies;
    }
  }, [mobile]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={
            "sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins"
          }
        >
          My skills
        </p>
        <h2
          className={
            "text-timberWolf font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins"
          }
        >
          Technologies.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-14">
        {tech.length > 0 &&
          tech.map((tech) => (
            <div className="w-28 h-28" key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
