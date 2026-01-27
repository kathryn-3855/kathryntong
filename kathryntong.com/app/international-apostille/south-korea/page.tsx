import type { Metadata } from "next"
import SouthKoreaApostilleClientPage from "./south-korea-client-page"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Apostille Services for Documents Used in South Korea | Kathryn's Mobile Notary",
  description:
    "Apostille services for U.S. documents used in South Korea. Mail-in and expedited apostille available nationwide.",
  keywords:
    "South Korea apostille, South Korea document legalization, Hague Convention South Korea, South Korea apostille services, South Korea document authentication",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/south-korea",
  },
}

export default function SouthKoreaApostillePage() {
  const southKoreaFAQs = [
    {
      question: "Can I use a U.S. birth certificate in South Korea after an apostille?",
      answer: "Yes. South Korea recognizes Hague Apostilles. A properly apostilled U.S. birth certificate is generally accepted, subject to receiving authority requirements."
    },
    {
      question: "Does South Korea require consular legalization or an apostille?",
      answer: "South Korea generally requires a Hague Apostille for eligible U.S. documents rather than consular legalization."
    },
    {
      question: "Are Korean translations required for documents used in South Korea?",
      answer: "Many institutions in South Korea require certified Korean translations. Translation requirements vary by organization."
    },
    {
      question: "Can FBI background checks be apostilled for use in South Korea?",
      answer: "Yes. FBI background checks may be apostilled through the U.S. Department of State for use in South Korea."
    },
    {
      question: "Can I submit my South Korea apostille request by mail?",
      answer: "Yes. Mail-in apostille services are available nationwide for South Korea-bound documents."
    }
  ]

  return (
    <>
      <FAQSchema faqs={southKoreaFAQs} />
      <SouthKoreaApostilleClientPage />
    </>
  )
}

