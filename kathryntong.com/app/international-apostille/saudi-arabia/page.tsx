import type { Metadata } from "next"
import SaudiArabiaApostilleClientPage from "./saudi-arabia-client-page"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Saudi Arabia Apostille Services | U.S. Document Apostille",
  description:
    "Apostille services for U.S. documents used in Saudi Arabia. Hague Apostille processing, common document guidance, and nationwide mail-in service available.",
  keywords:
    "Saudi Arabia apostille, Saudi Arabia document legalization, Hague Convention Saudi Arabia, Saudi Arabia apostille services, Saudi Arabia document authentication, U.S. documents Saudi Arabia",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/saudi-arabia",
  },
  // Force rebuild to ensure route is generated
}

export default function SaudiArabiaApostillePage() {
  const saudiArabiaFAQs = [
    {
      question: "Does Saudi Arabia accept Hague Apostilles?",
      answer: "Yes. Saudi Arabia is a Hague Apostille Convention member and accepts properly issued Hague Apostilles."
    },
    {
      question: "Is embassy legalization required after an apostille?",
      answer: "No. Embassy or consular legalization is not required once a valid Hague Apostille is attached."
    },
    {
      question: "Do documents need to be translated into Arabic?",
      answer: "Some Saudi institutions require certified Arabic translations depending on document type and purpose."
    },
    {
      question: "Can I mail my documents from outside California?",
      answer: "Yes. Mail-in apostille service is available nationwide."
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
        serviceName="Apostille Services for Documents Used in Saudi Arabia"
        description="Apostille services for U.S. documents used in Saudi Arabia. Hague Apostille processing, common document guidance, and nationwide mail-in service available."
        serviceType="Apostille Services"
        areaServed="Los Angeles County"
      />
      <FAQSchema faqs={saudiArabiaFAQs} />
      <SaudiArabiaApostilleClientPage />
    </>
  )
}

