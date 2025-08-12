import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { div } from "framer-motion/client";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="mt-4">
      <div className="padding  rounded-2xl min-h-[150px]">
        <motion.div variants={textVariant(0.2)}>
          <p className="sectionSubText">My Tech</p>
          <h2 className="sectionHeadText">Skills.</h2>
        </motion.div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {technologies.map((tech, index) => (
          <motion.div
            className={`w-15 h-15 sm:w-20 sm:h-20 rounded-full p-1 bg-tertiary border-3 ${tech.color} drop-shadow-lg ${tech.shadow} hover:${tech.hoverShadow} hover:scale-115  transition-transform duration-300 cursor-pointer animate-pulse`}
            key={tech.name}
            variants={fadeIn("right", "spring", index * 0.2, 0.5)}
          >
            <a href={tech.link} target="_blank" rel="noopener noreferrer">
              <img
                src={tech.icon}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
