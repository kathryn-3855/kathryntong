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
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Left column: Content */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-foreground">Mobile Notary & Apostille Services in Los Angeles</h2>
              </div>

              <div className="mb-6 space-y-4">
                <p className="text-base text-foreground/90 leading-relaxed">
                  Kathryn's Mobile Notary & Apostille provides professional mobile notary and apostille services throughout Los Angeles and surrounding areas. We specialize in notarization and authentication of documents for international use, immigration, and foreign governments.
                </p>
                
                <p className="text-base text-foreground/90 leading-relaxed">
                  Whether you need a same-day apostille, a mobile notary to travel to your location, or guidance on foreign document requirements, we provide accurate, efficient, and compliant service.
                </p>
              </div>
            </div>

            {/* Right column: Infographic */}
            <div className="relative w-full h-auto">
              <div className="sticky top-24">
                <img
                  src="/images/TrustedMobileNotaryServicesOverview.png"
                  alt="Trusted Mobile Notary Services Overview"
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Our Services</h3>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    <strong>Mobile Notary Services:</strong> We travel to you for notarization of legal, personal, and business documents.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    <strong>Apostille Services (California):</strong> Certified processing through the California Secretary of State with expedited options available.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    <strong>Authentication & Legalization:</strong> For non-Hague Convention countries requiring additional authentication.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    <strong>Immigration & International Documents:</strong> Specialized handling for USCIS, consulates, and overseas use.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    <strong>Serving Local & International Clients:</strong> We serve individuals, families, attorneys, corporations, and international clients. Chinese-speaking clients are welcome, and WeChat communication is available.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-base text-foreground/90 leading-relaxed">
              This is a mobile service. We travel to homes, offices, hospitals, schools, and public locations. No walk-in office is required. Contact us today for prompt assistance.
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
