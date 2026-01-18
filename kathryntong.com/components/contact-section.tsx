"use client"

import EmailRequestForm from "@/components/email-request-form"
import { useTranslations } from "@/lib/use-translations"

export default function ContactSection() {
  const t = useTranslations()

  return (
    <section id="contact" className="py-6 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold mb-2 text-foreground">{t.readyToStart}</h2>
          <p className="text-sm text-foreground/90 mb-4">{t.contactUs}</p>
          <EmailRequestForm />
        </div>
      </div>
    </section>
  )
}
