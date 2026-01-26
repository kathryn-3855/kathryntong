import type { Metadata } from "next"
import LosAngelesCityPageClient from "./city-page-client"
import LocalBusinessSchema from "@/components/local-business-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Los Angeles Mobile Notary & Apostille Services | Kathryn's",
  description:
    "Mobile notary and apostille services throughout Los Angeles. Same-day and mail-in apostille for local and international documents.",
  keywords: "mobile notary Los Angeles, notary public Los Angeles CA, traveling notary LA, on-site notary Los Angeles, same day notary Los Angeles, 24 hour notary Los Angeles, apostille services Los Angeles, California apostille Los Angeles, notary near me Los Angeles, mobile notary downtown LA, West Los Angeles notary, Central Los Angeles notary, Koreatown notary, Mid-Wilshire notary, Silverlake notary, Vernon notary, Commerce notary, document notarization Los Angeles, power of attorney notary LA, real estate notary Los Angeles, embassy legalization Los Angeles, certified apostille agent Los Angeles, bilingual notary Los Angeles, Mandarin notary LA, Cantonese notary LA",
  openGraph: {
    title: "Los Angeles Mobile Notary & Apostille Services | Kathryn's",
    description: "Mobile notary and apostille services throughout Los Angeles. Same-day and mail-in apostille for local and international documents.",
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
  const losAngelesFAQs = [
    {
      question: "Do you provide mobile notary services throughout Los Angeles?",
      answer: "Yes. Mobile notary services are available across Los Angeles by appointment, including residential, business, and institutional locations."
    },
    {
      question: "Can I obtain an apostille for documents issued outside Los Angeles County?",
      answer: "Yes. Apostille services are based on the issuing authority, not the city. California-issued documents from any county may be eligible."
    },
    {
      question: "Do you offer same-day apostille services in Los Angeles?",
      answer: "Same-day apostille may be available for eligible California documents, subject to document type and submission timing."
    },
    {
      question: "Are international apostille services available for Los Angeles clients?",
      answer: "Yes. We assist with apostille and document authentication for Hague and non-Hague countries."
    }
  ]

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={losAngelesFAQs} />
      <LosAngelesCityPageClient />
    </>
  )
}

