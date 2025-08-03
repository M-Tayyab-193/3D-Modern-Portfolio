import React from "react";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { fadeIn } from "../utils/motion";

const Footer = () => {
  return (
    <section
      className="paddingX w-full flex items-center
    justify-center py-2 z-20 bg-primary"
    >
      <div className="w-full flex justify-between items-center gap-4 max-w-7xl mx-auto">
        <p className="text-secondary text-[14px] sm:text-[17px] font-medium flex items-center">
          <span className="hidden lg:block">Developed by &nbsp;| &nbsp;</span>
          <span className="text-white font-extrabold  text-[16px] sm:text-[19px] tracking-wider">
            <a
              href="https://wa.link/1mpf0a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="blue-text-gradient">@</span>
              mtayyab193
            </a>
          </span>
        </p>
        <div className="flex sm:gap-4 gap-2 justify-center items-center">
          {socials.map((social, index) => (
            <motion.div
              className={`w-10 h-10 sm:w-15 sm:h-15 rounded-full p-1 bg-tertiary border-3 ${social.color} drop-shadow-lg ${social.shadow} hover:scale-115  transition-transform duration-300  cursor-pointer`}
              key={social.name}
              variants={fadeIn("left", "spring", index * 0.2, 0.5)}
            >
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </a>
            </motion.div>
          ))}
        </div>
        <p className=" text-[14px] sm:text-[17px] font-bold tracking-wide hidden lg:block">
          © 2025 | All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
