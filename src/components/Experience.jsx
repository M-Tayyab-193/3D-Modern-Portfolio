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
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <motion.div variants={fadeIn("right", "spring", index * 0.6, 1)}>
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
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className="sectionSubText">WHAT I HAVE DONE SO FAR</p>
        <h2 className="sectionHeadText">Work Experience.</h2>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            <motion.div
              variants={staggerContainer(0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
            >
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  experience={experience}
                  index={index}
                />
              ))}
            </motion.div>
          </VerticalTimeline>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
