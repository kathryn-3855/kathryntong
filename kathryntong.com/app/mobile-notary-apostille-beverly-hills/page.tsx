import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Beverly Hills, CA | Same-Day Service",
  description:
    "Professional mobile notary and apostille services in Beverly Hills, CA. Same-day service available. We travel to your location - offices, homes, luxury estates. Serving Beverly Hills and surrounding areas with discreet, professional service.",
  keywords: "mobile notary Beverly Hills, apostille Beverly Hills, notary services Beverly Hills CA, mobile notary Beverly Hills CA, notary public Beverly Hills, same day notary Beverly Hills, apostille services Beverly Hills",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Beverly Hills, CA",
    description: "Professional mobile notary and apostille services in Beverly Hills, CA. Same-day service available.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const beverlyHillsData = {
  cityName: "Beverly Hills",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in Beverly Hills, CA. Serving high-net-worth individuals, businesses, and entertainment industry professionals throughout Beverly Hills. Our mobile notary service provides discreet, professional notarization at your location. We specialize in estate planning, high-value real estate transactions, business contracts, and apostille services for international use.",
  imagePath: "/images/cities/beverly-hills.jpg",
  imageAlt: "Beverly Hills with mobile notary services",
  services: [
    "Estate Planning Document Notarization",
    "High-Value Real Estate Documents",
    "Apostille Services",
    "Power of Attorney",
    "Trust Documents",
    "Entertainment Industry Contracts",
  ],
  benefits: [
    "Discreet mobile service throughout Beverly Hills",
    "Estate planning and high-value transaction expertise",
    "Same-day appointments available",
    "Experience with entertainment industry documents",
    "Fast apostille processing",
    "Professional and confidential service",
  ],
}

export default function BeverlyHillsPage() {
  return <CityPage {...beverlyHillsData} />
}
