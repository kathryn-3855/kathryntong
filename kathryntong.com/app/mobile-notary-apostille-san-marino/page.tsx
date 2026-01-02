import type { Metadata } from "next"
import SanMarinoCityPageClient from "./city-page-client"

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

export default function SanMarinoPage() {
  return <SanMarinoCityPageClient />
}

