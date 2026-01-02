import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Culver City, CA | Entertainment Industry | Same-Day",
  description:
    "Licensed mobile notary public serving Culver City, CA. Same-day notarization & apostille services for entertainment industry, studios, businesses. We travel to offices, studios, homes in Culver City, Mar Vista, Marina Del Rey. California certified apostille agent. Available 7 days/week.",
  keywords: "mobile notary Culver City, notary public Culver City CA, traveling notary Culver City, on-site notary Culver City, same day notary Culver City, 24 hour notary Culver City, apostille services Culver City, California apostille Culver City, notary near me Culver City, Mar Vista notary, Marina Del Rey notary, entertainment industry notary Culver City, studio notary Culver City, Sony Pictures notary, business contract notary Culver City, real estate notary Culver City, power of attorney notary Culver City, embassy legalization Culver City, certified apostille agent Culver City, bilingual notary Culver City",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Culver City, CA | Entertainment Industry",
    description: "Licensed mobile notary public serving Culver City, CA. Same-day notarization & apostille services for entertainment industry, studios, businesses.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-culver-city-ca",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/culver-city.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Culver City, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-culver-city-ca",
  },
}

const culverCityData = {
  cityName: "Culver City",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in Culver City, CA. Serving the entertainment industry, local businesses, and residents throughout Culver City. Our mobile notary service brings professional notarization directly to your office, studio, or home. We specialize in same-day service for urgent document needs and apostille services for international use.",
  imagePath: "/images/cities/culver-city.jpg",
  imageAlt: "Culver City with mobile notary services",
  services: [
    "Mobile Notary",
    "State & Federal Apostille",
    "Embassy Legalization",
    "Power of Attorney",
    "Trust, Will & Advance Healthcare Directives",
    "International Business & Education Documents",
    "Same-Day and Expedited Services available",
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
  popularSectors: [
    "Media & Entertainment companies, such as Sony Pictures, Culver Studios etc.",
    "Digital & E-Commerce Corporations",
    "Health & Wellness Groups",
  ],
}

export default function CulverCityPage() {
  return <CityPage {...culverCityData} />
}

