import type { Metadata } from "next"
import PhilippinesApostilleClientPage from "./philippines-client-page"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Apostille Services for Documents Used in Philippines | Kathryn's Mobile Notary",
  description:
    "Apostille services for U.S. documents used in the Philippines. Mail-in and expedited apostille available nationwide.",
  keywords:
    "Philippines apostille, Philippines document legalization, Hague Convention Philippines, Philippines apostille services, Philippines document authentication",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/philippines",
  },
}

export default function PhilippinesApostillePage() {
  const philippinesFAQs = [
    {
      question: "Can I use a U.S. birth certificate in the Philippines after an apostille?",
      answer: "Yes. The Philippines recognizes Hague Apostilles. A properly apostilled U.S. birth certificate is generally accepted, subject to local authority requirements."
    },
    {
      question: "Does the Philippines require consular legalization or an apostille?",
      answer: "The Philippines generally requires a Hague Apostille for eligible U.S. documents rather than consular legalization."
    },
    {
      question: "Are translations required for documents used in the Philippines?",
      answer: "English-language documents are generally accepted. Translation requirements depend on the receiving authority."
    },
    {
      question: "Can FBI background checks be apostilled for use in the Philippines?",
      answer: "Yes. FBI background checks may be apostilled through the U.S. Department of State for use in the Philippines."
    },
    {
      question: "Can I submit my Philippines apostille request by mail?",
      answer: "Yes. Mail-in apostille services are available nationwide for Philippines-bound documents."
    }
  ]

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema 
        serviceName="Apostille Services for Documents Used in Philippines"
        description="Apostille services for U.S. documents used in the Philippines. Mail-in and expedited apostille available nationwide."
        serviceType="Apostille Services"
        areaServed="Los Angeles County"
      />
      <FAQSchema faqs={philippinesFAQs} />
      <PhilippinesApostilleClientPage />
    </>
  )
}

