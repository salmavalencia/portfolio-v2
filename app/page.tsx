import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Main from "@/components/main";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <Header />
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
  );
}
