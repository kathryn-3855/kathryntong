import type { Metadata } from "next"
import ChinaApostilleClientPage from "./china-client-page"

export const metadata: Metadata = {
  title: "Apostille Services for China | U.S. Documents",
  description:
    "China joined the Hague Apostille Convention in 2023. We assist with apostilles for U.S. documents used in Mainland China. Mail-in available.",
  keywords:
    "China apostille, Mainland China apostille, Hague Convention China, China document legalization, Chinese embassy legalization, China apostille services",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function ChinaApostillePage() {
  return <ChinaApostilleClientPage />
}

