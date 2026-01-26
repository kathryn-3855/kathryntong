import type { Metadata } from "next"
import ArcadiaCityPageClient from "./city-page-client"
import FAQSchema from "@/components/faq-schema"

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
  const arcadiaFAQs = [
    {
      question: "Do you offer mobile notary services in Arcadia?",
      answer: "Yes. Mobile notary services are available throughout Arcadia by appointment."
    },
    {
      question: "Can you assist with apostilles for family-related documents?",
      answer: "Yes. We commonly assist with apostilles for birth certificates, marriage certificates, and family documents."
    },
    {
      question: "Do you provide apostille services for international use?",
      answer: "Yes. Apostille and authentication services are available for documents used abroad."
    },
    {
      question: "Is same-day apostille service available in Arcadia?",
      answer: "Same-day service may be available depending on document eligibility."
    }
  ]

  return (
    <>
      <FAQSchema faqs={arcadiaFAQs} />
      <ArcadiaCityPageClient />
    </>
  )
}

