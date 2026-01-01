import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Culver City, CA | Same-Day Service",
  description:
    "Professional mobile notary and apostille services in Culver City, CA. Same-day service available. We travel to your location - offices, homes, studios. Serving Culver City and surrounding areas.",
  keywords: "mobile notary Culver City, apostille Culver City, notary services Culver City CA, mobile notary Culver City CA, notary public Culver City, same day notary Culver City, apostille services Culver City",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Culver City, CA",
    description: "Professional mobile notary and apostille services in Culver City, CA. Same-day service available.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const culverCityData = {
  cityName: "Culver City",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in Culver City, CA. Serving the entertainment industry, local businesses, and residents throughout Culver City. Our mobile notary service brings professional notarization directly to your office, studio, or home. We specialize in same-day service for urgent document needs and apostille services for international use.",
  imagePath: "/images/cities/culver-city.jpg",
  imageAlt: "Culver City with mobile notary services",
  services: [
    "Entertainment Industry Documents",
    "Business Contract Notarization",
    "Apostille Services",
    "Real Estate Documents",
    "Power of Attorney",
    "Estate Planning",
  ],
  benefits: [
    "Convenient mobile service throughout Culver City",
    "Same-day appointments available",
    "Experience with entertainment industry documents",
    "Flexible scheduling for busy professionals",
    "Fast apostille processing",
    "Bilingual support available",
  ],
  surroundingAreas: ["Mar Vista", "Marina Del Rey"],
}

export default function CulverCityPage() {
  return <CityPage {...culverCityData} />
}
