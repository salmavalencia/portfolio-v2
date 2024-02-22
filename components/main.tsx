import Link from "next/link";

export default function Main() {
  return (
    <section className="flex items-center">
      <div className="flex flex-col gap-4">
        <p className="text-base text-green font-mono">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl text-font-primary font-bold">
          Salma Valencia.
        </h1>
        <h2 className="text-4xl md:text-7xl text-font-secondary font-bold">
          I build things for the web.
        </h2>
        <p className="drop-shadow-lg shadow-blacktext-base text-font-secondary max-w-xl leading-7">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at{" "}
          <Link href="#" className="text-green">
            Upstatement
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
