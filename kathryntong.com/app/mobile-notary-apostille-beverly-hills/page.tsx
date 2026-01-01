import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Beverly Hills, CA | Kathryn's Mobile Notary",
  description:
    "Professional mobile notary and apostille services in Beverly Hills, CA. Same-day service available.",
  keywords: "mobile notary Beverly Hills, apostille Beverly Hills, notary services Beverly Hills CA",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function BeverlyHillsPage() {
  return <CityPage cityName="Beverly Hills" cityState="CA" />
}

