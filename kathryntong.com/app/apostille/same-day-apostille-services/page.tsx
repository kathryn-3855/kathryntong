import type { Metadata } from "next"
import SameDayApostilleClientPage from "./same-day-apostille-client-page"

export const metadata: Metadata = {
  title: "Same-Day Apostille Services California | Fast Apostille",
  description:
    "Need an apostille fast? We offer same-day apostille services in California for eligible documents. Serving Los Angeles and clients nationwide.",
  keywords:
    "same day apostille, expedited apostille, fast apostille, California apostille, urgent apostille",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function SameDayApostillePage() {
  return <SameDayApostilleClientPage />
}

