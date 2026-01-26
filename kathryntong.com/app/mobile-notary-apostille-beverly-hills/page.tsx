import type { Metadata } from "next"
import BeverlyHillsCityPageClient from "./city-page-client"

export const metadata: Metadata = {
  title: "Beverly Hills Mobile Notary & Apostille Services",
  description:
    "Professional mobile notary and apostille services in Beverly Hills. Convenient appointments and mail-in apostille available.",
  keywords: "mobile notary Beverly Hills, notary public Beverly Hills CA, traveling notary Beverly Hills, on-site notary Beverly Hills, same day notary Beverly Hills, 24 hour notary Beverly Hills, apostille services Beverly Hills, California apostille Beverly Hills, notary near me Beverly Hills, Bel Air notary, Brentwood notary, Beverly Crest notary, estate planning notary Beverly Hills, luxury real estate notary Beverly Hills, high-value transaction notary, entertainment industry notary Beverly Hills, power of attorney notary Beverly Hills, trust document notary Beverly Hills, embassy legalization Beverly Hills, certified apostille agent Beverly Hills, discreet notary Beverly Hills, confidential notary Beverly Hills",
  openGraph: {
    title: "Beverly Hills Mobile Notary & Apostille Services",
    description: "Professional mobile notary and apostille services in Beverly Hills. Convenient appointments and mail-in apostille available.",
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

export default function BeverlyHillsPage() {
  return <BeverlyHillsCityPageClient />
}

