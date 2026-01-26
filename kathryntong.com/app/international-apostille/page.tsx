import type { Metadata } from "next"
import InternationalApostilleClientPage from "./international-apostille-client-page"
import ServiceSchema from "@/components/service-schema"

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
  return (
    <>
      <ServiceSchema 
        serviceName="International Apostille & Legalization"
        description="International apostille and document legalization services for Hague and non-Hague countries. Expert guidance for China, Taiwan, Hong Kong, and more."
        serviceType="International Apostille & Legalization"
      />
      <InternationalApostilleClientPage />
    </>
  )
}

