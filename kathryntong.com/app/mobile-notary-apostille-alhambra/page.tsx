import type { Metadata } from "next"
import AlhambraCityPageClient from "./city-page-client"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Alhambra Mobile Notary & Apostille Services | Kathryn's",
  description:
    "Mobile notary and apostille services in Alhambra, CA. Same-day and mail-in apostille for local and international documents. Serving Alhambra and nearby San Gabriel Valley cities.",
  keywords: "mobile notary Alhambra, notary public Alhambra CA, traveling notary Alhambra, on-site notary Alhambra, same day notary Alhambra, apostille services Alhambra, California apostille Alhambra, notary near me Alhambra, San Gabriel Valley notary, Monterey Park notary, San Gabriel notary, Pasadena notary, South Pasadena notary, Glendale notary, document notarization Alhambra, power of attorney notary Alhambra, real estate notary Alhambra, embassy legalization Alhambra, certified apostille agent Alhambra, bilingual notary Alhambra, Mandarin notary Alhambra, Cantonese notary Alhambra, Chinese-speaking notary Alhambra",
  openGraph: {
    title: "Alhambra Mobile Notary & Apostille Services | Kathryn's",
    description: "Mobile notary and apostille services in Alhambra, CA. Same-day and mail-in apostille for local and international documents.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-alhambra",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/alhambra.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Alhambra, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-alhambra",
  },
}

export default function AlhambraPage() {
  const alhambraFAQs = [
    {
      question: "Do I need an apostille for documents used outside the U.S.?",
      answer: "Yes. Most foreign countries require either an apostille or legalization before accepting U.S. documents."
    },
    {
      question: "Can you help with China or Taiwan documents from Alhambra?",
      answer: "Yes. We handle both Hague apostilles for China and non-Hague legalization for Taiwan, including document review and guidance."
    },
    {
      question: "Do you travel to homes and offices in Alhambra?",
      answer: "Yes. Mobile service is available throughout Alhambra by appointment."
    },
    {
      question: "Can I mail in my documents instead?",
      answer: "Yes. Mail-in apostille service is available. Please contact us for instructions."
    }
  ]

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema 
        serviceName="Mobile Notary & Apostille Services in Alhambra"
        description="Mobile notary and apostille services in Alhambra, CA. Same-day and mail-in apostille for local and international documents."
        serviceType="Mobile Notary Services"
        areaServed={["Alhambra", "Los Angeles County"]}
      />
      <FAQSchema faqs={alhambraFAQs} />
      <AlhambraCityPageClient />
    </>
  )
}

