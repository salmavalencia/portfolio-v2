import Card from "@/components/ui/card";
import Link from "next/link";
import { Suspense, useRef } from "react";
import { useIsVisible } from "./hooks/visible";
import React, { lazy } from "react";
import type { IconType } from "react-icons";

const DynamicIcon = ({iconName, size, color}: IconProps) => {
  const IconComponent = lazy(async () => {
    const module = await import("react-icons/fa");
    const Component = module[iconName as keyof typeof module] as IconType | undefined;

    if (!Component) {
      throw new Error(`Icon "${iconName}" not found in react-icons/fa`);
    }

    return { default: Component };
  });

  return (
    <Suspense fallback={<div role="status">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
      </div> }>
      <IconComponent size={size} color={color} />
    </Suspense>
  );
}

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

interface IconProps {
  iconName: string
  color: string
  size: string
}