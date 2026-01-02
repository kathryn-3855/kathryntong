import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in South Pasadena, CA | Same-Day Service",
  description:
    "Professional mobile notary and apostille services in South Pasadena, CA. Same-day service available. We travel to your location - offices, homes, medical facilities. Serving South Pasadena and surrounding San Gabriel Valley areas.",
  keywords: "mobile notary South Pasadena, apostille South Pasadena, notary services South Pasadena CA, mobile notary South Pasadena CA, notary public South Pasadena, same day notary South Pasadena, apostille services South Pasadena",
  openGraph: {
    title: "Mobile Notary & Apostille Services in South Pasadena, CA",
    description: "Professional mobile notary and apostille services in South Pasadena, CA. Same-day service available.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const southPasadenaData = {
  cityName: "South Pasadena",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in South Pasadena, CA. Serving residents, businesses, and healthcare facilities throughout South Pasadena and the San Gabriel Valley. Our mobile notary service brings professional notarization directly to your location. We specialize in healthcare documents, real estate transactions, and apostille services for international use.",
  imagePath: "/images/cities/south-pasadena.jpg",
  imageAlt: "South Pasadena with mobile notary services",
  services: [
    "Healthcare Document Notarization",
    "Real Estate Document Notarization",
    "Apostille Services",
    "Power of Attorney",
    "Estate Planning Documents",
    "Business Document Notarization",
  ],
  benefits: [
    "Mobile service throughout South Pasadena and San Gabriel Valley",
    "Healthcare facility notarization expertise",
    "Same-day appointments available",
    "Experience with real estate and healthcare documents",
    "Fast apostille processing",
    "Bilingual services available",
  ],
  surroundingAreas: ["Highland Park", "Eagle Rock"],
}

export default function SouthPasadenaPage() {
  return <CityPage {...southPasadenaData} />
}
