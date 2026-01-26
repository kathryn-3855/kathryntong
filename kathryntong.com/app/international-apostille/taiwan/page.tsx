import type { Metadata } from "next"
import TaiwanApostilleClientPage from "./taiwan-client-page"

export const metadata: Metadata = {
  title: "台湾文件认证 Apostille 服务 | 美国文件",
  description:
    "提供美国文件用于台湾的认证与 Apostille 服务。协助确认文件要求，支持邮寄办理。",
  keywords:
    "Taiwan apostille, Taiwan document authentication, Taiwan legalization, Taiwan document services, Taiwan authentication services, 台湾文件认证, 美国文件认证",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/taiwan",
    languages: {
      "en": "https://kathrynsmobilenotary.com/international-apostille/taiwan",
      "zh-TW": "https://kathrynsmobilenotary.com/international-apostille/taiwan",
    },
  },
  other: {
    "title:en": "Document Authentication for Taiwan | Apostille Services",
    "description:en": "Professional authentication and apostille services for documents used in Taiwan. We verify requirements and offer convenient mail-in processing.",
  },
}

export default function TaiwanApostillePage() {
  return <TaiwanApostilleClientPage />
}

