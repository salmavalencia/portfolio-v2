'use client'

import Header from "@/components/header";
import Main from "@/components/main";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import { useStore } from "@/components/actions";

export default function Home() {
  const { isOpen } = useStore();
  return (
    <>
      <Header />
        <div className={`-mt-20 ${isOpen && 'blur-sm'}`}>
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
      </div>
      <footer></footer>
    </>
  );
}
