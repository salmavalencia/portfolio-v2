"use client";

import Header from "@/components/header";
import Main from "@/components/main";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import { useStore } from "@/components/actions";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  const { isOpen } = useStore();
  return (
    <>
      <Header />
      <div
        className={`-mt-20 ${isOpen && "transition-all duration-500 blur-sm"}`}
      >
        <div className="flex flex-col h-screen">
          <main className="flex flex-grow container">
            <Main />
          </main>
        </div>
        <div className="mb-48 flex flex-grow justify-center container">
          <AboutMe />
        </div>
        <div className="mb-48 flex flex-grow justify-center container">
          <Experience />
        </div>
        <div className="container">
          <Skills />
        </div>
        <div className="container">
          <Contact />
        </div>
      </div>
      <footer></footer>
    </>
  );
}
