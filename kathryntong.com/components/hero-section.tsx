"use client"

import { useTranslations } from "@/lib/use-translations"
import Image from "next/image"

export default function HeroSection() {
  const t = useTranslations()

  return (
    <section className="relative overflow-hidden bg-white text-foreground">
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-foreground">{t.heroTitle}</h2>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/kathryn.webp"
                alt="Kathryn - Trusted Mobile Notary & Certified Apostille Agent"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-base text-foreground/90 leading-relaxed mb-4">
              Kathryn's Mobile Notary & Apostille provides convenient mobile notary and apostille services to clients throughout Los Angeles County and surrounding areas. As a California Commissioned Notary Public and a Certified Apostille Specialist since 2014, I travel directly to law firms, offices, homes, hospitals, and educational institutions—saving clients time and preventing costly document errors. We are open 7-Days per week, Same-day and expedited services available.
            </p>
            
            <p className="text-base text-foreground/90 leading-relaxed mb-4">
              Notarization is a crucial step in various legal and business transactions, providing a layer of security and peace of mind. The notary public acts as a neutral third party witnessing the signing of documents, verifying the identity of signatory(s), and ensuring that all parties involved sign the document willingly and under no duress. This process helps prevent fraud and verify that the document has been executed properly.
            </p>
            
            <p className="text-base text-foreground/90 leading-relaxed mb-6">
              Many legal and financial transactions require notarized documents to be valid. For example, real estate transactions often need notarized documents to be recorded in public records of the relevant county. Likewise, Wills, Trust, Medical and Financial Power of Attorneys also need notarization to be legally enforceable.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Common Documents that Require Notarization:</h3>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-2">
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

          <div className="text-center">
            <p className="text-base text-foreground font-semibold">To schedule, call or text <a href="tel:+16265903560" className="text-primary hover:underline">(626)590-3560</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
