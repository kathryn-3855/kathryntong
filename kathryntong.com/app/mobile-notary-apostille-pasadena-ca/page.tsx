import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Pasadena, CA | Kathryn's Mobile Notary",
  description:
    "Professional mobile notary and apostille services in Pasadena, CA. Same-day service available.",
  keywords: "mobile notary Pasadena, apostille Pasadena, notary services Pasadena CA",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function PasadenaPage() {
  return <CityPage cityName="Pasadena" cityState="CA" />
}

