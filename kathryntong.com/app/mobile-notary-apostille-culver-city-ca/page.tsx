import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Culver City, CA | Kathryn's Mobile Notary",
  description:
    "Professional mobile notary and apostille services in Culver City, CA. Same-day service available.",
  keywords: "mobile notary Culver City, apostille Culver City, notary services Culver City CA",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function CulverCityPage() {
  return <CityPage cityName="Culver City" cityState="CA" />
}

