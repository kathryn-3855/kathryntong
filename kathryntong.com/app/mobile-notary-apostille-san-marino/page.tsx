import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in San Marino, CA | Estate Planning | Same-Day",
  description:
    "Licensed mobile notary public serving San Marino, CA & San Gabriel Valley. Discreet, professional notarization for estate planning, high-value real estate, trusts. We travel to offices, homes, estates in San Marino, Alhambra, Monterey Park. California certified apostille agent. Same-day appointments.",
  keywords: "mobile notary San Marino, notary public San Marino CA, traveling notary San Marino, on-site notary San Marino, same day notary San Marino, 24 hour notary San Marino, apostille services San Marino, California apostille San Marino, notary near me San Marino, Alhambra notary, Monterey Park notary, estate planning notary San Marino, trust document notary San Marino, high-value real estate notary San Marino, power of attorney notary San Marino, will notary San Marino, advance healthcare directive notary San Marino, business document notary San Marino, embassy legalization San Marino, certified apostille agent San Marino, discreet notary San Marino, confidential notary San Marino",
  openGraph: {
    title: "Mobile Notary & Apostille Services in San Marino, CA | Estate Planning Expertise",
    description: "Licensed mobile notary public serving San Marino, CA & San Gabriel Valley. Discreet, professional notarization for estate planning, high-value real estate, trusts.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-san-marino",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/san-marino.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in San Marino, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-san-marino",
  },
}

const sanMarinoData = {
  cityName: "San Marino",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in San Marino, CA. Serving residents, businesses, and estate planning needs throughout San Marino and the San Gabriel Valley. Our mobile notary service provides discreet, professional notarization at your location. We specialize in estate planning documents, high-value real estate transactions, and apostille services for international use.",
  imagePath: "/images/cities/san-marino.jpg",
  imageAlt: "San Marino with mobile notary services",
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
    "Discreet mobile service throughout San Marino",
    "Estate planning document expertise",
    "Same-day appointments available",
    "Experience with high-value transactions",
    "Fast apostille processing",
    "Professional and confidential service",
  ],
  surroundingAreas: ["Alhambra", "Monterey Park"],
  popularSectors: [
    "Tourism & Local Retail setups",
    "Banking & Professional Services",
    "Light Manufacturing such as Ceramics, Clothing, Furnitures",
    "Real Estate Brokerages & Service Providers",
  ],
}

export default function SanMarinoPage() {
  return <CityPage {...sanMarinoData} />
}

