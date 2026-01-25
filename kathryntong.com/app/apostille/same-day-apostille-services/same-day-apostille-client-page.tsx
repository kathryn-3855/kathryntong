"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { CheckCircle, Phone, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/lib/use-translations"

export default function SameDayApostilleClientPage() {
  const t = useTranslations()
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link 
            href="/apostille"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.sameDayApostilleBackLink}</span>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.sameDayApostilleTitle}
            </h1>
            <p className="text-xl text-foreground/90 mb-4">
              {t.sameDayApostilleSubtitle}
            </p>
          </div>

          {/* Overview Section */}
          <div className="mb-10">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <p className="text-foreground text-base leading-relaxed mb-4">
                {t.sameDayApostilleOverview1}
              </p>
              <p className="text-foreground text-base leading-relaxed">
                {t.sameDayApostilleOverview2}
              </p>
            </div>
          </div>

          {/* What Documents Qualify Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.sameDayApostilleQualifyTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.sameDayApostilleQualify1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.sameDayApostilleQualify2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.sameDayApostilleQualify3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.sameDayApostilleQualify4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.sameDayApostilleQualify5}</span>
                </li>
              </ul>
              <p className="text-foreground text-sm mt-4 italic">
                {t.sameDayApostilleQualifyNote}
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.sameDayApostilleHowWorksTitle}</h2>
            <div className="space-y-4">
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">{t.sameDayApostilleStep1Title}</h3>
                <p className="text-foreground text-base">
                  {t.sameDayApostilleStep1Desc}
                </p>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">{t.sameDayApostilleStep2Title}</h3>
                <p className="text-foreground text-base">
                  {t.sameDayApostilleStep2Desc}
                </p>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">{t.sameDayApostilleStep3Title}</h3>
                <p className="text-foreground text-base">
                  {t.sameDayApostilleStep3Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.sameDayApostilleBenefitsTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.sameDayApostilleBenefit1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.sameDayApostilleBenefit2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.sameDayApostilleBenefit3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.sameDayApostilleBenefit4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.sameDayApostilleBenefit5}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-10">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">{t.sameDayApostilleCTATitle}</h2>
              <p className="text-foreground text-base mb-4">
                {t.sameDayApostilleCTADesc}
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

          {/* Final CTA */}
          <div className="bg-white py-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">{t.sameDayApostilleNeedHelp}</h2>
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

