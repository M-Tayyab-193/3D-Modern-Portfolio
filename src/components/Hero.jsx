import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { section } from "framer-motion/client";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-36 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className="text-white heroHeadText max-sm:leading-[50px]">
            Hi, I'm <span className="text-[#915eff]">Tayyab</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100 max-xs:mt-4">
            I develop Full Stack, AI integrated{" "}
            <br className="sm:block hidden" />
            SaaS web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-2 max-xs:bottom-6 w-full flex items-center justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] max-xs:h-[57px]  rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
