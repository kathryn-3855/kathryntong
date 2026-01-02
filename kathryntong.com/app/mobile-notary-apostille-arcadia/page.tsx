import type { Metadata } from "next"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Arcadia, CA | San Gabriel Valley | Same-Day",
  description:
    "Licensed mobile notary public serving Arcadia, CA & San Gabriel Valley. Same-day notarization & apostille services. We travel to offices, healthcare facilities, homes in Arcadia, Temple City, San Gabriel, Rosemead, Monrovia. California certified apostille agent. Healthcare facility expertise. Bilingual services.",
  keywords: "mobile notary Arcadia, notary public Arcadia CA, traveling notary Arcadia, on-site notary Arcadia, same day notary Arcadia, 24 hour notary Arcadia, apostille services Arcadia, California apostille Arcadia, notary near me Arcadia, San Gabriel Valley notary, Temple City notary, San Gabriel notary, Rosemead notary, Monrovia notary, healthcare facility notary Arcadia, medical facility notary Arcadia, real estate notary Arcadia, power of attorney notary Arcadia, estate planning notary Arcadia, business document notary Arcadia, embassy legalization Arcadia, certified apostille agent Arcadia, bilingual notary Arcadia, Mandarin notary Arcadia, Cantonese notary Arcadia",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Arcadia, CA | San Gabriel Valley",
    description: "Licensed mobile notary public serving Arcadia, CA & San Gabriel Valley. Same-day notarization & apostille services. Healthcare facility expertise.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-arcadia",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/arcadia.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Arcadia, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-arcadia",
  },
}

const arcadiaData = {
  cityName: "Arcadia",
  cityState: "CA",
  description: "Professional mobile notary and apostille services in Arcadia, CA. Serving residents, businesses, and healthcare facilities throughout Arcadia and the San Gabriel Valley. Our mobile notary service provides convenient, professional notarization at your location. We specialize in healthcare documents, real estate transactions, and apostille services for international use.",
  imagePath: "/images/cities/arcadia.jpg",
  imageAlt: "Arcadia with mobile notary services",
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
    "Mobile service throughout Arcadia and San Gabriel Valley",
    "Healthcare facility notarization expertise",
    "Same-day appointments available",
    "Experience with real estate transactions",
    "Fast apostille processing",
    "Bilingual services in English, Mandarin, and Cantonese",
  ],
  surroundingAreas: ["Temple City", "San Gabriel", "Rosemead", "Monrovia"],
  popularSectors: [
    "Healthcare Analytics including Health Management & Data Analysis",
    "Aerospace such as Arcadia Aerospace Industries",
    "Manufacturing that focuses on Transportation, Defense & Architectural designs",
    "Clean Energy Groups that provide Renewable Energy & Utility Data",
    "Education & Professional Services including CPA, Wealth Management, Law Firms etc.",
  ],
}

export default function ArcadiaPage() {
  return <CityPage {...arcadiaData} />
}

