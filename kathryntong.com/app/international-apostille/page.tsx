import type { Metadata } from "next"
import InternationalApostilleClientPage from "./international-apostille-client-page"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "International Apostille Services | Hague & Non-Hague Countries",
  description:
    "International apostille and document legalization services for Hague and non-Hague countries. Expert guidance for China, Taiwan, Hong Kong, and more.",
  keywords:
    "international apostille, document legalization, Hague Convention, non-Hague countries, China apostille, Taiwan legalization, embassy legalization, consulate authentication",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function InternationalApostillePage() {
  const internationalFAQs = [
    {
      question: "What is the difference between an apostille and document legalization?",
      answer: "An apostille is a form of document authentication used for countries that are members of the Hague Apostille Convention. Document legalization is required for countries that are not members of the Hague Convention and involves additional processing through the appropriate embassy or consulate after state or federal certification."
    },
    {
      question: "When do I need an apostille for my documents?",
      answer: "You need an apostille when a document issued in the United States is intended for use in a foreign country that is a member of the Hague Apostille Convention. Common examples include birth certificates, marriage certificates, diplomas, powers of attorney, and corporate documents."
    },
    {
      question: "Can U.S. documents be used internationally without an apostille or legalization?",
      answer: "No. Most foreign governments require U.S. documents to be authenticated through an apostille or legalization process before they are accepted for legal, educational, immigration, or business purposes."
    },
    {
      question: "Do apostille requirements vary by country?",
      answer: "Yes. Apostille and legalization requirements are country-specific. Each country has its own rules regarding document types, translations, notarization standards, and whether an apostille or full legalization is required. Using incorrect processing can result in document rejection."
    },
    {
      question: "Are apostille services the same as notary services?",
      answer: "No. Notarization is often only one step in the apostille or legalization process. Apostille services involve document authentication by a state or federal authority and, in some cases, additional embassy or consulate processing."
    },
    {
      question: "Can I obtain an apostille by mail if I am not located in Los Angeles?",
      answer: "Yes. Mail-in apostille services are available for clients throughout California and across the United States, depending on the issuing authority and document type."
    },
    {
      question: "Do you assist with both Hague and non-Hague countries?",
      answer: "Yes. We assist with apostille services for Hague Convention countries and document legalization for non-Hague countries, including countries in Asia, the Middle East, Europe, and Latin America."
    }
  ]

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema 
        serviceName="International Apostille & Legalization"
        description="International apostille and document legalization services for Hague and non-Hague countries. Expert guidance for China, Taiwan, Hong Kong, and more."
        serviceType="International Apostille & Legalization"
      />
      <FAQSchema faqs={internationalFAQs} />
      <InternationalApostilleClientPage />
    </>
  )
}

