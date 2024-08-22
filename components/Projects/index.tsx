import React, { useState } from "react";

// framer-motion
import { motion } from "framer-motion";

// constants
import { projects } from "@/constants";

// utils
import { fadeIn, textVariant, staggerContainer } from "@/utils/motion";

// sectionWrapper
import SectionWrapper from "@/app/hoc/SectionWrapper";

// components
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [active, setActive] = useState<string>("project-2");

  return (
    <div className="">
      <motion.div variants={textVariant()}>
        <p className={"sectionSubText"}>Case Studies</p>
        <h2 className={`sectionHeadText`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]"
        >
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              image={project.image}
              repo={project.repo}
              demo={project.demo}
              index={index}
              active={active}
              handleClick={setActive}
              tags={project.tags}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
