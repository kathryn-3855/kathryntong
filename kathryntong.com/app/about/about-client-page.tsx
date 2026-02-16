"use client"
import { CheckCircle, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { useTranslations } from "@/lib/use-translations"

export default function AboutClientPage() {
  const t = useTranslations()
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <div className="relative h-52 md:h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/kathryn.webp" alt="Kathryn's professional portrait" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">
                {t.aboutPageTitle}
              </h1>
              <p className="text-base text-foreground mb-3 leading-relaxed">
                {t.aboutPageBio1}
              </p>
              <p className="text-base text-foreground leading-relaxed">
                {t.aboutPageBio2}
              </p>
            </div>
          </div>

          {/* Who I Serve Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.aboutWhoIServeTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-base text-foreground mb-3">
                {t.aboutWhoIServeIntro}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.aboutWhoIServe1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.aboutWhoIServe2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.aboutWhoIServe3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.aboutWhoIServe4}</span>
                </li>
              </ul>
              <p className="text-base text-foreground mt-3">
                {t.aboutWhoIServeNote}
              </p>
            </div>
          </div>

          {/* Why Clients Choose Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.aboutWhyClientsChooseTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.aboutWhyClientsChoose1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.aboutWhyClientsChoose2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.aboutWhyClientsChoose3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.aboutWhyClientsChoose4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.aboutWhyClientsChoose5}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.aboutWhyClientsChoose6}</span>
                </li>
              </ul>
              <p className="text-base text-foreground mt-3 italic">
                {t.aboutWhyClientsChooseNote}
              </p>
            </div>
          </div>

          {/* Languages & International Clients Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.aboutLanguagesTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-base text-foreground leading-relaxed">
                {t.aboutLanguagesText1}
              </p>
              <p className="text-base text-foreground leading-relaxed mt-3">
                {t.aboutLanguagesText2}
              </p>
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* Call to Action */}
          <div className="text-center py-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">{t.aboutCallToActionTitle}</h2>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 max-w-3xl mx-auto">
              <p className="text-base text-foreground mb-3">
                {t.aboutCallToActionText1}
              </p>
              <p className="text-base text-foreground font-semibold mb-3">
                {t.aboutCallToActionText2}
              </p>
              <p className="text-base text-foreground mb-3">
                {t.aboutCallToActionText3}
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-center">
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
        </div>
      </main>

      <Footer />
    </div>
  )
}
