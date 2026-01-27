import type { Metadata } from "next"
import JapanApostilleClientPage from "./japan-client-page"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Japan Apostille Services | U.S. Document Apostille for Japan",
  description:
    "Professional apostille services for U.S. documents used in Japan. Hague Apostille processing, common document guidance, and nationwide mail-in service available.",
  keywords:
    "Japan apostille, Japan document legalization, Hague Convention Japan, Japan apostille services, Japan document authentication, U.S. documents Japan",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/japan",
  },
  // Force rebuild to ensure route is generated
}

export default function JapanApostillePage() {
  const japanFAQs = [
    {
      question: "Can I use a U.S. birth certificate in Japan after an apostille?",
      answer: "Yes. Japan accepts Hague Apostilles for U.S. birth certificates when the apostille is properly issued by the appropriate authority."
    },
    {
      question: "Does Japan require embassy or consular legalization after an apostille?",
      answer: "No. As a Hague Convention member, Japan does not require embassy or consular legalization once a valid apostille is attached."
    },
    {
      question: "Do documents need to be translated into Japanese?",
      answer: "Some Japanese institutions require certified Japanese translations depending on the document type and purpose of use."
    },
    {
      question: "Can I submit my documents by mail from outside California?",
      answer: "Yes. Mail-in apostille service is available nationwide and is commonly used for documents intended for use in Japan."
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
        serviceName="Apostille Services for Documents Used in Japan"
        description="Professional apostille services for U.S. documents used in Japan. Hague Apostille processing, common document guidance, and nationwide mail-in service available."
        serviceType="Apostille Services"
        areaServed="Los Angeles County"
      />
      <FAQSchema faqs={japanFAQs} />
      <JapanApostilleClientPage />
    </>
  )
}
