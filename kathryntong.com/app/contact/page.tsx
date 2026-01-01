import type { Metadata } from "next"
import ServiceAreasPage from "./contact-client-page"

export const metadata: Metadata = {
  title: "Service Areas | Kathryn's Mobile Notary",
  description:
    "Professional mobile notary and apostille services throughout Los Angeles County and surrounding areas.",
  keywords: "service areas, mobile notary locations, notary services near me, Los Angeles notary",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function ServiceAreasPageWrapper() {
  return <ServiceAreasPage />
}
