export default function Main({mainData}: {mainData: MainProps}) {
  return (
    <section className="flex items-center">
      {mainData && (<div className="animate-fade-up flex flex-col gap-4">
        <p className="text-base text-green font-mono">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl text-font-primary font-bold">
          {mainData.title1}
        </h1>
        <h2 className="text-4xl md:text-7xl text-font-secondary font-bold">
          {mainData.title2}
        </h2>
        <p className="drop-shadow-lg shadow-blacktext-base text-font-secondary max-w-xl leading-7">
          {mainData.description}
        </p>
      </div>)}
    </section>
  );
}

interface MainProps {
  title1: string
  title2: string
  subtitle: string
  description: string
}