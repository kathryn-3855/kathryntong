import type { Metadata } from "next"
import SameDayApostilleClientPage from "./same-day-apostille-client-page"

export const metadata: Metadata = {
  title: "Same-Day Apostille Services | Kathryn's Mobile Notary",
  description:
    "Expedited same-day apostille services for time-sensitive documents. Fast processing for California-issued documents that qualify for expedited processing.",
  keywords:
    "same day apostille, expedited apostille, fast apostille, California apostille, urgent apostille",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function SameDayApostillePage() {
  return <SameDayApostilleClientPage />
}

