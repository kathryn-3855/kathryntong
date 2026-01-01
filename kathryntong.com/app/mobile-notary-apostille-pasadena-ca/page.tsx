import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Pasadena, CA | Same-Day Service",
  description:
    "Professional mobile notary and apostille services in Pasadena, CA. Same-day service available. We travel to your location - offices, homes, medical facilities. Serving Pasadena, Altadena, and surrounding San Gabriel Valley areas.",
  keywords: "mobile notary Pasadena, apostille Pasadena, notary services Pasadena CA, mobile notary Pasadena CA, notary public Pasadena, same day notary Pasadena, apostille services Pasadena, San Gabriel Valley notary",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Pasadena, CA",
    description: "Professional mobile notary and apostille services in Pasadena, CA. Same-day service available.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const pasadenaData = {
  cityName: "Pasadena",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in Pasadena, CA. Serving residents, businesses, and healthcare facilities throughout Pasadena and the San Gabriel Valley. Our mobile notary service brings professional notarization directly to your location. We specialize in healthcare facility notarizations, real estate documents, and apostille services for international use.",
  imagePath: "/images/cities/pasadena.jpg",
  imageAlt: "Pasadena with mobile notary services",
  services: [
    "Healthcare Facility Notarization",
    "Real Estate Document Notarization",
    "Apostille Services",
    "Power of Attorney",
    "Estate Planning Documents",
    "Business Contract Notarization",
  ],
  benefits: [
    "Mobile service throughout Pasadena and San Gabriel Valley",
    "Specialized healthcare facility notarization",
    "Same-day appointments available",
    "Experience with complex legal documents",
    "Fast apostille processing",
    "Bilingual services available",
  ],
  surroundingAreas: ["East Pasadena", "South Pasadena", "Glendale", "La Canada"],
}

export default function PasadenaPage() {
  return <CityPage {...pasadenaData} />
}
