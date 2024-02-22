"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function Experience() {
  const [company, setCompany] = useState(experienceData[0].company);
  const handleClick = (e: any) => {
    setCompany(e.target.textContent);
  };
  return (
    <section className="flex items-center flex-grow md:flex-grow-0">
      <div className="w-full">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-semibold text-font-primary mr-4">
            <span className="text-lg font-mono text-green">02. </span>
            Experience
          </h2>
          <div className="flex-1 border border-t-1 border-font-tertiary"></div>
        </div>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="w-full md:w-[150px]">
            <ul className="gap-0">
              {experienceData.map((experience, index) => (
                <li key={index}>
                  <button
                    onClick={handleClick}
                    className={`hover:bg-navy-light hover:text-green w-full transition-all duration-500 p-2 m-0 text-sm border-l-4 border-font-tertiary font-mono text-left text-font-secondary ${experience.company === company && "text-green border-green"}`}
                  >
                    {experience.company}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-[530px]">
            {experienceData.map((experience, index) => (
              <div key={index}>
                {experience.company === company && (
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
                          {experience.date}
                        </p>
                      </div>
                      <ul>
                        {experience.tasks.map((task, index) => (
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
                            {task}
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

const experienceData = [
  {
    company: "Upstatement Digital Studio",
    position: "Front-End Developer",
    date: "2019 - Present",
    tasks: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
      "Collaborate with designers, developers, and project managers to ensure the successful delivery of projects",
      "Contribute to the development of internal tools and processes to improve the efficiency and quality of the development team's work",
    ],
  },
  {
    company: "Apple",
    position: "Software Engineer",
    date: "2017 - 2019",
    tasks: [
      "Developed and maintained the front-end of the company's website",
      "Collaborated with designers to create a seamless user experience",
      "Worked with the marketing team to create promotional materials",
      "Developed internal tools to improve the efficiency of the development team's work",
    ],
  },
  {
    company: "Scout Studio",
    position: "Front-End Developer",
    date: "2015 - 2017",
    tasks: [
      "Worked with clients to create custom websites and web applications",
      "Collaborated with designers to create a seamless user experience",
      "Developed and maintained the front-end of the company's website",
      "Created promotional materials for the company's services",
    ],
  },
];
