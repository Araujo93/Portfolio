// framer-motion
import { motion } from "framer-motion";

// constants
import { services } from "@/constants";

// utils
import { fadeIn, textVariant } from "@/utils/motion";

// sectionWrapper
import SectionWrapper from "@/app/hoc/SectionWrapper";

// components
import ServiceCard from "./ServiceCard";

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
          <ServiceCard
            key={services.title}
            index={index}
            title={services.title}
            icon={services.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
