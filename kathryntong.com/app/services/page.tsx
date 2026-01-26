import type { Metadata } from "next"
import ServicesClientPage from "./services-client-page"

export const metadata: Metadata = {
  title: "Service Areas | Mobile Notary & Apostille Los Angeles",
  description:
    "Mobile notary and apostille services throughout Los Angeles County. Serving Los Angeles, Pasadena, Beverly Hills, Santa Monica, and nearby cities.",
  keywords:
    "mobile notary services, Los Angeles County notary, same-day notary, mobile notary LA, notary services near me, evening notary appointments, weekend notary",
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
