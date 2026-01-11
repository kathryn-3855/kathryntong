"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useTranslations } from "@/lib/use-translations"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const t = useTranslations()

  const faqs: FAQItem[] = [
    {
      question: t.faqQ1,
      answer: t.faqA1,
    },
    {
      question: t.faqQ3,
      answer: t.faqA3,
    },
    {
      question: t.faqQ4,
      answer: t.faqA4,
    },
    {
      question: t.faqQ5,
      answer: t.faqA5,
    },
    {
      question: t.faqQ6,
      answer: t.faqA6,
    },
    {
      question: t.faqQ7,
      answer: t.faqA7,
    },
  ]

  return (
    <section className="py-8 bg-accent rounded-lg">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">{t.faqTitle}</h2>
          <p className="text-white text-sm">{t.faqSubtitle}</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-4 flex items-center justify-between hover:bg-accent transition"
              >
                <h3 className="text-left font-semibold text-foreground text-sm">{faq.question}</h3>
                <ChevronDown
                  size={18}
                  className={`text-primary flex-shrink-0 transition-transform ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-4 pb-4 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-8 p-4 bg-background rounded-lg text-center">
          <p className="text-muted-foreground mb-2 text-sm">{t.faqStillHaveQuestions}</p>
          <a href="/#contact" className="inline-block text-primary font-semibold hover:underline text-sm">
            {t.faqContactUs}
          </a>
        </div>
      </div>
    </section>
  )
}
