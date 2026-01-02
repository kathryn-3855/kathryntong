import type { Metadata } from "next"
import BeverlyHillsCityPageClient from "./city-page-client"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services in Beverly Hills, CA | Discreet | Same-Day",
  description:
    "Premium mobile notary services in Beverly Hills, CA. Discreet, professional notarization for high-net-worth clients, estate planning, luxury real estate transactions. Serving Beverly Hills, Bel Air, Brentwood, Beverly Crest. Same-day appointments. California certified apostille agent.",
  keywords: "mobile notary Beverly Hills, notary public Beverly Hills CA, traveling notary Beverly Hills, on-site notary Beverly Hills, same day notary Beverly Hills, 24 hour notary Beverly Hills, apostille services Beverly Hills, California apostille Beverly Hills, notary near me Beverly Hills, Bel Air notary, Brentwood notary, Beverly Crest notary, estate planning notary Beverly Hills, luxury real estate notary Beverly Hills, high-value transaction notary, entertainment industry notary Beverly Hills, power of attorney notary Beverly Hills, trust document notary Beverly Hills, embassy legalization Beverly Hills, certified apostille agent Beverly Hills, discreet notary Beverly Hills, confidential notary Beverly Hills",
  openGraph: {
    title: "Mobile Notary & Apostille Services in Beverly Hills, CA | Discreet Professional Service",
    description: "Premium mobile notary services in Beverly Hills, CA. Discreet, professional notarization for high-net-worth clients, estate planning, luxury real estate transactions.",
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

