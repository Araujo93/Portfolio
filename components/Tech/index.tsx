import { motion } from "framer-motion";
// import { BallCanvas } from './canvas';
// import { SectionWrapper } from '../hoc';
import { technologies } from "../../constants";
// import { styles } from '../styles';
import { textVariant } from "../../utils/motion";
import SectionWrapper from "../SectionWrapper";

import BallCanvas from "../BallCanvas";

const Tech = () => {
  return (
    <SectionWrapper idName="tech">
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

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;
