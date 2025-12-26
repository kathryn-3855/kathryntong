import type { Metadata } from "next"
import ServicesClientPage from "./services-client-page"

export const metadata: Metadata = {
  title: "Mobile Notary Services in Los Angeles County | Kathryn's Mobile Notary",
  description:
    "Convenient mobile notary services throughout Los Angeles County. Same-day, evening, and weekend appointments available. Experienced with legal, medical, real estate, and international documents.",
  keywords:
    "mobile notary services, Los Angeles County notary, same-day notary, mobile notary LA, notary services near me, evening notary appointments, weekend notary",
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
