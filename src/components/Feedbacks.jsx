import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedBackCard = ({
  index,
  name,
  designation,
  company,
  image,
  testimonial,
}) => {
  return (
    <motion.div
      variants={fadeIn("down", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="font-black text-white text-[48px]">"</p>
      <div className="mt-1">
        <p className="tracking-wider text-white text-[18px]">{testimonial}</p>

        <div className="mt-7 flex items-center gap-1 justify-between">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="padding bg-tertiary rounded-2xl min-h-[300px]">
        <motion.div variants={textVariant(0.2)}>
          <p className="sectionSubText">What Others say</p>
          <h2 className="sectionHeadText">Testimonials.</h2>
        </motion.div>
      </div>
      <div className="paddingX -mt-20 pb-14 flex flex-wrap gap-7">
        {testimonials.map((testimonial, index) => (
          <FeedBackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
