import type { Metadata } from "next"
import LosAngelesCityPageClient from "./city-page-client"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Los Angeles, CA | Same-Day | 626-590-3560",
  description:
    "Licensed mobile notary public serving Los Angeles, CA. Same-day notarization & apostille services. We travel to offices, law firms, hospitals, homes in Downtown LA, West LA, Koreatown, Mid-Wilshire, Silverlake, Vernon, Commerce. California certified apostille agent. Available 7 days/week.",
  keywords: "mobile notary Los Angeles, notary public Los Angeles CA, traveling notary LA, on-site notary Los Angeles, same day notary Los Angeles, 24 hour notary Los Angeles, apostille services Los Angeles, California apostille Los Angeles, notary near me Los Angeles, mobile notary downtown LA, West Los Angeles notary, Central Los Angeles notary, Koreatown notary, Mid-Wilshire notary, Silverlake notary, Vernon notary, Commerce notary, document notarization Los Angeles, power of attorney notary LA, real estate notary Los Angeles, embassy legalization Los Angeles, certified apostille agent Los Angeles, bilingual notary Los Angeles, Mandarin notary LA, Cantonese notary LA",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Los Angeles, CA | Same-Day Service",
    description: "Licensed mobile notary public serving Los Angeles, CA. Same-day notarization & apostille services. We travel to your location - offices, law firms, hospitals, homes.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-los-angeles-ca",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/los-angeles.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Los Angeles, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-los-angeles-ca",
  },
}

export default function LosAngelesPage() {
  return <LosAngelesCityPageClient />
}

