import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in San Marino, CA | Same-Day Service",
  description:
    "Professional mobile notary and apostille services in San Marino, CA. Same-day service available. We travel to your location - offices, homes, estates. Serving San Marino and surrounding San Gabriel Valley communities.",
  keywords: "mobile notary San Marino, apostille San Marino, notary services San Marino CA, mobile notary San Marino CA, notary public San Marino, same day notary San Marino, apostille services San Marino",
  openGraph: {
    title: "Mobile Notary & Apostille Services in San Marino, CA",
    description: "Professional mobile notary and apostille services in San Marino, CA. Same-day service available.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const sanMarinoData = {
  cityName: "San Marino",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in San Marino, CA. Serving residents, businesses, and estate planning needs throughout San Marino and the San Gabriel Valley. Our mobile notary service provides discreet, professional notarization at your location. We specialize in estate planning documents, high-value real estate transactions, and apostille services for international use.",
  imagePath: "/images/cities/san-marino.jpg",
  imageAlt: "San Marino with mobile notary services",
  services: [
    "Estate Planning Document Notarization",
    "Real Estate Document Notarization",
    "Apostille Services",
    "Power of Attorney",
    "Trust Documents",
    "Business Document Notarization",
  ],
  benefits: [
    "Discreet mobile service throughout San Marino",
    "Estate planning document expertise",
    "Same-day appointments available",
    "Experience with high-value transactions",
    "Fast apostille processing",
    "Professional and confidential service",
  ],
}

export default function SanMarinoPage() {
  return <CityPage {...sanMarinoData} />
}
