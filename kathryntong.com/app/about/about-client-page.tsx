"use client"
import { useTranslations } from "@/lib/use-translations"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutClientPage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/kathryn.webp" alt="Kathryn's professional portrait" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-6">{t.aboutTitle}</h1>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                {t.aboutBio1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.aboutBio2}
              </p>
            </div>
          </div>

          {/* Why Choose Kathryn */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">{t.aboutWhyChoose}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: t.aboutBenefit1Title,
                  desc: t.aboutBenefit1Desc,
                },
                {
                  title: t.aboutBenefit2Title,
                  desc: t.aboutBenefit2Desc,
                },
                {
                  title: t.aboutBenefit3Title,
                  desc: t.aboutBenefit3Desc,
                },
                {
                  title: t.aboutBenefit4Title,
                  desc: t.aboutBenefit4Desc,
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.aboutReadyTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t.aboutReadyDesc}</p>
            <a
              href="/#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {t.contact}
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
