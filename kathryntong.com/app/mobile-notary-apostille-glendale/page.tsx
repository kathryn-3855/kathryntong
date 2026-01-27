import type { Metadata } from "next"
import GlendaleCityPageClient from "./city-page-client"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Glendale Mobile Notary & Apostille Services | Kathryn's",
  description:
    "Professional mobile notary and apostille services in Glendale. Same-day and mail-in apostille available for California and international documents.",
  keywords: "mobile notary Glendale, notary public Glendale CA, traveling notary Glendale, on-site notary Glendale, same day notary Glendale, 24 hour notary Glendale, apostille services Glendale, California apostille Glendale, notary near me Glendale, mobile notary Glendale CA, document notarization Glendale, power of attorney notary Glendale, real estate notary Glendale, embassy legalization Glendale, certified apostille agent Glendale, bilingual notary Glendale",
  openGraph: {
    title: "Glendale Mobile Notary & Apostille Services | Kathryn's",
    description: "Professional mobile notary and apostille services in Glendale. Same-day and mail-in apostille available for California and international documents.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-glendale",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/glendale.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Glendale, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-glendale",
  },
}

export default function GlendalePage() {
  const glendaleFAQs = [
    {
      question: "Do you provide mobile notary services throughout Glendale?",
      answer: "Yes. Mobile notary services are available throughout Glendale by appointment."
    },
    {
      question: "Can I get an apostille without visiting an office?",
      answer: "Yes. Apostille services are available through mobile pickup or mail-in processing, depending on the document."
    },
    {
      question: "Do you handle apostilles for documents used in other countries?",
      answer: "Yes. We assist with international apostille and document authentication for many countries, including China, Taiwan, and Hong Kong."
    },
    {
      question: "Is same-day apostille available for Glendale clients?",
      answer: "Same-day apostille may be available for eligible California documents. Availability depends on document type and submission timing."
    }
  ]

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema 
        serviceName="Mobile Notary & Apostille Services in Glendale"
        description="Professional mobile notary and apostille services in Glendale. Same-day and mail-in apostille available for California and international documents."
        serviceType="Mobile Notary Services"
        areaServed={["Glendale", "Los Angeles County"]}
      />
      <FAQSchema faqs={glendaleFAQs} />
      <GlendaleCityPageClient />
    </>
  )
}

