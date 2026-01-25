import type { Metadata } from "next"
import MailInApostilleClientPage from "./mail-in-apostille-client-page"

export const metadata: Metadata = {
  title: "Mail-In Apostille Services | Kathryn's Mobile Notary",
  description:
    "Convenient mail-in apostille services for clients who cannot appear in person. Secure processing for out-of-state and international clients.",
  keywords:
    "mail in apostille, remote apostille, out of state apostille, international apostille, apostille by mail",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function MailInApostillePage() {
  return <MailInApostilleClientPage />
}

