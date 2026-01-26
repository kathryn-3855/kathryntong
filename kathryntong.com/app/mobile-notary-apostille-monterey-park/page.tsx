import type { Metadata } from "next"
import MontereyParkCityPageClient from "./city-page-client"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Monterey Park Mobile Notary & Apostille Services | Kathryn's",
  description:
    "Mobile notary and apostille services in Monterey Park. Same-day and mail-in apostille available for U.S. and international documents.",
  keywords: "mobile notary Monterey Park, notary public Monterey Park CA, traveling notary Monterey Park, on-site notary Monterey Park, same day notary Monterey Park, 24 hour notary Monterey Park, apostille services Monterey Park, California apostille Monterey Park, notary near me Monterey Park, mobile notary Monterey Park CA, document notarization Monterey Park, power of attorney notary Monterey Park, real estate notary Monterey Park, embassy legalization Monterey Park, certified apostille agent Monterey Park, bilingual notary Monterey Park, China apostille Monterey Park, Taiwan apostille Monterey Park, Hong Kong apostille Monterey Park",
  openGraph: {
    title: "Monterey Park Mobile Notary & Apostille Services | Kathryn's",
    description: "Mobile notary and apostille services in Monterey Park. Same-day and mail-in apostille available for U.S. and international documents.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-monterey-park",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/monterey-park.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Monterey Park, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-monterey-park",
  },
}

export default function MontereyParkPage() {
  const montereyParkFAQs = [
    {
      question: "Do you provide mobile notary services throughout Monterey Park?",
      answer: "Yes. Mobile notary services are available throughout Monterey Park by appointment."
    },
    {
      question: "Can I get an apostille without visiting an office?",
      answer: "Yes. Apostille services are available through mail-in processing or mobile pickup, depending on the document."
    },
    {
      question: "Do you handle apostilles for documents used in China, Taiwan, or Hong Kong?",
      answer: "Yes. We assist with apostille and document authentication for documents used in China, Taiwan, Hong Kong, and other countries."
    },
    {
      question: "Is same-day apostille available for Monterey Park clients?",
      answer: "Same-day apostille may be available for eligible California documents, depending on document type and submission timing."
    }
  ]

  return (
    <>
      <FAQSchema faqs={montereyParkFAQs} />
      <MontereyParkCityPageClient />
    </>
  )
}

