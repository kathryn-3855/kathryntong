import type { Metadata } from "next"
import HongKongApostilleClientPage from "./hong-kong-client-page"

export const metadata: Metadata = {
  title: "Apostille Services for Hong Kong | Kathryn's Mobile Notary",
  description:
    "Professional apostille services for Hong Kong. Hague Apostille Convention member. Expert guidance for U.S. documents intended for use in Hong Kong.",
  keywords:
    "Hong Kong apostille, Hong Kong document legalization, Hague Convention Hong Kong, Hong Kong apostille services, Hong Kong document authentication",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function HongKongApostillePage() {
  return <HongKongApostilleClientPage />
}

