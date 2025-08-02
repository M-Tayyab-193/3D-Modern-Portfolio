import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer(0.1, 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className={`padding max-w-7xl mx-auto relative z-0`}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
