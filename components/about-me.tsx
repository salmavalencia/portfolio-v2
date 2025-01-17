import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function AboutMe({aboutData} : {aboutData: AboutProps}) {
  return (
    <section className="flex items-center">
      <div className="max-w-[900px]">
        <div className="w-full md:w-3/5 flex items-center mb-8">
          <h2 className="text-3xl font-semibold text-font-primary mr-4">
            <span className="text-lg font-mono text-green">01. </span>
            {aboutData.title}
          </h2>
          <div className="flex-1 border border-t-1 border-font-tertiary"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4 text-md md:text-lg text-font-secondary md:w-3/5">
            <p>
              {aboutData.description}
            </p>
            <SkillTable skillData={aboutData.skills_teches.data}/>
          </div>
          <div className="md:w-2/5 mx-8 flex justify-center h-fit">
            <div className="w-fit border rounded border-green hover:bg-navy-dark transition-all duration-500">
              <div className="rounded hover:-translate-y-1 hover:-translate-x-1 transition-all duration-400 bg-green w-fit relative -left-2 -top-2">
                <Image
                  src={process.env.NEXT_PUBLIC_STRAPI_API_URL + aboutData.image.data.attributes.url}
                  alt={aboutData.image.data.attributes.alternativeText ? aboutData.image.data.attributes.alternativeText : ""}
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

interface AboutProps {
  title: string
  description: string
  image: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string | null;
        url: string;
      };
    };
  };
  skills_teches: {
    data: SkillTech[];
  };
}

interface SkillTech {
  id: number;
  attributes: {name: string}
}
function SkillTable({skillData}: {skillData: {attributes: {name: string}}[]}) {
  const skillArr = skillData.map(item => item.attributes.name)

  let processedTableData = processArray(skillArr)

  return (
    <table className="border-separate border-spacing-y-3 font-mono text-sm md:text-md">
      <tbody>
        {skillData && processedTableData.map((row, index) => (
          <tr key={index} className="pb-4">
            {row.map((item, j) => (
              <td key={j}>
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

function processArray(data: Array<string>) {
  //creates an array with arrays consisting of two strings
  let newArr: Array<Array<string>> = [];
  let tempArr: Array<string> = [];

  data.forEach((item, index) => {
    tempArr.push(item);
    
    if ((index + 1) % 2 === 0) {
      newArr.push(tempArr);
      tempArr = []
    } else if (index + 1 == data.length) {
        newArr.push(tempArr)
    }
  });

  return newArr;
}