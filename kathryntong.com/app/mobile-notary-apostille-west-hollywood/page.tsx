import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in West Hollywood, CA | Kathryn's Mobile Notary",
  description:
    "Professional mobile notary and apostille services in West Hollywood, CA. Same-day service available.",
  keywords: "mobile notary West Hollywood, apostille West Hollywood, notary services West Hollywood CA",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function WestHollywoodPage() {
  return <CityPage cityName="West Hollywood" cityState="CA" />
}

