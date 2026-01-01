import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in West Hollywood, CA | Same-Day Service",
  description:
    "Professional mobile notary and apostille services in West Hollywood, CA. Same-day service available. We travel to your location - offices, homes, studios. Serving West Hollywood and surrounding areas with professional, efficient service.",
  keywords: "mobile notary West Hollywood, apostille West Hollywood, notary services West Hollywood CA, mobile notary West Hollywood CA, notary public West Hollywood, same day notary West Hollywood, apostille services West Hollywood",
  openGraph: {
    title: "Mobile Notary & Apostille Services in West Hollywood, CA",
    description: "Professional mobile notary and apostille services in West Hollywood, CA. Same-day service available.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const westHollywoodData = {
  cityName: "West Hollywood",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in West Hollywood, CA. Serving residents, businesses, and entertainment industry professionals throughout West Hollywood. Our mobile notary service provides convenient, professional notarization at your office, home, or studio. We specialize in entertainment industry documents, business contracts, real estate transactions, and apostille services for international use.",
  imagePath: "/images/cities/west-hollywood.jpg",
  imageAlt: "West Hollywood with mobile notary services",
  services: [
    "Entertainment Industry Document Notarization",
    "Business Contract Notarization",
    "Apostille Services",
    "Real Estate Documents",
    "Power of Attorney",
    "Estate Planning Documents",
  ],
  benefits: [
    "Mobile service throughout West Hollywood",
    "Entertainment industry document expertise",
    "Same-day appointments available",
    "Flexible scheduling for busy professionals",
    "Fast apostille processing",
    "Professional and efficient service",
  ],
}

export default function WestHollywoodPage() {
  return <CityPage {...westHollywoodData} />
}
