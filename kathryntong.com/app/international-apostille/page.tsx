import type { Metadata } from "next"
import InternationalApostilleClientPage from "./international-apostille-client-page"

export const metadata: Metadata = {
  title: "International Apostille & Document Legalization Services | Kathryn's Mobile Notary",
  description:
    "Professional international apostille and document legalization services for Hague and non-Hague countries. Expert guidance for China, Taiwan, Hong Kong, Mexico, South Korea, and Philippines.",
  keywords:
    "international apostille, document legalization, Hague Convention, non-Hague countries, China apostille, Taiwan legalization, embassy legalization, consulate authentication",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function InternationalApostillePage() {
  return <InternationalApostilleClientPage />
}

