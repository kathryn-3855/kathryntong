import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Santa Monica, CA | Kathryn's Mobile Notary",
  description:
    "Professional mobile notary and apostille services in Santa Monica, CA. Same-day service available.",
  keywords: "mobile notary Santa Monica, apostille Santa Monica, notary services Santa Monica CA",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function SantaMonicaPage() {
  return <CityPage cityName="Santa Monica" cityState="CA" />
}

