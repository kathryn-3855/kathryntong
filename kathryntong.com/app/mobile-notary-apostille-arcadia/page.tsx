import type { Metadata } from "next"
import ArcadiaCityPageClient from "./city-page-client"

export const metadata: Metadata = {
  title: "Arcadia Mobile Notary & Apostille Services",
  description:
    "Mobile notary and apostille services in Arcadia. Serving families and businesses with mail-in and international apostille options.",
  keywords: "mobile notary Arcadia, notary public Arcadia CA, traveling notary Arcadia, on-site notary Arcadia, same day notary Arcadia, 24 hour notary Arcadia, apostille services Arcadia, California apostille Arcadia, notary near me Arcadia, San Gabriel Valley notary, Temple City notary, San Gabriel notary, Rosemead notary, Monrovia notary, healthcare facility notary Arcadia, medical facility notary Arcadia, real estate notary Arcadia, power of attorney notary Arcadia, estate planning notary Arcadia, business document notary Arcadia, embassy legalization Arcadia, certified apostille agent Arcadia, bilingual notary Arcadia, Mandarin notary Arcadia, Cantonese notary Arcadia",
  openGraph: {
    title: "Arcadia Mobile Notary & Apostille Services",
    description: "Mobile notary and apostille services in Arcadia. Serving families and businesses with mail-in and international apostille options.",
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

export default function ArcadiaPage() {
  return <ArcadiaCityPageClient />
}

