import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Arcadia, CA | Same-Day Service",
  description:
    "Professional mobile notary and apostille services in Arcadia, CA. Same-day service available. We travel to your location - offices, homes, medical facilities. Serving Arcadia and surrounding San Gabriel Valley communities.",
  keywords: "mobile notary Arcadia, apostille Arcadia, notary services Arcadia CA, mobile notary Arcadia CA, notary public Arcadia, same day notary Arcadia, apostille services Arcadia, San Gabriel Valley notary",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Arcadia, CA",
    description: "Professional mobile notary and apostille services in Arcadia, CA. Same-day service available.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const arcadiaData = {
  cityName: "Arcadia",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in Arcadia, CA. Serving residents, businesses, and healthcare facilities throughout Arcadia and the San Gabriel Valley. Our mobile notary service provides convenient, professional notarization at your location. We specialize in healthcare documents, real estate transactions, and apostille services for international use.",
  imagePath: "/images/cities/arcadia.jpg",
  imageAlt: "Arcadia with mobile notary services",
  services: [
    "Healthcare Document Notarization",
    "Real Estate Document Notarization",
    "Apostille Services",
    "Power of Attorney",
    "Estate Planning Documents",
    "Business Document Notarization",
  ],
  benefits: [
    "Mobile service throughout Arcadia and San Gabriel Valley",
    "Healthcare facility notarization expertise",
    "Same-day appointments available",
    "Experience with real estate transactions",
    "Fast apostille processing",
    "Bilingual services in English, Mandarin, and Cantonese",
  ],
  surroundingAreas: ["Temple City", "San Gabriel", "Rosemead", "Monrovia"],
}

export default function ArcadiaPage() {
  return <CityPage {...arcadiaData} />
}
