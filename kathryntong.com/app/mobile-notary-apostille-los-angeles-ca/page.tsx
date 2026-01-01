import type { Metadata } from "next"
import CityPage from "./city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Los Angeles, CA | Kathryn's Mobile Notary",
  description:
    "Professional mobile notary and apostille services in Los Angeles, CA. Same-day service available.",
  keywords: "mobile notary Los Angeles, apostille Los Angeles, notary services Los Angeles CA",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function LosAngelesPage() {
  return <CityPage cityName="Los Angeles" cityState="CA" />
}

