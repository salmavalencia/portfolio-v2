"use client";

import Header from "@/components/header";
import Main from "@/components/main";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import { useStore } from "@/components/actions";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import { useState, useCallback, useEffect } from "react";
import { fetchAPI } from "./utils/fetch-api";

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default function Home() {
  const { isOpen } = useStore();
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true);

    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/landing-pages`;

      const urlParamsObject = {
        sort: { createdAt: "desc" }
      };

      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);
      
      if (start === 0) {
        setData(responseData.data[0].attributes.blocks);
      } else {
        setData((prevData: any[] ) => [...prevData, ...responseData.data]);
      }
      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  return (
    <>
      <Header headerData={data[5]}/>
      <div
        className={`-mt-20 ${isOpen && "transition-all duration-500 blur-sm"}`}
      >
        <div className="flex flex-col h-screen">
          <main className="flex flex-grow container">
            {data[0] && <Main mainData={data[0]}/>}
          </main>
        </div>
        <div className="mb-48 flex flex-grow justify-center container">
          {data[1] && <AboutMe aboutData={data[1]}/>}
        </div>
        <div className="mb-48 flex flex-grow justify-center container">
          {data[2] && <Experience experienceData={data[2]}/>}
        </div>
        <div className="container">
          {data[3] && <Skills skillData={data[3]}/>}
        </div>
        <div className="container">
          {data[4] && <Contact contactData={data[4]}/>}
        </div>
      </div>
      <footer></footer>
    </>
  );
}
