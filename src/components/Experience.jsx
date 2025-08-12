import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, stagger } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import { div } from "framer-motion/client";
import { Tilt } from "react-tilt";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[70%] h-[70%] object-cover rounded-full"
          />
        </div>
      }
    >
      <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
        <motion.div
          variants={fadeIn("down", "spring", index * 0.5, 0.75)}
          className="w-full rounded-2xl shadow-lg border-2 border-fuchsia-100/70 shadow-purple-500/40 p-4 mb-3"
        >
          <div>
            <h3 className="text-white text-[24px] font-bold">
              {experience.title}
            </h3>
            <p className="text-secondary text-[16px] font-semibold">
              {experience.company_name}
            </p>
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </Tilt>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0.2)} className="mt-6">
        <p className="sectionSubText">WHAT I HAVE DONE SO FAR</p>
        <h2 className="sectionHeadText">Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
