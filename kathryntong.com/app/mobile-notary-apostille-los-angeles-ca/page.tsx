import type { Metadata } from "next"
import CityPage from "./city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Los Angeles, CA | Same-Day Service",
  description:
    "Professional mobile notary and apostille services in Los Angeles, CA. Same-day service available. We travel to your location - offices, homes, hospitals. Serving Downtown LA, Hollywood, Beverly Hills, and all LA County.",
  keywords: "mobile notary Los Angeles, apostille Los Angeles, notary services Los Angeles CA, mobile notary downtown LA, notary public Los Angeles, same day notary LA, apostille services Los Angeles, document notarization LA",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Los Angeles, CA",
    description: "Professional mobile notary and apostille services in Los Angeles, CA. Same-day service available.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const losAngelesData = {
  cityName: "Los Angeles",
  cityState: "CA",
  description: "Professional mobile notary and apostille services throughout Los Angeles, CA. As a trusted mobile notary public, we bring our services directly to your location - whether that's your office in Downtown LA, your home in Hollywood, or any other convenient location. We specialize in same-day notarization and apostille services for businesses, attorneys, and individuals throughout Los Angeles County.",
  imagePath: "/images/cities/los-angeles.jpg",
  imageAlt: "Los Angeles skyline with mobile notary services",
  services: [
    "Real Estate Document Notarization",
    "Power of Attorney Notarization",
    "Apostille Services",
    "Embassy Legalization",
    "Business Document Notarization",
    "Estate Planning Documents",
  ],
  benefits: [
    "Same-day mobile notary service throughout Los Angeles County",
    "We travel to your office, home, or any convenient location",
    "Experienced with complex legal and business documents",
    "Available 7 days a week with flexible scheduling",
    "Fast apostille processing for international documents",
    "Bilingual services in English, Mandarin, and Cantonese",
  ],
}

export default function LosAngelesPage() {
  return <CityPage {...losAngelesData} />
}
