import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2004 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology (B.Tech) in Computer Science"
            subTitle="Shri Ram Institute of Technology, Jabalpur (RGPV Affiliated) | 2019 - 2023"
            result="8.74/10"
            des="Completed undergraduate studies in Computer Science Engineering under RGPV, focusing on software development, data structures, algorithms, and engineering fundamentals."
          />
          <ResumeCard
            title="Higher Secondary School Education (12th - PCM)"
            subTitle="Sri Deo Murlidhar Higher Secondary School, MP Board (2018 - 2019)"
            result="86.80%"
            des="Completed 12th grade with Physics, Chemistry, and Mathematics (PCM) under the Madhya Pradesh Board of Secondary Education."
          />
          <ResumeCard
            title="High School Education (10th)"
            subTitle="Sri Deo Murlidhar Higher Secondary School, MP Board (2016 - 2017)"
            result="89.50%"
            des="Completed 10th grade under the Madhya Pradesh Board of Secondary Education, laying a foundation in science, mathematics, and languages."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
