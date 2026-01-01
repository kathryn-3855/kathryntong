import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in South Pasadena, CA | Kathryn's Mobile Notary",
  description:
    "Professional mobile notary and apostille services in South Pasadena, CA. Same-day service available.",
  keywords: "mobile notary South Pasadena, apostille South Pasadena, notary services South Pasadena CA",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function SouthPasadenaPage() {
  return <CityPage cityName="South Pasadena" cityState="CA" />
}

