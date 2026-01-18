"use client"
import { useTranslations } from "@/lib/use-translations"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"

export default function AboutClientPage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/kathryn.webp" alt="Kathryn's professional portrait" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{t.aboutTitle}</h1>
              <p className="text-base text-foreground mb-2 leading-normal">
                {t.aboutBio3}
              </p>
              <p className="text-base text-foreground mb-2 leading-normal">
                {t.aboutBio4}
              </p>
              <p className="text-base text-foreground leading-normal">
                {t.aboutBio5}
              </p>
            </div>
          </div>

          {/* Why Choose Kathryn */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t.aboutWhyChoose}</h2>
            
            {/* Niche & Expertise */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">{t.aboutNicheExpertise}</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    {t.aboutNicheExpertise1}
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    {t.aboutNicheExpertise2}
                  </p>
                </div>
              </div>
            </div>

            {/* Customers Experience */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t.aboutCustomersExperience}</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    {t.aboutCustomersExperience1}
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    {t.aboutCustomersExperience2}
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    {t.aboutCustomersExperience3}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.aboutReadyTitle}</h2>
            <p className="text-lg text-foreground mb-4">
              Email, <a href="tel:+16265903560" className="text-primary hover:underline">Call or Text (626) 590-3560</a> to schedule an appointment, 7 days a week.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
