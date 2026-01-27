import type { Metadata } from "next"
import ChinaApostilleClientPage from "./china-client-page"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Apostille Services for Documents Used in China | Kathryn's Mobile Notary",
  description:
    "Professional apostille services for U.S. documents used in China. Mail-in and expedited apostille available nationwide.",
  keywords:
    "China apostille, Mainland China apostille, Hague Convention China, China document legalization, Chinese embassy legalization, China apostille services, 中国海牙认证, 美国文件认证",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/china",
  },
}

export default function ChinaApostillePage() {
  const chinaFAQs = [
    {
      question: "Can I use a U.S. birth certificate in China after an apostille?",
      answer: "Yes. China recognizes Hague Apostilles as of 2023. A properly apostilled U.S. birth certificate is generally accepted, subject to local authority requirements."
    },
    {
      question: "Does China require consular legalization or an apostille?",
      answer: "China currently recognizes Hague Apostilles, so consular legalization is generally no longer required for eligible documents."
    },
    {
      question: "Can FBI background checks be apostilled for use in China?",
      answer: "Yes. FBI background checks may be apostilled through the U.S. Department of State for use in China."
    },
    {
      question: "Do documents need to be translated into Chinese?",
      answer: "Some receiving authorities in China may require certified Chinese translations. Translation requirements are determined by the requesting institution in China."
    },
    {
      question: "Can I submit my China apostille request by mail?",
      answer: "Yes. Mail-in apostille services are available nationwide for China-bound documents."
    }
  ]

  return (
    <>
      <FAQSchema faqs={chinaFAQs} />
      <ChinaApostilleClientPage />
    </>
  )
}

