import type { Metadata } from "next"
import TaiwanApostilleClientPage from "./taiwan-client-page"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Authentication Services for Documents Used in Taiwan | Kathryn's Mobile Notary",
  description:
    "Authentication services for U.S. documents used in Taiwan. Mail-in and expedited processing available nationwide.",
  keywords:
    "Taiwan document authentication, Taiwan legalization, Taiwan document services, Taiwan authentication services, Taiwan TECO, 台湾文件认证, 美国文件认证",
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
      question: "Does Taiwan accept Hague Apostilles?",
      answer: "No. Taiwan is not a member of the Hague Apostille Convention and does not accept Hague Apostilles."
    },
    {
      question: "What type of certification is required for documents used in Taiwan?",
      answer: "U.S. documents generally require document authentication and may require verification through the Taiwan Economic and Cultural Office (TECO)."
    },
    {
      question: "Can I use a U.S. birth certificate in Taiwan after authentication?",
      answer: "Yes. A properly authenticated U.S. birth certificate is generally accepted, subject to receiving authority requirements."
    },
    {
      question: "Are Chinese translations required for documents used in Taiwan?",
      answer: "Many authorities in Taiwan require certified Chinese translations. Requirements vary by institution."
    },
    {
      question: "Can Taiwan document authentication be completed by mail?",
      answer: "Yes. Mail-in authentication services are available nationwide for documents used in Taiwan."
    }
  ]

  return (
    <>
      <FAQSchema faqs={taiwanFAQs} />
      <TaiwanApostilleClientPage />
    </>
  )
}

