import type { Metadata } from "next"
import SouthKoreaApostilleClientPage from "./south-korea-client-page"

export const metadata: Metadata = {
  title: "South Korea Apostille Services | Hague Apostille",
  description:
    "Apostille services for U.S. documents used in South Korea. Common for FBI background checks, education, and employment purposes.",
  keywords:
    "South Korea apostille, South Korea document legalization, Hague Convention South Korea, South Korea apostille services, South Korea document authentication",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function SouthKoreaApostillePage() {
  return <SouthKoreaApostilleClientPage />
}

