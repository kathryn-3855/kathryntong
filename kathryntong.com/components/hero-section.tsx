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
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-foreground">Mobile Notary & Apostille Services in Los Angeles</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/ca-acknowledgment-jurat.png"
                  alt="California Notary Acknowledgment Jurat"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/hero-apostille.jpg"
                  alt="California Apostille Certificate - Trusted Mobile Notary & Certified Apostille Agent"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-base text-foreground/90 leading-relaxed mb-4">
              Kathryn's Mobile Notary & Apostille provides professional mobile notary and apostille services throughout Los Angeles and surrounding areas. We specialize in notarization and authentication of documents for international use, immigration, and foreign governments.
            </p>
            
            <p className="text-base text-foreground/90 leading-relaxed mb-6">
              Whether you need a same-day apostille, a mobile notary to travel to your location, or guidance on foreign document requirements, we provide accurate, efficient, and compliant service.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Our Services</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Mobile Notary Services</h4>
                <p className="text-base text-foreground/90">We travel to you for notarization of legal, personal, and business documents.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Apostille Services (California)</h4>
                <p className="text-base text-foreground/90">Certified apostille processing through the California Secretary of State, including expedited options.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Authentication & Legalization</h4>
                <p className="text-base text-foreground/90">For non-Hague Convention countries requiring additional authentication.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Immigration & International Documents</h4>
                <p className="text-base text-foreground/90">Specialized handling for USCIS, consulates, and overseas use.</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Serving Local & International Clients</h3>
            <p className="text-base text-foreground/90 leading-relaxed">
              We serve individuals, families, attorneys, corporations, and international clients who require reliable document handling. Chinese-speaking clients are welcome, and WeChat communication is available.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Mobile, Professional, Reliable</h3>
            <p className="text-base text-foreground/90 leading-relaxed mb-4">
              This is a mobile service. We travel to homes, offices, hospitals, schools, and public locations. No walk-in office is required.
            </p>
            <p className="text-base text-foreground/90 leading-relaxed">
              Contact us today for prompt assistance.
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
