import type { Metadata } from "next"
import PasadenaCityPageClient from "./city-page-client"

export const metadata: Metadata = {
  title: "Pasadena Mobile Notary & Apostille Services",
  description:
    "Mobile notary and apostille services in Pasadena. Same-day apostille and international document processing available.",
  keywords: "mobile notary Pasadena, notary public Pasadena CA, traveling notary Pasadena, on-site notary Pasadena, same day notary Pasadena, 24 hour notary Pasadena, apostille services Pasadena, California apostille Pasadena, notary near me Pasadena, San Gabriel Valley notary, East Pasadena notary, South Pasadena notary, Glendale notary, La Canada notary, healthcare facility notary Pasadena, medical facility notary Pasadena, real estate notary Pasadena, power of attorney notary Pasadena, estate planning notary Pasadena, embassy legalization Pasadena, certified apostille agent Pasadena, bilingual notary Pasadena",
  openGraph: {
    title: "Pasadena Mobile Notary & Apostille Services",
    description: "Mobile notary and apostille services in Pasadena. Same-day apostille and international document processing available.",
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

