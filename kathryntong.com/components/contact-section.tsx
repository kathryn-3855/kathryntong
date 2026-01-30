"use client"

import { useTranslations } from "@/lib/use-translations"

export default function ContactSection() {
  const t = useTranslations()

  return (
    <section id="contact" className="py-4 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">{t.readyToStart}</h2>
          <p className="text-base lg:text-lg text-foreground/90">
            Call or Text <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">626-590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
