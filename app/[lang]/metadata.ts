import { fetchAPI } from "./utils/fetch-api";
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const path = `/landing-pages/1?populate[metadata][populate][0]=metaImage&sort[createdAt]=desc`;
    const urlParamsObject = {
        sort: { createdAt: "desc" }
    };
    const responseData = await fetchAPI(path, urlParamsObject, options);
    
    if (!responseData) {
      return { title: "SV Portfolio", description: "SV Portfolio" };
    }

    const metadata = responseData.data.attributes.metadata;

    return {
      title: metadata?.metaTitle,
      description: metadata?.metaDescription,
      icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon.png", type: "image/png" },
          ],
      },
    }
}