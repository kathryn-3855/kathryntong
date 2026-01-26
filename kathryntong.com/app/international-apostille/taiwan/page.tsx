import type { Metadata } from "next"
import TaiwanApostilleClientPage from "./taiwan-client-page"

export const metadata: Metadata = {
  title: "Document Authentication for Taiwan | Apostille Services",
  description:
    "Professional authentication and apostille services for documents used in Taiwan. We verify requirements and offer convenient mail-in processing.",
  keywords:
    "Taiwan apostille, Taiwan document authentication, Taiwan legalization, Taiwan document services, Taiwan authentication services",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function TaiwanApostillePage() {
  return <TaiwanApostilleClientPage />
}

