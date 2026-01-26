import type { Metadata } from "next"
import HongKongApostilleClientPage from "./hong-kong-client-page"

export const metadata: Metadata = {
  title: "Hong Kong Apostille Services | Hague Apostille",
  description:
    "Hong Kong accepts Hague apostilles. We provide apostille services for U.S. documents used in Hong Kong, including mail-in options.",
  keywords:
    "Hong Kong apostille, Hong Kong document legalization, Hague Convention Hong Kong, Hong Kong apostille services, Hong Kong document authentication",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function HongKongApostillePage() {
  return <HongKongApostilleClientPage />
}

