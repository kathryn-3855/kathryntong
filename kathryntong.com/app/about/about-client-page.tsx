"use client"
import { useTranslations } from "@/lib/use-translations"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactBar from "@/components/contact-bar"

export default function AboutClientPage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ContactBar />
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

          {/* Mission & Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">{t.aboutMissionTitle}</h3>
              <p className="text-muted-foreground">{t.aboutMissionDesc}</p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">{t.aboutValuesTitle}</h3>
              <p className="text-muted-foreground">{t.aboutValuesDesc}</p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">{t.aboutPromiseTitle}</h3>
              <p className="text-muted-foreground">{t.aboutPromiseDesc}</p>
            </Card>
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
                {
                  title: t.aboutBenefit5Title,
                  desc: t.aboutBenefit5Desc,
                },
                {
                  title: t.aboutBenefit6Title,
                  desc: t.aboutBenefit6Desc,
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

          {/* Certifications */}
          <div className="bg-accent rounded-lg p-12 mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{t.aboutCertificationsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: t.aboutCred1Title,
                  desc: t.aboutCred1Desc,
                },
                {
                  title: t.aboutCred2Title,
                  desc: t.aboutCred2Desc,
                },
                {
                  title: t.aboutCred3Title,
                  desc: t.aboutCred3Desc,
                },
              ].map((cred, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground">{cred.title}</h3>
                  <p className="text-sm text-white">{cred.desc}</p>
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
