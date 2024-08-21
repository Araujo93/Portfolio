// next
import Image, { StaticImageData } from "next/image";

// framer-motion
import { motion } from "framer-motion";
// utils
import { fadeIn } from "@/utils/motion";

// react-tilt
import { Tilt } from "react-tilt";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: StaticImageData;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 1)}
        className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-taupe text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
