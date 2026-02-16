"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { CheckCircle, Phone, Mail, ArrowRight, Globe } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/lib/use-translations"

export default function InternationalApostilleClientPage() {
  const t = useTranslations()
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t.internationalApostilleTitle}
            </h1>
          </div>

          {/* Introduction Section */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                {t.internationalApostilleIntro1}
              </p>
              <p className="text-foreground text-base leading-relaxed mb-3">
                {t.internationalApostilleIntro2}
              </p>
              <p className="text-foreground text-base leading-relaxed">
                {t.internationalApostilleIntro3}
              </p>
            </div>
          </div>

          {/* Hague vs. Non-Hague Countries Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t.internationalApostilleHagueTitle}
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                {t.internationalApostilleHagueIntro}
              </p>
              
              <div className="mb-3">
                <h3 className="text-xl font-bold text-foreground mb-2">{t.internationalApostilleHagueCountriesTitle}</h3>
                <ul className="space-y-1.5 mb-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span className="text-foreground text-base">{t.internationalApostilleHagueCountry1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span className="text-foreground text-base">{t.internationalApostilleHagueCountry2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span className="text-foreground text-base">{t.internationalApostilleHagueCountry3}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{t.internationalApostilleNonHagueTitle}</h3>
                <ul className="space-y-1.5 mb-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span className="text-foreground text-base">{t.internationalApostilleNonHague1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <div>
                      <span className="text-foreground text-base">{t.internationalApostilleNonHague2}</span>
                      <ul className="ml-5 mt-1.5 space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">o</span>
                          <span className="text-foreground text-base">{t.internationalApostilleNonHague2a}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">o</span>
                          <span className="text-foreground text-base">{t.internationalApostilleNonHague2b}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">o</span>
                          <span className="text-foreground text-base">{t.internationalApostilleNonHague2c}</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-foreground text-base leading-relaxed font-semibold">
                {t.internationalApostilleHagueWarning}
              </p>
            </div>
          </div>

          {/* Why Country-Specific Rules Are Critical Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t.internationalApostilleCountryRulesTitle}
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                {t.internationalApostilleCountryRulesIntro}
              </p>
              <ul className="space-y-1.5 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCountryRule1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCountryRule2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCountryRule3}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCountryRule4}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCountryRule5}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCountryRule6}</span>
                </li>
              </ul>
              <p className="text-foreground text-base leading-relaxed">
                {t.internationalApostilleCountryRulesNote}
              </p>
            </div>
          </div>

          {/* Popular Destination Countries Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t.internationalApostillePopularDestinationsTitle}
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                {t.internationalApostillePopularDestinationsIntro}
              </p>
              
              <div className="space-y-3">
                <Link href="/international-apostille/china" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">{t.internationalApostilleChinaTitle}</h3>
                  <p className="text-foreground text-base">
                    {t.internationalApostilleChinaDesc}
                  </p>
                </Link>

                <Link href="/international-apostille/taiwan" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">{t.internationalApostilleTaiwanTitle}</h3>
                  <p className="text-foreground text-base">
                    {t.internationalApostilleTaiwanDesc}
                  </p>
                </Link>

                <Link href="/international-apostille/hong-kong" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">{t.internationalApostilleHongKongTitle}</h3>
                  <p className="text-foreground text-base">
                    {t.internationalApostilleHongKongDesc}
                  </p>
                </Link>

                <Link href="/international-apostille/mexico" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">{t.internationalApostilleMexicoTitle}</h3>
                  <p className="text-foreground text-base">
                    {t.internationalApostilleMexicoDesc}
                  </p>
                </Link>

                <Link href="/international-apostille/south-korea" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">{t.internationalApostilleSouthKoreaTitle}</h3>
                  <p className="text-foreground text-base">
                    {t.internationalApostilleSouthKoreaDesc}
                  </p>
                </Link>

                <Link href="/international-apostille/philippines" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">{t.internationalApostillePhilippinesTitle}</h3>
                  <p className="text-foreground text-base">
                    {t.internationalApostillePhilippinesDesc}
                  </p>
                </Link>

                <Link href="/international-apostille/japan" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">{t.internationalApostilleJapanTitle}</h3>
                  <p className="text-foreground text-base">
                    {t.internationalApostilleJapanDesc}
                  </p>
                </Link>

                <Link href="/international-apostille/saudi-arabia" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">{t.internationalApostilleSaudiArabiaTitle}</h3>
                  <p className="text-foreground text-base">
                    {t.internationalApostilleSaudiArabiaDesc}
                  </p>
                </Link>
              </div>

              <p className="text-foreground text-base mt-3 flex items-center gap-2">
                <span>👉</span>
                <span>{t.internationalApostillePopularDestinationsNote}</span>
              </p>
            </div>
          </div>

          {/* Common International Document Types Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t.internationalApostilleCommonDocsTitle}
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                {t.internationalApostilleCommonDocsIntro}
              </p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCommonDoc1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCommonDoc2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCommonDoc3}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCommonDoc4}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCommonDoc5}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCommonDoc6}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCommonDoc7}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.internationalApostilleCommonDoc8}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mail-In Apostille & Legalization Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t.internationalApostilleMailInTitle}
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                {t.internationalApostilleMailInText1}
              </p>
              <p className="text-foreground text-base leading-relaxed mb-3">
                {t.internationalApostilleMailInText2}
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                <Link 
                  href="/apostille"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  👉 Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/apostille/mail-in-apostille-services"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  👉 Mail-In Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Why Clients Choose Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t.internationalApostilleWhyChooseTitle}
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.internationalApostilleWhyChoose1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.internationalApostilleWhyChoose2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.internationalApostilleWhyChoose3}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.internationalApostilleWhyChoose4}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.internationalApostilleWhyChoose5}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t.internationalApostilleFAQTitle}
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      {t.internationalApostilleFAQ1Q}
                    </p>
                    <p className="text-foreground text-base">
                      {t.internationalApostilleFAQ1A}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      {t.internationalApostilleFAQ2Q}
                    </p>
                    <p className="text-foreground text-base">
                      {t.internationalApostilleFAQ2A}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      {t.internationalApostilleFAQ3Q}
                    </p>
                    <p className="text-foreground text-base">
                      {t.internationalApostilleFAQ3A}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      {t.internationalApostilleFAQ4Q}
                    </p>
                    <p className="text-foreground text-base">
                      {t.internationalApostilleFAQ4A}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      {t.internationalApostilleFAQ5Q}
                    </p>
                    <p className="text-foreground text-base">
                      {t.internationalApostilleFAQ5A}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      {t.internationalApostilleFAQ6Q}
                    </p>
                    <p className="text-foreground text-base">
                      {t.internationalApostilleFAQ6A}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      {t.internationalApostilleFAQ7Q}
                    </p>
                    <p className="text-foreground text-base">
                      {t.internationalApostilleFAQ7A}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Important Notice Section */}
          <div className="mb-6">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h2 className="text-xl font-bold text-foreground mb-2">
                {t.internationalApostilleImportantNoticeTitle}
              </h2>
              <p className="text-foreground text-base leading-relaxed">
                {t.internationalApostilleImportantNoticeText}
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mb-6">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {t.internationalApostilleCTATitle}
              </h2>
              <p className="text-foreground text-base mb-2">
                {t.internationalApostilleCTAText1}
              </p>
              <p className="text-foreground text-base font-semibold mb-2">
                {t.internationalApostilleCTAText2}
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

          {/* Final CTA Section */}
          <div className="bg-white py-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">{t.readyToStart}</h2>
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

