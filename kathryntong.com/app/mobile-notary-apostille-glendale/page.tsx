import type { Metadata } from "next"
import GlendaleCityPageClient from "./city-page-client"

export const metadata: Metadata = {
  title: "Glendale Mobile Notary & Apostille Services | Kathryn's",
  description:
    "Professional mobile notary and apostille services in Glendale. Same-day and mail-in apostille available for California and international documents.",
  keywords: "mobile notary Glendale, notary public Glendale CA, traveling notary Glendale, on-site notary Glendale, same day notary Glendale, 24 hour notary Glendale, apostille services Glendale, California apostille Glendale, notary near me Glendale, mobile notary Glendale CA, document notarization Glendale, power of attorney notary Glendale, real estate notary Glendale, embassy legalization Glendale, certified apostille agent Glendale, bilingual notary Glendale",
  openGraph: {
    title: "Glendale Mobile Notary & Apostille Services | Kathryn's",
    description: "Professional mobile notary and apostille services in Glendale. Same-day and mail-in apostille available for California and international documents.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-glendale",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/glendale.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Glendale, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-glendale",
  },
}

export default function GlendalePage() {
  return <GlendaleCityPageClient />
}

