import type { Metadata } from "next"
import ChinaApostilleClientPage from "./china-client-page"

export const metadata: Metadata = {
  title: "Apostille Services for China (Mainland China) | Kathryn's Mobile Notary",
  description:
    "Professional apostille services for Mainland China. Hague Apostille Convention member as of November 2023. Expert guidance for U.S. documents intended for use in China.",
  keywords:
    "China apostille, Mainland China apostille, Hague Convention China, China document legalization, Chinese embassy legalization, China apostille services",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function ChinaApostillePage() {
  return <ChinaApostilleClientPage />
}

