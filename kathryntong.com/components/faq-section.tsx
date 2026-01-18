"use client"

import { useTranslations } from "@/lib/use-translations"

export default function FAQSection() {
  const t = useTranslations()
  
  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-foreground mb-3">{t.faqTitle}</h2>
          <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
            <ul className="space-y-1.5">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="text-foreground text-base">
                  <strong>{t.faqApostilleQ1}</strong> {t.faqApostilleA1}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="text-foreground text-base">
                  <strong>{t.faqApostilleQ2}</strong> {t.faqApostilleA2}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="text-foreground text-base">
                  <strong>{t.faqApostilleQ3}</strong> {t.faqApostilleA3}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="text-foreground text-base">
                  <strong>{t.faqApostilleQ4}</strong> {t.faqApostilleA4}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="text-foreground text-base">
                  <strong>{t.faqApostilleQ5}</strong> {t.faqApostilleA5}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="text-foreground text-base">
                  <strong>{t.faqApostilleQ6}</strong> {t.faqApostilleA6}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
