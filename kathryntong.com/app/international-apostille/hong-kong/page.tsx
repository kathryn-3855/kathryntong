import type { Metadata } from "next"
import HongKongApostilleClientPage from "./hong-kong-client-page"

export const metadata: Metadata = {
  title: "香港 Apostille 海牙认证服务 | 美国文件",
  description:
    "香港接受海牙 Apostille。提供美国文件用于香港的认证服务，流程清楚，支持邮寄办理。",
  keywords:
    "Hong Kong apostille, Hong Kong document legalization, Hague Convention Hong Kong, Hong Kong apostille services, Hong Kong document authentication, 香港海牙认证, 美国文件认证",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/hong-kong",
    languages: {
      "en": "https://kathrynsmobilenotary.com/international-apostille/hong-kong",
      "zh-HK": "https://kathrynsmobilenotary.com/international-apostille/hong-kong",
    },
  },
  other: {
    "title:en": "Hong Kong Apostille Services | Hague Apostille",
    "description:en": "Hong Kong accepts Hague apostilles. We provide apostille services for U.S. documents used in Hong Kong, including mail-in options.",
  },
}

export default function HongKongApostillePage() {
  return <HongKongApostilleClientPage />
}

