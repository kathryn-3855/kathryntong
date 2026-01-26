import type { Metadata } from "next"
import ChinaApostilleClientPage from "./china-client-page"

export const metadata: Metadata = {
  title: "中国文件海牙认证 Apostille 服务 | 美国文件",
  description:
    "中国已加入海牙认证公约（2023）。提供美国文件 Apostille 认证服务，支持邮寄办理，流程清晰可靠。",
  keywords:
    "China apostille, Mainland China apostille, Hague Convention China, China document legalization, Chinese embassy legalization, China apostille services, 中国海牙认证, 美国文件认证",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/china",
    languages: {
      "en": "https://kathrynsmobilenotary.com/international-apostille/china",
      "zh-CN": "https://kathrynsmobilenotary.com/international-apostille/china",
    },
  },
  other: {
    "title:en": "Apostille Services for China | U.S. Documents",
    "description:en": "China joined the Hague Apostille Convention in 2023. We assist with apostilles for U.S. documents used in Mainland China. Mail-in available.",
  },
}

export default function ChinaApostillePage() {
  return <ChinaApostilleClientPage />
}

