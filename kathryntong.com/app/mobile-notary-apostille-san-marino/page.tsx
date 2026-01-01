import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in San Marino, CA | Kathryn's Mobile Notary",
  description:
    "Professional mobile notary and apostille services in San Marino, CA. Same-day service available.",
  keywords: "mobile notary San Marino, apostille San Marino, notary services San Marino CA",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function SanMarinoPage() {
  return <CityPage cityName="San Marino" cityState="CA" />
}

