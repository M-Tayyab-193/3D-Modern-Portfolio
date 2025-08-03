import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {technologies.map((tech, index) => (
        <motion.div
          className="w-28 h-28 drop-shadow-xl drop-shadow-white/30 rounded-full"
          key={tech.name}
          variants={fadeIn("right", "spring", index * 0.2, 0.5)}
        >
          <BallCanvas icon={tech.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
