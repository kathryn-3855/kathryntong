import type { Metadata } from "next"
import UnitedKingdomApostilleClientPage from "./united-kingdom-client-page"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "United Kingdom Apostille Services | U.S. Document Apostille for U.K.",
  description:
    "Professional apostille services for U.S. documents used in the United Kingdom. Hague Apostille processing, common document guidance, and nationwide mail-in service available.",
  keywords:
    "United Kingdom apostille, UK apostille, England apostille, Scotland apostille, Wales apostille, Northern Ireland apostille, Hague Convention UK, UK document legalization, UK apostille services, U.S. documents UK",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/united-kingdom",
  },
}

export default function UnitedKingdomApostillePage() {
  const ukFAQs = [
    {
      question: "Can I use a U.S. birth certificate in the United Kingdom after an apostille?",
      answer: "Yes. The United Kingdom accepts Hague Apostilles for U.S. birth certificates when the apostille is properly issued by the appropriate authority."
    },
    {
      question: "Does the United Kingdom require embassy or consular legalization after an apostille?",
      answer: "No. As a Hague Convention member, the United Kingdom does not require embassy or consular legalization once a valid apostille is attached."
    },
    {
      question: "Do documents need to be translated for use in the U.K.?",
      answer: "Some U.K. institutions may request certified translations depending on the document type and purpose of use."
    },
    {
      question: "Can I submit my documents by mail from outside California?",
      answer: "Yes. Mail-in apostille service is available nationwide and is commonly used for documents intended for use in the United Kingdom."
    },
    {
      question: "Which documents can be apostilled for use in the U.K.?",
      answer: "Common documents include birth certificates, marriage certificates, divorce decrees, powers of attorney, academic records, business documents, and FBI background checks."
    },
    {
      question: "Do you handle apostille and document authentication for countries outside the Hague Convention?",
      answer: "Yes. In addition to Hague Apostille countries, we assist with document authentication for non-Hague destinations, including Taiwan and other regions that require additional certification steps instead of a Hague Apostille."
    }
  ]

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema 
        serviceName="Apostille Services for Documents Used in the United Kingdom"
        description="Professional apostille services for U.S. documents used in the United Kingdom. Hague Apostille processing, common document guidance, and nationwide mail-in service available."
        serviceType="Apostille Services"
        areaServed="Los Angeles County"
      />
      <FAQSchema faqs={ukFAQs} />
      <UnitedKingdomApostilleClientPage />
    </>
  )
}

