import type { Metadata } from "next"
import SouthKoreaApostilleClientPage from "./south-korea-client-page"

export const metadata: Metadata = {
  title: "Apostille Services for South Korea | Kathryn's Mobile Notary",
  description:
    "Professional apostille services for South Korea. Hague Apostille Convention member. Expert guidance for U.S. documents intended for use in South Korea.",
  keywords:
    "South Korea apostille, South Korea document legalization, Hague Convention South Korea, South Korea apostille services, South Korea document authentication",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function SouthKoreaApostillePage() {
  return <SouthKoreaApostilleClientPage />
}

