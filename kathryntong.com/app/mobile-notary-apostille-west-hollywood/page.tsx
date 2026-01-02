import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in West Hollywood, CA | Entertainment | Same-Day",
  description:
    "Licensed mobile notary public serving West Hollywood, CA. Same-day notarization & apostille services for entertainment industry, businesses, residents. We travel to offices, studios, homes in West Hollywood, Hollywood, Hollywood Hills West, East Hollywood, Studio City. California certified apostille agent.",
  keywords: "mobile notary West Hollywood, notary public West Hollywood CA, traveling notary West Hollywood, on-site notary West Hollywood, same day notary West Hollywood, 24 hour notary West Hollywood, apostille services West Hollywood, California apostille West Hollywood, notary near me West Hollywood, Hollywood notary, Hollywood Hills West notary, East Hollywood notary, Studio City notary, Sunset Strip notary, entertainment industry notary West Hollywood, studio notary West Hollywood, business contract notary West Hollywood, real estate notary West Hollywood, power of attorney notary West Hollywood, estate planning notary West Hollywood, embassy legalization West Hollywood, certified apostille agent West Hollywood",
  openGraph: {
    title: "Mobile Notary & Apostille Services in West Hollywood, CA | Entertainment Industry",
    description: "Licensed mobile notary public serving West Hollywood, CA. Same-day notarization & apostille services for entertainment industry, businesses, residents.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-west-hollywood",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/west-hollywood.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in West Hollywood, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-west-hollywood",
  },
}

const westHollywoodData = {
  cityName: "West Hollywood",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in West Hollywood, CA. Serving residents, businesses, and entertainment industry professionals throughout West Hollywood. Our mobile notary service provides convenient, professional notarization at your office, home, or studio. We specialize in entertainment industry documents, business contracts, real estate transactions, and apostille services for international use.",
  imagePath: "/images/cities/west-hollywood.jpg",
  imageAlt: "West Hollywood with mobile notary services",
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
    "Mobile service throughout West Hollywood",
    "Entertainment industry document expertise",
    "Same-day appointments available",
    "Flexible scheduling for busy professionals",
    "Fast apostille processing",
    "Professional and efficient service",
  ],
  surroundingAreas: ["Hollywood", "Hollywood Hills West", "East Hollywood", "Studio City"],
  popularSectors: [
    "Famous for its Sunset Strip alongside strong Fashion & Retail Shops",
    "Thriving Professional Services, e.g. Wealth Management & Business Management, due to its status as a hub for Media, Culture & Entertainment Studios nearby",
    "Los Angeles County Metropolitan Transportation Authority (aka LA Metro) with nearly 700 employees",
  ],
}

export default function WestHollywoodPage() {
  return <CityPage {...westHollywoodData} />
}

