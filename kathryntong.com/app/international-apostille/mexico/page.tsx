import type { Metadata } from "next"
import MexicoApostilleClientPage from "./mexico-client-page"

export const metadata: Metadata = {
  title: "Apostille Services for Mexico | Kathryn's Mobile Notary",
  description:
    "Professional apostille services for Mexico. Hague Apostille Convention member. Expert guidance for U.S. documents intended for use in Mexico.",
  keywords:
    "Mexico apostille, Mexico document legalization, Hague Convention Mexico, Mexico apostille services, Mexico document authentication",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function MexicoApostillePage() {
  return <MexicoApostilleClientPage />
}

