import type { Metadata } from "next"
import MailInApostilleClientPage from "./mail-in-apostille-client-page"

export const metadata: Metadata = {
  title: "Mail-In Apostille Services California | Nationwide Service",
  description:
    "Secure mail-in apostille services for clients nationwide. Simple process, clear instructions, and reliable turnaround for U.S. documents.",
  keywords:
    "mail in apostille, remote apostille, out of state apostille, international apostille, apostille by mail",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function MailInApostillePage() {
  return <MailInApostilleClientPage />
}

