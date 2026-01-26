import type { Metadata } from "next"
import PhilippinesApostilleClientPage from "./philippines-client-page"

export const metadata: Metadata = {
  title: "Philippines Apostille Services | U.S. Apostille",
  description:
    "The Philippines accepts Hague apostilles. We assist with apostille services for U.S. documents used for immigration, family, and legal matters.",
  keywords:
    "Philippines apostille, Philippines document legalization, Hague Convention Philippines, Philippines apostille services, Philippines document authentication",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function PhilippinesApostillePage() {
  return <PhilippinesApostilleClientPage />
}

