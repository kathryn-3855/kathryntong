import type { Metadata } from "next"
import ApostilleClientPage from "./apostille-client-page"
import ServiceSchema from "@/components/service-schema"

export const metadata: Metadata = {
  title: "Apostille Services California | Same-Day & Mail-In Apostille",
  description:
    "Professional California apostille services for birth certificates, FBI background checks, powers of attorney, and more. Same-day and mail-in available.",
  keywords:
    "apostille services, legalization services, international documents, authentication, notary, California apostille",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function ApostillePage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Apostille Services (California & International)"
        description="Professional California apostille services for birth certificates, FBI background checks, powers of attorney, and more. Same-day and mail-in available."
        serviceType="Apostille Services"
      />
      <ApostilleClientPage />
    </>
  )
}
