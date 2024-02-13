import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
      <main className="container">
        <h1 className="text-4xl font-bold">Brittany Chiang</h1>
        <Button className="px-6">Check out my course!</Button>
      </main>
    </>
  );
}
