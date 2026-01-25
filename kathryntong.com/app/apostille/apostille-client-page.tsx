"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/lib/use-translations"

export default function ApostilleClientPage() {
  const t = useTranslations()
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t.apostillePageTitle}
            </h1>
            <p className="text-lg text-foreground/90 mb-3">
              {t.apostillePageSubtitle}
            </p>
            <p className="text-base text-primary font-semibold">
              {t.apostillePageTrustLine}
            </p>
          </div>

          {/* What is an Apostille Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">{t.apostilleWhatIsTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <p className="text-foreground text-base leading-relaxed mb-3">
                {t.apostilleWhatIsText1}
              </p>
              <p className="text-foreground text-base leading-relaxed">
                {t.apostilleWhatIsText2}
              </p>
            </div>
          </div>

          {/* Key Reasons to Use an Apostille Specialist Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">{t.apostilleKeyReasonsTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">{t.apostilleKeyReason1}</span>
                    <span className="text-foreground text-base">{t.apostilleKeyReason1Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">{t.apostilleKeyReason2}</span>
                    <span className="text-foreground text-base">{t.apostilleKeyReason2Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">{t.apostilleKeyReason3}</span>
                    <span className="text-foreground text-base">{t.apostilleKeyReason3Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">{t.apostilleKeyReason4}</span>
                    <span className="text-foreground text-base">{t.apostilleKeyReason4Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">{t.apostilleKeyReason5}</span>
                    <span className="text-foreground text-base">{t.apostilleKeyReason5Desc}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Common Documents Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">{t.apostilleCommonDocsTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.apostilleCommonDoc1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.apostilleCommonDoc2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.apostilleCommonDoc3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.apostilleCommonDoc4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.apostilleCommonDoc5}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.apostilleCommonDoc6}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.apostilleCommonDoc7}</span>
                </li>
              </ul>
              <p className="text-foreground text-sm mt-4 italic">
                {t.apostilleCommonDocsNote}
              </p>
            </div>
          </div>

          {/* Service Options Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">{t.apostilleServiceOptionsTitle}</h2>
            <p className="text-foreground text-base mb-4">
              {t.apostilleServiceOptionsDesc}
            </p>
            <div className="space-y-3">
              <div className="border border-foreground/30 rounded-lg p-5 bg-foreground/10 hover:bg-foreground/15 transition">
                <h3 className="text-lg font-bold text-foreground mb-2">{t.apostilleSameDayTitle}</h3>
                <p className="text-foreground text-base mb-4">
                  {t.apostilleSameDayDesc}
                </p>
                <Link 
                  href="/apostille/same-day-apostille-services"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  {t.apostilleSameDayLink} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="border border-foreground/30 rounded-lg p-5 bg-foreground/10 hover:bg-foreground/15 transition">
                <h3 className="text-lg font-bold text-foreground mb-2">{t.apostilleMailInTitle}</h3>
                <p className="text-foreground text-base mb-4">
                  {t.apostilleMailInDesc}
                </p>
                <Link 
                  href="/apostille/mail-in-apostille-services"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  {t.apostilleMailInLink} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="border border-foreground/30 rounded-lg p-5 bg-foreground/10 hover:bg-foreground/15 transition">
                <h3 className="text-lg font-bold text-foreground mb-2">{t.apostilleLegalizationTitle}</h3>
                <p className="text-foreground text-base mb-4">
                  {t.apostilleLegalizationDesc}
                </p>
                <Link 
                  href="/apostille/authentication-legalization"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  {t.apostilleLegalizationLink} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* International Clients Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">{t.apostilleInternationalTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <p className="text-foreground text-base leading-relaxed mb-3">
                {t.apostilleInternationalText1}
              </p>
              <p className="text-foreground text-base leading-relaxed">
                {t.apostilleInternationalText2}
              </p>
            </div>
          </div>

          {/* Why Work With Us Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">{t.apostilleWhyWorkTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.apostilleWhyWork1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.apostilleWhyWork2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.apostilleWhyWork3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.apostilleWhyWork4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.apostilleWhyWork5}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">{t.apostilleCTATitle}</h2>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-5">
              <p className="text-foreground text-base mb-3">
                {t.apostilleCTAText1}
              </p>
              <p className="text-foreground text-base font-semibold mb-3">
                {t.apostilleCTAText2}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href="tel:+16265903560" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>626-590-3560</span>
                </a>
                <a 
                  href="mailto:Kathryn@KathrynTong.com" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  <span>Kathryn@KathrynTong.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* CTA Section */}
          <div className="bg-white py-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">{t.readyToStart}</h2>
            <p className="text-base lg:text-lg text-foreground/90">
              {t.callOrTextLabel} <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">(626) 590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
