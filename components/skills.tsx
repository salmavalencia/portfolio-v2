import Card from "@/components/ui/card";
import Link from "next/link";

export default function Skills() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold text-font-primary mb-3">
        <span className="text-lg font-mono text-green">03. </span>
        My Skills
      </h2>
      <Link href="#">
        <p className="text-green font-mono text-md mb-9">My projects</p>
      </Link>
    </section>
  );
}
