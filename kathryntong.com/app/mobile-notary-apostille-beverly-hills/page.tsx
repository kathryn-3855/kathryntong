import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Beverly Hills, CA | Discreet | Same-Day",
  description:
    "Premium mobile notary services in Beverly Hills, CA. Discreet, professional notarization for high-net-worth clients, estate planning, luxury real estate transactions. Serving Beverly Hills, Bel Air, Brentwood, Beverly Crest. Same-day appointments. California certified apostille agent.",
  keywords: "mobile notary Beverly Hills, notary public Beverly Hills CA, traveling notary Beverly Hills, on-site notary Beverly Hills, same day notary Beverly Hills, 24 hour notary Beverly Hills, apostille services Beverly Hills, California apostille Beverly Hills, notary near me Beverly Hills, Bel Air notary, Brentwood notary, Beverly Crest notary, estate planning notary Beverly Hills, luxury real estate notary Beverly Hills, high-value transaction notary, entertainment industry notary Beverly Hills, power of attorney notary Beverly Hills, trust document notary Beverly Hills, embassy legalization Beverly Hills, certified apostille agent Beverly Hills, discreet notary Beverly Hills, confidential notary Beverly Hills",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Beverly Hills, CA | Discreet Professional Service",
    description: "Premium mobile notary services in Beverly Hills, CA. Discreet, professional notarization for high-net-worth clients, estate planning, luxury real estate transactions.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-beverly-hills",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/beverly-hills.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Beverly Hills, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-beverly-hills",
  },
}

const beverlyHillsData = {
  cityName: "Beverly Hills",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in Beverly Hills, CA. Serving high-net-worth individuals, businesses, and entertainment industry professionals throughout Beverly Hills. Our mobile notary service provides discreet, professional notarization at your location. We specialize in estate planning, high-value real estate transactions, business contracts, and apostille services for international use.",
  imagePath: "/images/cities/beverly-hills.jpg",
  imageAlt: "Beverly Hills with mobile notary services",
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
    "Discreet mobile service throughout Beverly Hills",
    "Estate planning and high-value transaction expertise",
    "Same-day appointments available",
    "Experience with entertainment industry documents",
    "Fast apostille processing",
    "Professional and confidential service",
  ],
  surroundingAreas: ["Bel Air", "Brentwood", "Beverly Crest"],
  popularSectors: [
    "Luxury Tourism & Hospitality, like Rodeo Drive Shops and Beverly Hills Hotel",
    "Entertainment industry - leveraging its Hollywood proximity for Film, TV and Media related activities",
    "Retail & High-end services - home to Luxury Fashion Brands and Exclusive Boutiques alike",
    "Luxury Real Estate Brokerages & related services",
    "Construction - One of the most sought after cities for Celebrity Homes & Development of Exclusive Estates",
  ],
}

export default function BeverlyHillsPage() {
  return <CityPage {...beverlyHillsData} />
}

