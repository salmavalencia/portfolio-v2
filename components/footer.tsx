import { useEffect } from "react"
import DynamicIcon from "@/app/[lang]/utils/dynamic-icon";
import Link from "next/link";
export default function Footer({footerData}: {footerData: FooterProps}) {
  useEffect(() => {
    console.log(footerData.social_medias.data)
  }, [])
  return (
    <footer className="flex flex-col justify-center mb-4 gap-4">
        <p className="text-center text-font-secondary text-sm">
          {footerData.footerText  }
        </p>
        <div className="flex justify-center gap-3">
          {footerData.social_medias.data.map(element => (
            <Link href={element.attributes.link} className="bg-font-primary rounded-full p-2 hover:bg-font-secondary" target="_blank">
              <DynamicIcon iconName={element.attributes.icon} size="25px" color="black" />
            </Link>
          )) }
        </div>
    </footer>
  )
}

interface FooterProps {
  footerText: string
  social_medias: {
    data: {
      attributes: {
        platform: string
        link: string
        icon: string
      }
    }[]
  }
}
