import Card from "@/components/ui/card";
import Link from "next/link";
import { useRef } from "react";
import { useIsVisible } from "./hooks/visible";
import { FaArrowRight } from "react-icons/fa";

export default function Skills() {
  const refTable = useRef<HTMLDivElement>(null);
  const isVisibleTable = useIsVisible(refTable);

  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold text-font-primary mb-3">
        <span className="text-lg font-mono text-green">03. </span>
        My Skills
      </h2>
      <Link href="#">
        <p className="text-green font-mono text-md mb-12">My projects</p>
      </Link>
      <div
        ref={refTable}
        className="text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {skillsData.map((skill, index) => (
          <Card
            className={`p-7 py-9 flex flex-col justify-between ${isVisibleTable && "animate-fade-up animate-duration-1000"}`}
            key={index}
          >
            <div>
              <div className="pb-6">
                <FaArrowRight size="30px" color="#64ffda" />
              </div>
              <h3 className="font-bold text-xl text-font-primary mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-font-secondary mb-4">
                {skill.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {skill.technologies &&
                skill.technologies.map((tech, j) => (
                  <p key={j} className="text-sm font-mono text-font-secondary">
                    {tech}
                  </p>
                ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

const skillsData = [
  {
    icon: "faCircleCheck",
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: "faCircleCheck",
    title: "Integrating Algolia Search with WordPress Multisite",
    description: "Building a custom multisite",
    technologies: ["HTML", "CSS", "JavaScript", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: "faCircleCheck",
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: "faCircleCheck",
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
  },
  {
    icon: "faCircleCheck",
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: "faCircleCheck",
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: "faCircleCheck",
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: "faCircleCheck",
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: "faCircleCheck",
    title: "Integrating Algolia Search with WordPress Multisite",
    description: "Building a custom multisite compatible WordPress",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
