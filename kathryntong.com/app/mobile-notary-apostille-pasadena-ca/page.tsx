import type { Metadata } from "next"
import PasadenaCityPageClient from "./city-page-client"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Pasadena Mobile Notary & Apostille Services",
  description:
    "Mobile notary and apostille services in Pasadena. Same-day apostille and international document processing available.",
  keywords: "mobile notary Pasadena, notary public Pasadena CA, traveling notary Pasadena, on-site notary Pasadena, same day notary Pasadena, 24 hour notary Pasadena, apostille services Pasadena, California apostille Pasadena, notary near me Pasadena, San Gabriel Valley notary, East Pasadena notary, South Pasadena notary, Glendale notary, La Canada notary, healthcare facility notary Pasadena, medical facility notary Pasadena, real estate notary Pasadena, power of attorney notary Pasadena, estate planning notary Pasadena, embassy legalization Pasadena, certified apostille agent Pasadena, bilingual notary Pasadena",
  openGraph: {
    title: "Pasadena Mobile Notary & Apostille Services",
    description: "Mobile notary and apostille services in Pasadena. Same-day apostille and international document processing available.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-pasadena-ca",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/pasadena.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Pasadena, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-pasadena-ca",
  },
}

export default function PasadenaPage() {
  const pasadenaFAQs = [
    {
      question: "Do you offer mobile notary services in Pasadena?",
      answer: "Yes. Mobile notary services are available throughout Pasadena by appointment."
    },
    {
      question: "Can you assist with apostilles for academic or educational documents?",
      answer: "Yes. We frequently assist with apostilles for diplomas, transcripts, and education-related documents."
    },
    {
      question: "Are federal documents eligible for apostille services?",
      answer: "Federal documents may require U.S. Department of State processing. Guidance is provided based on document type."
    },
    {
      question: "Do you handle international document use cases?",
      answer: "Yes. Apostille and authentication services are available for documents used outside the United States."
    }
  ]

  return (
    <>
      <FAQSchema faqs={pasadenaFAQs} />
      <PasadenaCityPageClient />
    </>
  )
}

