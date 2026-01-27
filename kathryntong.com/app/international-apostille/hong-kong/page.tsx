import type { Metadata } from "next"
import HongKongApostilleClientPage from "./hong-kong-client-page"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Apostille Services for Documents Used in Hong Kong | Kathryn's Mobile Notary",
  description:
    "Apostille services for U.S. documents used in Hong Kong. Mail-in and expedited apostille available nationwide.",
  keywords:
    "Hong Kong apostille, Hong Kong document legalization, Hague Convention Hong Kong, Hong Kong apostille services, Hong Kong document authentication, 香港海牙认证, 美国文件认证",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/hong-kong",
  },
}

export default function HongKongApostillePage() {
  const hongKongFAQs = [
    {
      question: "Can I use a U.S. birth certificate in Hong Kong after an apostille?",
      answer: "Yes. Hong Kong recognizes Hague Apostilles. A properly apostilled U.S. birth certificate is generally accepted, subject to local authority requirements."
    },
    {
      question: "Does Hong Kong require consular legalization or an apostille?",
      answer: "Hong Kong generally requires a Hague Apostille for eligible U.S. documents rather than consular legalization."
    },
    {
      question: "Can FBI background checks be apostilled for use in Hong Kong?",
      answer: "Yes. FBI background checks may be apostilled through the U.S. Department of State for use in Hong Kong."
    },
    {
      question: "Are translations required for documents used in Hong Kong?",
      answer: "Translation requirements vary by institution. Some authorities may require certified Chinese or English translations."
    },
    {
      question: "Can I submit Hong Kong apostille requests by mail?",
      answer: "Yes. Mail-in apostille services are available nationwide for Hong Kong-bound documents."
    }
  ]

  return (
    <>
      <FAQSchema faqs={hongKongFAQs} />
      <HongKongApostilleClientPage />
    </>
  )
}

