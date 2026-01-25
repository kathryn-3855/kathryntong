import type { Metadata } from "next"
import TaiwanApostilleClientPage from "./taiwan-client-page"

export const metadata: Metadata = {
  title: "Apostille Services for Taiwan | Kathryn's Mobile Notary",
  description:
    "Professional document authentication services for Taiwan. Non-Hague country requiring state or federal authentication. Expert guidance for U.S. documents intended for use in Taiwan.",
  keywords:
    "Taiwan apostille, Taiwan document authentication, Taiwan legalization, Taiwan document services, Taiwan authentication services",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function TaiwanApostillePage() {
  return <TaiwanApostilleClientPage />
}

