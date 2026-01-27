import type { Metadata } from "next"
import MexicoApostilleClientPage from "./mexico-client-page"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Apostille Services for Documents Used in Mexico | Kathryn's Mobile Notary",
  description:
    "Apostille services for U.S. documents used in Mexico. Mail-in and expedited apostille available nationwide.",
  keywords:
    "Mexico apostille, Mexico document legalization, Hague Convention Mexico, Mexico apostille services, Mexico document authentication",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/mexico",
  },
}

export default function MexicoApostillePage() {
  const mexicoFAQs = [
    {
      question: "Can I use a U.S. birth certificate in Mexico after an apostille?",
      answer: "Yes. Mexico recognizes Hague Apostilles. A properly apostilled U.S. birth certificate is generally accepted, subject to local authority requirements."
    },
    {
      question: "Does Mexico require consular legalization or an apostille?",
      answer: "Mexico generally requires a Hague Apostille for eligible U.S. documents rather than consular legalization."
    },
    {
      question: "Are Spanish translations required for documents used in Mexico?",
      answer: "Many Mexican authorities require certified Spanish translations. Translation requirements vary by institution."
    },
    {
      question: "Can FBI background checks be apostilled for use in Mexico?",
      answer: "Yes. FBI background checks may be apostilled through the U.S. Department of State for use in Mexico."
    },
    {
      question: "Can I submit my Mexico apostille request by mail?",
      answer: "Yes. Mail-in apostille services are available nationwide for Mexico-bound documents."
    }
  ]

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema 
        serviceName="Apostille Services for Documents Used in Mexico"
        description="Apostille services for U.S. documents used in Mexico. Mail-in and expedited apostille available nationwide."
        serviceType="Apostille Services"
        areaServed="Los Angeles County"
      />
      <FAQSchema faqs={mexicoFAQs} />
      <MexicoApostilleClientPage />
    </>
  )
}

