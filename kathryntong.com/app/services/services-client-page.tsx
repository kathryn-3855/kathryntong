"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Home } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

export default function ServicesClientPage() {
  const t = useTranslations()

  const mobileNotaryServices = [
    t.mobileNotaryConvenient,
    t.mobileNotaryFlexible,
    t.mobileNotaryTrusted,
  ]

  const experiencedWith = [
    t.mobileNotaryFinancialMedical,
    t.mobileNotaryAffidavits,
    t.mobileNotaryRealEstate,
    t.mobileNotaryEstatePlanning,
    t.mobileNotaryInternational,
  ]

  const weTravelTo = [
    t.weTravelToHospital,
    t.weTravelToDetention,
    t.weTravelToLawOffices,
    t.weTravelToResidences,
    t.weTravelToAnyLocation,
  ]


  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.mobileNotaryHeroHeadline}
            </h1>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
              {t.mobileNotaryHeroSubheadline}
            </p>
          </div>

          {/* Core Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">{t.mobileNotaryServicesInclude}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-8 mb-8">
              <ul className="space-y-4">
                {mobileNotaryServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-base">{service}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="font-semibold text-foreground mb-3">{t.mobileNotaryExperienced}</p>
                <ul className="space-y-2 ml-4">
                  {experiencedWith.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Service Area & Travel Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-foreground/30 rounded-lg p-8 bg-foreground/10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-foreground" />
                  <h3 className="text-xl font-bold text-foreground">{t.serviceAreaTitle}</h3>
                </div>
                <p className="text-foreground mb-4">{t.serviceAreaDescription}</p>
                <p className="text-foreground/80 text-sm mb-4">{t.travelFeeDescription}</p>
                <div className="mt-4">
                  <p className="font-semibold text-foreground mb-3">Cities We Service:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <p className="text-foreground text-sm">Monterey Park</p>
                    <p className="text-foreground text-sm">Alhambra</p>
                    <p className="text-foreground text-sm">San Gabriel</p>
                    <p className="text-foreground text-sm">Rosemead</p>
                    <p className="text-foreground text-sm">Pasadena</p>
                    <p className="text-foreground text-sm">South Pasadena</p>
                    <p className="text-foreground text-sm">La Canada-Flintridge</p>
                    <p className="text-foreground text-sm">Arcadia</p>
                    <p className="text-foreground text-sm">Monrovia</p>
                    <p className="text-foreground text-sm">East Los Angeles</p>
                    <p className="text-foreground text-sm">Los Angeles</p>
                    <p className="text-foreground text-sm">Vernon</p>
                    <p className="text-foreground text-sm">Commerce</p>
                    <p className="text-foreground text-sm">Montebello</p>
                    <p className="text-foreground text-sm">Pico Rivera</p>
                    <p className="text-foreground text-sm">Hollywood</p>
                    <p className="text-foreground text-sm">Duarte</p>
                  </div>
                </div>
              </div>

              {/* We Travel To Section */}
              <div className="border border-foreground/30 rounded-lg p-8 bg-foreground/10">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-foreground" />
                  <h3 className="text-xl font-bold text-foreground">{t.weTravelToTitle}</h3>
                </div>
                <ul className="space-y-3">
                  {weTravelTo.map((location, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">{location}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-foreground rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">{t.scheduleMobileNotaryCTA}</h2>
            <p className="mb-6 max-w-2xl mx-auto text-white/90">{t.scheduleMobileNotaryCTAText}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16265903560"
                className="inline-block bg-white text-foreground px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition"
              >
                {t.callNumber}
              </a>
              <a
                href="mailto:Kathryn@CAMobileApostille.com"
                className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition"
              >
                {t.emailUs}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

