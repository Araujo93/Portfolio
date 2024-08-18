"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const SectionWrapper = ({ children, idName }: any) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 h-screen flex justify-center flex-col`}
      id={idName}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
