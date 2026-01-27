import type { Metadata } from "next"
import CulverCityCityPageClient from "./city-page-client"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Culver City Mobile Notary & Apostille Services",
  description:
    "Trusted mobile notary and apostille services in Culver City. Serving individuals and businesses with mail-in and same-day options.",
  keywords: "mobile notary Culver City, notary public Culver City CA, traveling notary Culver City, on-site notary Culver City, same day notary Culver City, 24 hour notary Culver City, apostille services Culver City, California apostille Culver City, notary near me Culver City, Mar Vista notary, Marina Del Rey notary, entertainment industry notary Culver City, studio notary Culver City, Sony Pictures notary, business contract notary Culver City, real estate notary Culver City, power of attorney notary Culver City, embassy legalization Culver City, certified apostille agent Culver City, bilingual notary Culver City",
  openGraph: {
    title: "Culver City Mobile Notary & Apostille Services",
    description: "Trusted mobile notary and apostille services in Culver City. Serving individuals and businesses with mail-in and same-day options.",
    type: "website",
    locale: "en_US",
    url: "https://kathryntong.com/mobile-notary-apostille-culver-city-ca",
    siteName: "Kathryn's Mobile Notary & Apostille",
    images: [
      {
        url: "/images/cities/culver-city.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Notary Services in Culver City, CA",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathryntong.com/mobile-notary-apostille-culver-city-ca",
  },
}

export default function CulverCityPage() {
  const culverCityFAQs = [
    {
      question: "Is mobile notary service available in Culver City?",
      answer: "Yes. Mobile notary services are available throughout Culver City by appointment."
    },
    {
      question: "Can I get an apostille for entertainment or business-related documents?",
      answer: "Yes. We assist with apostille services for business, contract, and industry-related documents."
    },
    {
      question: "Do you offer expedited apostille processing?",
      answer: "Expedited and same-day apostille services may be available depending on document eligibility."
    },
    {
      question: "Is mail-in apostille an option for Culver City clients?",
      answer: "Yes. Mail-in apostille services are available nationwide."
    }
  ]

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema 
        serviceName="Mobile Notary & Apostille Services in Culver City"
        description="Trusted mobile notary and apostille services in Culver City. Serving individuals and businesses with mail-in and same-day options."
        serviceType="Mobile Notary Services"
        areaServed={["Culver City", "Los Angeles County"]}
      />
      <FAQSchema faqs={culverCityFAQs} />
      <CulverCityCityPageClient />
    </>
  )
}

