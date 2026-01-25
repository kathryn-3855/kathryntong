import type { Metadata } from "next"
import PhilippinesApostilleClientPage from "./philippines-client-page"

export const metadata: Metadata = {
  title: "Apostille Services for the Philippines | Kathryn's Mobile Notary",
  description:
    "Professional apostille services for the Philippines. Hague Apostille Convention member. Expert guidance for U.S. documents intended for use in the Philippines.",
  keywords:
    "Philippines apostille, Philippines document legalization, Hague Convention Philippines, Philippines apostille services, Philippines document authentication",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function PhilippinesApostillePage() {
  return <PhilippinesApostilleClientPage />
}

