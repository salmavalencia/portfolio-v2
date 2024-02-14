import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Main from "@/components/main";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex flex-grow container">
          <Main />
        </main>
      </div>
      <div className="h-96">
        <h2>HELLO</h2>
      </div>
    </div>
  );
}
