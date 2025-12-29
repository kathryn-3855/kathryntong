"use client"
import { useTranslations } from "@/lib/use-translations"
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
          <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/kathryn.webp" alt="Kathryn's professional portrait" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{t.aboutTitle}</h1>
              <p className="text-base text-muted-foreground mb-3 leading-relaxed">
                {t.aboutBio1}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.aboutBio2}
              </p>
            </div>
          </div>

          {/* Why Clients Choose Me */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">WHY CLIENTS CHOOSE ME</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">On-site mobile service at Offices, Residences, or Health Facilities</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Punctual, discreet, and well-prepared appointments</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Clear communication and dependable follow-through</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Experienced with complex and time-sensitive documents</h3>
                </div>
              </div>
            </div>
            <p className="text-center text-foreground/80 text-lg">
              I work directly with attorneys, office managers, escrow officers, and professionals who require consistency and confidence in their service providers.
            </p>
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
