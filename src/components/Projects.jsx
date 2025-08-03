import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { desc } from "framer-motion/client";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          speed: 450,
          max: 45,
          scale: 1,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border-2 border-l-purple-500 border-t-blue-500 border-r-yellow-600 border-b-lime-600 "
        style={{
          boxShadow: `
      -5px 0 10px 0 rgba(168, 85, 247, 0.2),  
      0 -5px 10px 0 rgba(59, 130, 246, 0.2), 
      5px 0 10px 0 rgba(234, 179, 8, 0.2),    
      0 5px 10px 0 rgba(132, 204, 22, 0.2)    
    `,
        }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} font-semibold`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant(0.2)}>
        <p className="sectionSubText">My Work</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects highlight my ability to build intelligent,
          scalable, and production-ready web solutions. Each showcases
          real-world applications crafted using modern stacks like Next.js,
          React, Node.js, and Express - with a touch of AI when it matters.
          You’ll find concise descriptions, live demos, and source code links
          that reflect not just technical expertise, but also product thinking,
          problem-solving, and a focus on delivering fast, effective MVPs.
        </motion.p>
      </div>
      <div className="flex flex-wrap mt-20 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");
