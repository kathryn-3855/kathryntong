import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Pasadena, CA | San Gabriel Valley | Same-Day",
  description:
    "Licensed mobile notary public serving Pasadena, CA & San Gabriel Valley. Same-day notarization & apostille services. We travel to offices, healthcare facilities, homes in Pasadena, East Pasadena, South Pasadena, Glendale, La Canada. California certified apostille agent. Healthcare facility expertise.",
  keywords: "mobile notary Pasadena, notary public Pasadena CA, traveling notary Pasadena, on-site notary Pasadena, same day notary Pasadena, 24 hour notary Pasadena, apostille services Pasadena, California apostille Pasadena, notary near me Pasadena, San Gabriel Valley notary, East Pasadena notary, South Pasadena notary, Glendale notary, La Canada notary, healthcare facility notary Pasadena, medical facility notary Pasadena, real estate notary Pasadena, power of attorney notary Pasadena, estate planning notary Pasadena, embassy legalization Pasadena, certified apostille agent Pasadena, bilingual notary Pasadena",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Pasadena, CA | San Gabriel Valley",
    description: "Licensed mobile notary public serving Pasadena, CA & San Gabriel Valley. Same-day notarization & apostille services. Healthcare facility expertise.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-pasadena-ca",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/pasadena.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Pasadena, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-pasadena-ca",
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
