import type { Metadata } from "next"
import { Suspense } from "react"
import ContactClientPage from "./contact-client-page"

export const metadata: Metadata = {
  title: "Contact Kathryn's Mobile Notary & Apostille | Get in Touch",
  description:
    "Contact Kathryn's Mobile Notary & Apostille for questions about apostille eligibility, timelines, or international document requirements. Phone, email, and WeChat available.",
  keywords: "contact notary, get in touch, notary services near me, schedule appointment, apostille questions",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactClientPage />
    </Suspense>
  )
}
