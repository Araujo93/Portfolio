import React from "react";

// framer-motion
import { motion } from "framer-motion";
const MotionScroll = () => {
  return (
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
  );
};

export default MotionScroll;
