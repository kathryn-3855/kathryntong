"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { CheckCircle, Phone, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/lib/use-translations"

export default function MailInApostilleClientPage() {
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
            <span>{t.mailInApostilleBackLink}</span>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.mailInApostilleTitle}
            </h1>
            <p className="text-xl text-foreground/90 mb-4">
              {t.mailInApostilleSubtitle}
            </p>
          </div>

          {/* Overview Section */}
          <div className="mb-10">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <p className="text-foreground text-base leading-relaxed mb-4">
                {t.mailInApostilleOverview1}
              </p>
              <p className="text-foreground text-base leading-relaxed">
                {t.mailInApostilleOverview2}
              </p>
            </div>
          </div>

          {/* Who Can Use This Service Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.mailInApostilleWhoCanUseTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.mailInApostilleWhoCanUse1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.mailInApostilleWhoCanUse2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.mailInApostilleWhoCanUse3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.mailInApostilleWhoCanUse4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.mailInApostilleWhoCanUse5}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.mailInApostilleHowWorksTitle}</h2>
            <div className="space-y-4">
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">{t.mailInApostilleStep1Title}</h3>
                <p className="text-foreground text-base">
                  {t.mailInApostilleStep1Desc}
                </p>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">{t.mailInApostilleStep2Title}</h3>
                <p className="text-foreground text-base">
                  {t.mailInApostilleStep2Desc}
                </p>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">{t.mailInApostilleStep3Title}</h3>
                <p className="text-foreground text-base">
                  {t.mailInApostilleStep3Desc}
                </p>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">{t.mailInApostilleStep4Title}</h3>
                <p className="text-foreground text-base">
                  {t.mailInApostilleStep4Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.mailInApostilleBenefitsTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.mailInApostilleBenefit1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.mailInApostilleBenefit2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.mailInApostilleBenefit3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.mailInApostilleBenefit4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.mailInApostilleBenefit5}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.mailInApostilleBenefit6}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* International Clients Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.mailInApostilleInternationalTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <p className="text-foreground text-base leading-relaxed mb-4">
                {t.mailInApostilleInternationalText1}
              </p>
              <p className="text-foreground text-base leading-relaxed">
                {t.mailInApostilleInternationalText2}
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-10">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">{t.mailInApostilleCTATitle}</h2>
              <p className="text-foreground text-base mb-4">
                {t.mailInApostilleCTADesc}
              </p>
              <p className="text-foreground text-base mb-4">
                We're open 7 Days per Week, 8:30 am - 8:30 pm.
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
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">{t.mailInApostilleNeedHelp}</h2>
            <p className="text-base lg:text-lg text-foreground/90">
              {t.callOrTextLabel} <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">626-590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

