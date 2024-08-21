"use client";

// framer-motion
import { motion } from "framer-motion";

// Canvas
import { EarthCanvas } from "../Canvas";

// utils
import { slideIn } from "@/utils/motion";

// sectionWrapper
import SectionWrapper from "@/app/hoc/SectionWrapper";

// components
import ContactForm from "./Form";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet -100 p-8 rounded-2xl"
      >
        <p className="sectionSubText">Get in touch</p>
        <h3 className="sectionHeadText">Contact.</h3>
        {/* Contact Form */}
        <ContactForm />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
