import type { Metadata } from "next"
import PasadenaCityPageClient from "./city-page-client"

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

export default function PasadenaPage() {
  return <PasadenaCityPageClient />
}

