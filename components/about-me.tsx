import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="flex items-center">
      <div className="max-w-[900px]">
        <h2 className="text-3xl font-semibold text-font-primary mb-8">
          <span className="text-lg font-mono text-green">01. </span>
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4 text-md md:text-lg text-font-secondary md:w-3/5">
            <p>
              Hello! My name is Salma and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <SkillTable />
          </div>
          <div className="md:w-2/5 mx-8 flex justify-center h-fit">
            <div className="w-fit border rounded border-green hover:bg-navy-dark transition-all duration-500">
              <div className="rounded hover:-translate-y-1 hover:-translate-x-1 transition-all duration-400 bg-green w-fit relative -left-2 -top-2">
                <Image
                  src="/images/profile.jpg"
                  alt="profile photo"
                  width="270"
                  height="270"
                  className="opacity-75 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillTable() {
  let processedTableData = processArray(tableData);

  return (
    <table className="border-separate border-spacing-y-3 font-mono text-sm md:text-md">
      <tbody>
        {processedTableData.map((row) => (
          <tr className="pb-4">
            {row.map((item) => (
              <td>
                <div className="flex gap-2 items-center">
                  <FaArrowRight color="#64ffda" /> {item}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const tableData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Eleventy",
  "Node.js",
  "WordPress",
];

function processArray(data: Array<string>) {
  //creates an array with arrays consisting of two strings
  let newArr: Array<Array<string>> = [];
  let tempArr: Array<string> = [];

  data.forEach((item, index) => {
    tempArr.push(item);

    if ((index + 1) % 2 === 0) {
      newArr.push(tempArr);
      tempArr = [];
    }
  });

  return newArr;
}
