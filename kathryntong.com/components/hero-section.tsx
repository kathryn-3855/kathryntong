"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

export default function HeroSection() {
  const t = useTranslations()

  return (
    <section className="relative overflow-hidden bg-white text-foreground">
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">{t.heroTitle}</h2>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Kathryn's Mobile Notary & Apostille provides convenient mobile notary and apostille services to clients throughout Los Angeles County and surrounding areas. As a California Commissioned Notary Public and a Certified Apostille Specialist since 2014, I travel directly to law firms, offices, homes, hospitals, and educational institutions—saving clients time and preventing costly document errors. We are open 7-Days per week, Same-day and expedited services available.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Notarization is a crucial step in various legal and business transactions, providing a layer of security and peace of mind. The notary public acts as a neutral third party witnessing the signing of documents, verifying the identity of signatory(s), and ensuring that all parties involved sign the document willingly and under no duress. This process helps prevent fraud and verify that the document has been executed properly.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Many legal and financial transactions require notarized documents to be valid. For example, real estate transactions often need notarized documents to be recorded in public records of the relevant county. Likewise, Wills, Trust, Medical and Financial Power of Attorneys also need notarization to be legally enforceable.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Common Documents that Require Notarization:</h3>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">Real estate & Loan Document</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">Power of Attorney & Advance Healthcare Directives</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">Will, Estate & Trust documents</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">Commercial Contracts, Court Documents, Retirement Papers, Affidavits.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">Personal, Business and Education Documents for International Use. Notarization must be completed before Apostille & Embassy Legalization can be carried out.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              onClick={() => (window.location.href = "tel:626.590.3560")}
            >
              <Phone className="w-5 h-5 mr-2" />
              {t.scheduleNow}
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-white">
              {t.learnMore}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
