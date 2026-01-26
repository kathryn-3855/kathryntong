import type { Metadata } from "next"
import InternationalApostilleClientPage from "./international-apostille-client-page"
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
      question: "What countries do you provide international apostille services for?",
      answer: "We assist with apostille and document authentication for many countries, including China, Taiwan, Hong Kong, Mexico, South Korea, and the Philippines."
    },
    {
      question: "What is the difference between Hague and non-Hague countries?",
      answer: "Hague Convention countries accept apostilles, while non-Hague countries require embassy or consulate legalization. We handle both processes."
    },
    {
      question: "Can I use mail-in services for international apostilles?",
      answer: "Yes. Mail-in apostille and legalization services are available for eligible U.S. documents, depending on the destination country's requirements."
    }
  ]

  return (
    <>
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

