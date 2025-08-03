import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { Tilt } from "react-tilt";

const FeedBackCard = ({
  index,
  name,
  designation,
  company,
  image,
  testimonial,
}) => {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div
        variants={fadeIn("down", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full shadow-2xl border-1 border-fuchsia-100/70 shadow-purple-500/20"
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
    </Tilt>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="padding  rounded-2xl min-h-[300px]">
        <motion.div variants={textVariant(0.2)}>
          <p className="sectionSubText">What Others say</p>
          <h2 className="sectionHeadText">Testimonials.</h2>
        </motion.div>
      </div>
      <div className="paddingX -mt-20 pb-14 flex items-center justify-center flex-wrap gap-7">
        {testimonials.map((testimonial, index) => (
          <FeedBackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
