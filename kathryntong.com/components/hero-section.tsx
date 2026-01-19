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
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-foreground">{t.homeHeroTitle}</h2>
              </div>

              <div className="mb-6 space-y-4">
                <p className="text-base text-foreground/90 leading-relaxed">
                  {t.homeHeroDesc1}
                </p>
                
                <p className="text-base text-foreground/90 leading-relaxed">
                  {t.homeHeroDesc2}
                </p>
              </div>
            </div>

            {/* Right column: Infographic - 10% larger and more visible */}
            <div className="relative w-full h-auto flex items-start justify-end">
              <div className="sticky top-24" style={{ maxWidth: '100%' }}>
                <img
                  src="/images/TrustedMobileNotaryServicesOverview.png"
                  alt="Trusted Mobile Notary Services Overview"
                  className="h-auto object-contain rounded-lg shadow-xl border-2 border-gray-200"
                  style={{
                    width: '110%',
                    height: 'auto',
                    display: 'block',
                    maxWidth: 'none',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground mb-4">{t.homeOurServices}</h3>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    <strong>{t.homeService1Title}</strong> {t.homeService1Desc}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    <strong>{t.homeService2Title}</strong> {t.homeService2Desc}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    <strong>{t.homeService3Title}</strong> {t.homeService3Desc}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    <strong>{t.homeService4Title}</strong> {t.homeService4Desc}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    <strong>{t.homeService5Title}</strong> {t.homeService5Desc}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    <strong>{t.homeService6Title}</strong> {t.homeService6Desc}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground mb-4">{t.homeCommonDocuments}</h3>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">{t.homeDoc1}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">{t.homeDoc2}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">{t.homeDoc3}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">{t.homeDoc4}</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">{t.homeDoc5}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
