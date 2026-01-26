import type { Metadata } from "next"
import SouthPasadenaCityPageClient from "./city-page-client"

export const metadata: Metadata = {
  title: "South Pasadena Mobile Notary & Apostille Services",
  description:
    "Mobile notary and apostille services in South Pasadena. Same-day and mail-in apostille available by appointment.",
  keywords: "mobile notary South Pasadena, notary public South Pasadena CA, traveling notary South Pasadena, on-site notary South Pasadena, same day notary South Pasadena, 24 hour notary South Pasadena, apostille services South Pasadena, California apostille South Pasadena, notary near me South Pasadena, San Gabriel Valley notary, Highland Park notary, Eagle Rock notary, healthcare facility notary South Pasadena, medical facility notary South Pasadena, real estate notary South Pasadena, power of attorney notary South Pasadena, estate planning notary South Pasadena, business document notary South Pasadena, embassy legalization South Pasadena, certified apostille agent South Pasadena, bilingual notary South Pasadena",
  openGraph: {
    title: "South Pasadena Mobile Notary & Apostille Services",
    description: "Mobile notary and apostille services in South Pasadena. Same-day and mail-in apostille available by appointment.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-south-pasadena",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/south-pasadena.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in South Pasadena, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-south-pasadena",
  },
}

export default function SouthPasadenaPage() {
  return <SouthPasadenaCityPageClient />
}

