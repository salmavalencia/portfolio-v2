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
        setData(responseData.data);
        console.log(responseData.data)
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
      <Header />
      <div
        className={`-mt-20 ${isOpen && "transition-all duration-500 blur-sm"}`}
      >
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
        <div className="container">
          <Skills />
        </div>
        <div className="container">
          <Contact />
        </div>
      </div>
      <footer></footer>
    </>
  );
}
