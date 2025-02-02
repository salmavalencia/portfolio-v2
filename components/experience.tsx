"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function Experience({experienceData}: {experienceData: ExperienceProps}) {
  const [company, setCompany] = useState(experienceData.experiences[0].organization);
  const handleClick = (e: any) => {
    setCompany(e.target.textContent);
  };
  return (
    <section className="flex items-center flex-grow md:flex-grow-0 scroll-mt-28" id="experience">
      <div className="w-full">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-semibold text-font-primary mr-4">
            <span className="text-lg font-mono text-green">02. </span>
            {experienceData.title}
          </h2>
          <div className="flex-1 border border-t-1 border-font-tertiary"></div>
        </div>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="w-full md:w-[150px]">
            <ul className="gap-0">
              {experienceData.experiences.map((experience, index) => (
                <li key={index}>
                  <button
                    onClick={handleClick}
                    className={`hover:bg-navy-light hover:text-green w-full transition-all duration-500 p-2 m-0 text-sm border-l-4 border-font-tertiary font-mono text-left text-font-secondary ${experience.organization === company && "text-green border-green"}`}
                  >
                    {experience.organization}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-[530px]">
            {experienceData.experiences.map((experience, index) => (
              <div key={index}>
                {experience.organization === company && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex flex-col gap-1 mb-4">
                        <h3 className="text-font-primary text-xl font-semibold">
                          {experience.position}
                        </h3>
                        <p className="font-mono text-font-primary text-sm">
                          {experience.duration}
                        </p>
                      </div>
                      <ul>
                        {experience.tasks.map((element, index) => (
                          <li
                            key={index}
                            className="flex gap-3 text-font-secondary mb-2"
                          >
                            <span>
                              <FaArrowRight
                                className="relative top-1"
                                color="#64ffda"
                              />
                            </span>{" "}
                            {element.task}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceProps {
  title: string,
  experiences: ExperiencePropsArr[]
}

interface ExperiencePropsArr {
  organization: string,
  position: string,
  duration: string
  tasks: {
    task: string
  }[]
}