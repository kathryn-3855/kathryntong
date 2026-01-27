import type { Metadata } from "next"
import ApostilleClientPage from "./apostille-client-page"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Apostille Services California | Same-Day & Mail-In Apostille",
  description:
    "Professional California apostille services for birth certificates, FBI background checks, powers of attorney, and more. Same-day and mail-in available.",
  keywords:
    "apostille services, legalization services, international documents, authentication, notary, California apostille",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function ApostillePage() {
  // Extract FAQs from translations - these match the FAQSection component
  const apostilleFAQs = [
    {
      question: "What is an apostille?",
      answer: "An apostille is a certificate that authenticates the origin of a public document for use in countries that are members of the Hague Apostille Convention."
    },
    {
      question: "How long does it take to get an apostille?",
      answer: "Standard processing typically takes 2-4 business days. Same-day expedited service is available for eligible documents."
    },
    {
      question: "What documents can be apostilled?",
      answer: "Common documents include birth certificates, marriage certificates, FBI background checks, powers of attorney, diplomas, transcripts, and other public documents."
    },
    {
      question: "Do I need to be present for apostille services?",
      answer: "For mail-in apostille services, you do not need to be present. For same-day services, you may need to be present depending on the document type."
    },
    {
      question: "Can you apostille documents from other states?",
      answer: "Yes, we can assist with apostille services for documents from other states, though processing may vary by state requirements."
    },
    {
      question: "What is the difference between apostille and legalization?",
      answer: "Apostille is for Hague Convention countries, while legalization is required for non-Hague countries and involves additional embassy or consulate authentication."
    }
  ]

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema 
        serviceName="Apostille Services (California & International)"
        description="Professional California apostille services for birth certificates, FBI background checks, powers of attorney, and more. Same-day and mail-in available."
        serviceType="Apostille Services"
      />
      <FAQSchema faqs={apostilleFAQs} />
      <ApostilleClientPage />
    </>
  )
}
