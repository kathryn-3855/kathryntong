import type { Metadata } from "next"
import SantaMonicaCityPageClient from "./city-page-client"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Santa Monica, CA | Coastal Areas | Same-Day",
  description:
    "Licensed mobile notary public serving Santa Monica, CA & coastal communities. Same-day notarization & apostille services. We travel to offices, homes, beach areas in Santa Monica, Pacific Palisades, Venice. California certified apostille agent. High-value real estate expertise. Available 7 days/week.",
  keywords: "mobile notary Santa Monica, notary public Santa Monica CA, traveling notary Santa Monica, on-site notary Santa Monica, same day notary Santa Monica, 24 hour notary Santa Monica, apostille services Santa Monica, California apostille Santa Monica, notary near me Santa Monica, Pacific Palisades notary, Venice notary, beach area notary Santa Monica, coastal notary Santa Monica, real estate notary Santa Monica, high-value real estate notary, business contract notary Santa Monica, power of attorney notary Santa Monica, estate planning notary Santa Monica, healthcare directive notary Santa Monica, embassy legalization Santa Monica, certified apostille agent Santa Monica",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Santa Monica, CA | Coastal Communities",
    description: "Licensed mobile notary public serving Santa Monica, CA & coastal communities. Same-day notarization & apostille services. High-value real estate expertise.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-santa-monica-ca",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/santa-monica.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Santa Monica, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-santa-monica-ca",
  },
}

export default function SantaMonicaPage() {
  return <SantaMonicaCityPageClient />
}

