import type { Metadata } from "next"
import MontereyParkCityPageClient from "./city-page-client"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Monterey Park Mobile Notary & Apostille Services | Same-Day Apostille",
  description:
    "Mobile notary and apostille services in Monterey Park, CA. Same-day apostille, mail-in apostille, and international document services by appointment only.",
  keywords: "mobile notary Monterey Park, notary public Monterey Park CA, traveling notary Monterey Park, on-site notary Monterey Park, same day notary Monterey Park, 24 hour notary Monterey Park, apostille services Monterey Park, California apostille Monterey Park, notary near me Monterey Park, mobile notary Monterey Park CA, document notarization Monterey Park, power of attorney notary Monterey Park, real estate notary Monterey Park, embassy legalization Monterey Park, certified apostille agent Monterey Park, bilingual notary Monterey Park, China apostille Monterey Park, Taiwan apostille Monterey Park, Hong Kong apostille Monterey Park",
  openGraph: {
    title: "Monterey Park Mobile Notary & Apostille Services | Same-Day Apostille",
    description: "Mobile notary and apostille services in Monterey Park, CA. Same-day apostille, mail-in apostille, and international document services by appointment only.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-monterey-park",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/monterey-park.webp",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Monterey Park, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-monterey-park",
  },
}

// Production build verified - all routes included

export default function MontereyParkPage() {
  const montereyParkFAQs = [
    {
      question: "Do you provide mobile notary services in Monterey Park?",
      answer: "Yes. Mobile notary services are available in Monterey Park by appointment."
    },
    {
      question: "Can you handle apostilles for documents used outside the U.S.?",
      answer: "Yes. We assist with both Hague Apostille and non-Hague document authentication for international use."
    },
    {
      question: "Is same-day apostille service available in Monterey Park?",
      answer: "Same-day or expedited service may be available for certain California documents, depending on eligibility."
    },
    {
      question: "How quickly can I get an apostille completed in Los Angeles County?",
      answer: "Processing time depends on the document type, issuing authority, and destination country. Same-day service may be available for qualifying documents, while mail-in processing is commonly used for federal and international requests."
    },
    {
      question: "Do you serve Chinese and Taiwanese clients in Monterey Park?",
      answer: "Yes. Monterey Park has a large international community, and we regularly assist clients with U.S. documents for use in China, Taiwan, Japan, South Korea, and other countries. Services are appointment-only."
    }
  ]

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema 
        serviceName="Mobile Notary & Apostille Services in Monterey Park"
        description="Mobile notary and apostille services in Monterey Park, CA. Same-day apostille, mail-in apostille, and international document services by appointment only."
        serviceType="Mobile Notary & Apostille Services"
        areaServed={["Monterey Park", "Los Angeles County"]}
      />
      <FAQSchema faqs={montereyParkFAQs} />
      <MontereyParkCityPageClient />
    </>
  )
}
