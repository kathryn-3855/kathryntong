import type { Metadata } from "next"
import WestHollywoodCityPageClient from "./city-page-client"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "West Hollywood Mobile Notary & Apostille Services",
  description:
    "Professional mobile notary and apostille services in West Hollywood. Appointment-based service for local and international documents.",
  keywords: "mobile notary West Hollywood, notary public West Hollywood CA, traveling notary West Hollywood, on-site notary West Hollywood, same day notary West Hollywood, 24 hour notary West Hollywood, apostille services West Hollywood, California apostille West Hollywood, notary near me West Hollywood, Hollywood notary, Hollywood Hills West notary, East Hollywood notary, Studio City notary, Sunset Strip notary, entertainment industry notary West Hollywood, studio notary West Hollywood, business contract notary West Hollywood, real estate notary West Hollywood, power of attorney notary West Hollywood, estate planning notary West Hollywood, embassy legalization West Hollywood, certified apostille agent West Hollywood",
  openGraph: {
    title: "West Hollywood Mobile Notary & Apostille Services",
    description: "Professional mobile notary and apostille services in West Hollywood. Appointment-based service for local and international documents.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-west-hollywood",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/west-hollywood.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in West Hollywood, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-west-hollywood",
  },
}

export default function WestHollywoodPage() {
  const westHollywoodFAQs = [
    {
      question: "Is mobile notary service available in West Hollywood?",
      answer: "Yes. Mobile notary services are available throughout West Hollywood by appointment."
    },
    {
      question: "Can you notarize and apostille personal legal documents?",
      answer: "Yes. Common documents include powers of attorney, affidavits, and sworn statements."
    },
    {
      question: "Do you offer discreet, appointment-only service?",
      answer: "Yes. All services are appointment-based and handled professionally and confidentially."
    },
    {
      question: "Is mail-in apostille available?",
      answer: "Yes. Mail-in apostille services are available when in-person service is not required."
    }
  ]

  return (
    <>
      <FAQSchema faqs={westHollywoodFAQs} />
      <WestHollywoodCityPageClient />
    </>
  )
}

