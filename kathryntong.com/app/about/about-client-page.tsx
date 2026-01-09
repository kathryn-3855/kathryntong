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
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Concierge Service:</h3>
                  <p className="text-muted-foreground">Specialize in VIP Notary Assignments, ensuring absolute discretion and meticulous attention to detail for every signature.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Discretion & Privacy:</h3>
                  <p className="text-muted-foreground">For executives and international clients, we provide secure, confidential, and timely document execution, handling everything from complex international contracts to sensitive estate documents, with Utmost Confidentiality, wherever and whenever you need us.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Convenience:</h3>
                  <p className="text-muted-foreground">Flexible scheduling with same-day, evening, after-hours, and weekend appointments at Your Office or Home or other locations of your choice, 7 days per week.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Expertise:</h3>
                  <p className="text-muted-foreground">Expertise in Corporate Mobile Notary, Estate Planning Notary and International Apostille.</p>
                </div>
              </div>
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
