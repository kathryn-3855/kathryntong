import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in South Pasadena, CA | San Gabriel Valley | Same-Day",
  description:
    "Licensed mobile notary public serving South Pasadena, CA & San Gabriel Valley. Same-day notarization & apostille services. We travel to offices, healthcare facilities, homes in South Pasadena, Highland Park, Eagle Rock. California certified apostille agent. Healthcare facility expertise. Available 7 days/week.",
  keywords: "mobile notary South Pasadena, notary public South Pasadena CA, traveling notary South Pasadena, on-site notary South Pasadena, same day notary South Pasadena, 24 hour notary South Pasadena, apostille services South Pasadena, California apostille South Pasadena, notary near me South Pasadena, San Gabriel Valley notary, Highland Park notary, Eagle Rock notary, healthcare facility notary South Pasadena, medical facility notary South Pasadena, real estate notary South Pasadena, power of attorney notary South Pasadena, estate planning notary South Pasadena, business document notary South Pasadena, embassy legalization South Pasadena, certified apostille agent South Pasadena, bilingual notary South Pasadena",
  openGraph: {
    title: "Mobile Notary & Apostille Services in South Pasadena, CA | San Gabriel Valley",
    description: "Licensed mobile notary public serving South Pasadena, CA & San Gabriel Valley. Same-day notarization & apostille services. Healthcare facility expertise.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-south-pasadena",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/south-pasadena.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in South Pasadena, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-south-pasadena",
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
