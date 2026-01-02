import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Santa Monica, CA | Same-Day Service",
  description:
    "Professional mobile notary and apostille services in Santa Monica, CA. Same-day service available. We travel to your location - offices, homes, beach areas. Serving Santa Monica and surrounding coastal communities.",
  keywords: "mobile notary Santa Monica, apostille Santa Monica, notary services Santa Monica CA, mobile notary Santa Monica CA, notary public Santa Monica, same day notary Santa Monica, apostille services Santa Monica",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Santa Monica, CA",
    description: "Professional mobile notary and apostille services in Santa Monica, CA. Same-day service available.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const santaMonicaData = {
  cityName: "Santa Monica",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in Santa Monica, CA. Serving residents, businesses, and professionals throughout Santa Monica and the surrounding coastal areas. Our mobile notary service provides convenient, same-day notarization at your office, home, or any location in Santa Monica. We specialize in real estate documents, business contracts, and apostille services for international use.",
  imagePath: "/images/cities/santa-monica.jpg",
  imageAlt: "Santa Monica with mobile notary services",
  services: [
    "Real Estate Document Notarization",
    "Business Contract Notarization",
    "Apostille Services",
    "Power of Attorney",
    "Estate Planning Documents",
    "Healthcare Directives",
  ],
  benefits: [
    "Mobile service throughout Santa Monica and coastal areas",
    "Same-day appointments available",
    "Experience with high-value real estate transactions",
    "Flexible scheduling for busy professionals",
    "Fast apostille processing for international documents",
    "Professional and discreet service",
  ],
  surroundingAreas: ["Pacific Palisades", "Venice"],
}

export default function SantaMonicaPage() {
  return <CityPage {...santaMonicaData} />
}
