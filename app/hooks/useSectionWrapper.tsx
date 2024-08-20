import React from "react";

import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";

const useSectionWrapper = (idName: string, children: React.JSX.Element) => {
  const Component = (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="padding max-w-7xl mx-auto relative z-0 "
      id={idName}
    >
      {children}
    </motion.section>
  );
  return { Component };
};

export default useSectionWrapper;
