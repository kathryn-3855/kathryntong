import type { Metadata } from "next"
import TaiwanApostilleClientPage from "./taiwan-client-page"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Apostille Services for Documents Used in Taiwan | Kathryn's Mobile Notary",
  description:
    "Apostille services for U.S. documents used in Taiwan. Mail-in and expedited apostille available nationwide.",
  keywords:
    "Taiwan apostille, Taiwan document authentication, Taiwan legalization, Taiwan document services, Taiwan authentication services, 台湾文件认证, 美国文件认证",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/taiwan",
  },
}

export default function TaiwanApostillePage() {
  const taiwanFAQs = [
    {
      question: "Can I use a U.S. birth certificate in Taiwan after an apostille?",
      answer: "Yes. Taiwan recognizes Hague Apostilles. A properly apostilled U.S. birth certificate is generally accepted, subject to the receiving authority's requirements."
    },
    {
      question: "Does Taiwan require consular legalization or an apostille?",
      answer: "Taiwan generally requires a Hague Apostille for eligible U.S. documents, rather than consular legalization."
    },
    {
      question: "Can FBI background checks be apostilled for use in Taiwan?",
      answer: "Yes. FBI background checks may be apostilled through the U.S. Department of State for use in Taiwan."
    },
    {
      question: "Are Chinese translations required for Taiwan?",
      answer: "Many authorities in Taiwan require certified Chinese translations. Translation requirements vary by institution."
    },
    {
      question: "Can Taiwan apostille requests be submitted by mail?",
      answer: "Yes. Mail-in apostille services are available nationwide for documents used in Taiwan."
    }
  ]

  return (
    <>
      <FAQSchema faqs={taiwanFAQs} />
      <TaiwanApostilleClientPage />
    </>
  )
}

