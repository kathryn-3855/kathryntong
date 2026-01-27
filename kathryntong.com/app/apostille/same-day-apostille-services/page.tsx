import type { Metadata } from "next"
import SameDayApostilleClientPage from "./same-day-apostille-client-page"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"

export const metadata: Metadata = {
  title: "Same-Day Apostille Services California | Fast Apostille",
  description:
    "Need an apostille fast? We offer same-day apostille services in California for eligible documents. Serving Los Angeles and clients nationwide.",
  keywords:
    "same day apostille, expedited apostille, fast apostille, California apostille, urgent apostille",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function SameDayApostillePage() {
  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema 
        serviceName="Same-Day Apostille Services"
        description="Need an apostille fast? We offer same-day apostille services in California for eligible documents. Serving Los Angeles and clients nationwide."
        serviceType="Same-Day Apostille Services"
      />
      <SameDayApostilleClientPage />
    </>
  )
}

