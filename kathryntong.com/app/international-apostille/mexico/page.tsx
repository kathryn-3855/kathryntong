import type { Metadata } from "next"
import MexicoApostilleClientPage from "./mexico-client-page"

export const metadata: Metadata = {
  title: "Mexico Apostille Services | U.S. Documents",
  description:
    "Mexico is a Hague Apostille member. Apostille services for U.S. documents used in Mexico, including birth certificates and powers of attorney.",
  keywords:
    "Mexico apostille, Mexico document legalization, Hague Convention Mexico, Mexico apostille services, Mexico document authentication",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function MexicoApostillePage() {
  return <MexicoApostilleClientPage />
}

