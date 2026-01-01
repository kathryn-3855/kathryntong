import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Arcadia, CA | Kathryn's Mobile Notary",
  description:
    "Professional mobile notary and apostille services in Arcadia, CA. Same-day service available.",
  keywords: "mobile notary Arcadia, apostille Arcadia, notary services Arcadia CA",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function ArcadiaPage() {
  return <CityPage cityName="Arcadia" cityState="CA" />
}

