'use client'

import { useState } from "react";

export default function Experience() {
    const [ company, setCompany ] = useState(experienceData[0].company); 
    const handleClick = (e: any) => {
        setCompany(e.target.textContent);
    }
    return (
        <section className="flex items-center">
            <div className="max-w-[700px]">
                <div className="flex items-center mb-8">
                    <h2 className="text-3xl font-semibold text-font-primary mr-4">
                        <span className="text-lg font-mono text-green">02. </span>
                        Experience
                    </h2>
                    <div className="flex-1 border border-t-1 border-font-tertiary"></div>
                </div>
                <div className="flex gap-6">
                    <div className="md:w-[150px]">
                        <ul className="gap-0">
                            {experienceData.map((experience, index) => (
                                <li key={index}><button onClick={handleClick} className={`m-0 text-sm border-l-4 font-mono ${experience.company === company && 'text-green'}`}>{experience.company}</button></li>    
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-[550px]">
                        {experienceData.map((experience) => (
                            <div>
                                {experience.company === company && (
                                    <div>
                                        {experience.tasks[0]}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const experienceData = [
    {
        company: "Upstatement",
        position: "Front-End Developer",
        date: "2019 - Present",
        tasks: ["Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
            "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
            "Collaborate with designers, developers, and project managers to ensure the successful delivery of projects",
            "Contribute to the development of internal tools and processes to improve the efficiency and quality of the development team's work",        
        ]
    },
    {
        company: "Apple",
        position: "Software Engineer",
        date: "2017 - 2019",
        tasks: ["Developed and maintained the front-end of the company's website",
            "Collaborated with designers to create a seamless user experience",
            "Worked with the marketing team to create promotional materials",
            "Developed internal tools to improve the efficiency of the development team's work",
        ]
    },
    {
        company: "Scout Studio",
        position: "Front-End Developer",
        date: "2015 - 2017",
        tasks: ["Worked with clients to create custom websites and web applications",
            "Collaborated with designers to create a seamless user experience",
            "Developed and maintained the front-end of the company's website",
            "Created promotional materials for the company's services",
        ]
    }
]
