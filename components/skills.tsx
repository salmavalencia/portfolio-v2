import Card from "@/components/ui/card";
import Link from "next/link";
import { Suspense, useRef } from "react";
import { useIsVisible } from "./hooks/visible";
import React, { lazy } from "react";
import DynamicIcon from "@/app/[lang]/utils/dynamic-icon";

export default function Skills({skillData}: {skillData: SkillProps}) {
  const refTable = useRef<HTMLDivElement>(null);
  const isVisibleTable = useIsVisible(refTable);

  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold text-font-primary mb-3">
        <span className="text-lg font-mono text-green">03. </span>
        {skillData.title}
      </h2>
      <Link href="#">
        <p className="text-green font-mono text-md mb-12">{skillData.subtitle}</p>
      </Link>
      <div
        ref={refTable}
        className="text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {skillData.card.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <Card
            className={`opacity-0 p-7 py-9 flex flex-col justify-between ${isVisibleTable && "animate-fade-up animate-duration-1000"}`}
            key={index}
          >
            <div>
              <div className="pb-6">
                  <DynamicIcon iconName={skill.icon} size="30px" color="#64ffda"/>
              </div>
              <h3 className="font-bold text-xl text-font-primary mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-font-secondary mb-4">
                {skill.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {skill.skills_teches &&
                skill.skills_teches.data.map((element, j) => (
                  <p key={j} className="text-sm font-mono text-font-secondary">
                    {element.attributes.name}
                  </p>
                ))}
            </div>
          </Card>
          )
        })}
      </div>
    </section>
  );
}

interface SkillProps {
  title: string,
  subtitle: string,
  card: CardProps[]
}

interface CardProps {
  icon: string,
  title: string,
  description: string,
  skills_teches: {
    data: {
      attributes: {
        name: string
      }
    }[]
  }
}

