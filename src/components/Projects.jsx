import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { github, live } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { desc } from "framer-motion/client";

import { Globe } from "lucide-react";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
  source_code_link,
  demo_link,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div variants={fadeIn("down", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          speed: 450,
          max: 45,
          scale: 1,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border-2 shadow-2xl border-fuchsia-100/80 shadow-purple-500/30 "
      >
        <div className="relative z-10 w-full h-[230px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* 🔹 Prev / Next Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full z-20 border-2 border-fuchsia-200/70 drop-shadow-xl drop-shadow-purple-500/50 cursor-pointer animate-pulse"
          >
            ◀
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full z-20 border-2 border-fuchsia-200/70 drop-shadow-xl drop-shadow-purple-500/50 cursor-pointer animate-pulse"
          >
            ▶
          </button>

          <div className="flex items-center justify-between px-2 w-full h-full">
            <div className="w-10 h-10 absolute z-10 top-0 bottom-0 left-[78%]  flex justify-end m-3 card-img_hover ">
              <div
                className="black-gradient drop-shadow-lg drop-shadow-black/70 w-10 h-10 rounded-full flex justify-center items-center !cursor-pointer animate-pulse"
                onClick={() => window.open(source_code_link, "_blank")}
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain !cursor-pointer"
                />
              </div>
            </div>
            <div className="w-10 h-10 absolute inset-0 z-10  flex justify-start m-3 card-img_hover">
              <div
                className="bg-sky-100 border-2 border-blue-500 drop-shadow-lg drop-shadow-blue-600/70 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer animate-pulse"
                onClick={() => window.open(demo_link, "_blank")}
              >
                <Globe className="size-8 text-blue-600" />
              </div>
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
      <motion.div variants={textVariant(0.2)} className="mt-6">
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
      <motion.div
        className="flex flex-wrap mt-20 gap-7"
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
