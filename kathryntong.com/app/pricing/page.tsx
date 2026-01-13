"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { Check } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

export default function PricingPage() {
  const t = useTranslations()

  const pricingPlans = [
    {
      name: t.notaryAtOffice,
      description: t.atOurMontereyPark,
      price: "$15",
      period: t.perSignature2,
      features: ["$15 per Signature", t.fastAndAffordable, t.appointmentsRequired],
    },
    {
      name: "Mobile Notary",
      description: t.weComeTo,
      price: "$15",
      period: t.perSignature2 + " + " + t.travelFeeApplies.toLowerCase(),
      features: ["$15 per Signature", t.travelFeeApplies, t.upTo30Miles, t.homeOfficeHospital, t.appointmentsRequired],
    },
    {
      name: t.estateEscrow,
      description: t.complexDocuments,
      price: "Varies",
      period: t.dependingOnPackage,
      features: [
        t.priceVaries,
        t.includesPrintScan,
        t.multipleSigningLocations,
        t.lawOfficesVenue,
        t.appointmentsRequired,
      ],
    },
  ]

  const apostillePricing = [
    {
      name: t.standardApostille,
      description: t.twoToFourDays,
      services: [
        { label: t.firstApostille, price: t.firstApostillePrice },
        { label: t.secondApostille, price: t.secondApostillePrice },
      ],
      note: t.notaryTravelFeeApplies,
    },
    {
      name: t.sameDayApostille,
      description: t.withinTwentyFourHours,
      services: [{ label: t.sameDayService, price: t.sameDayServicePrice }],
      note: t.notaryTravelFeeApplies,
    },
    {
      name: t.federalApostille2,
      description: t.fourToEightWeeks,
      services: [{ label: t.federalDocuments2, price: t.federalDocumentsPrice }],
      note: t.notaryTravelFeeApplies,
    },
    {
      name: t.embassyLegalization,
      description: t.customQuotes,
      services: [
        { label: t.embassyLegalizationLabel, price: t.embassyLegalizationPrice },
        { label: t.bulkApostille, price: t.bulkApostillePrice },
      ],
      note: t.priceDeliveryDepends,
    },
  ]

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{t.pricingTitle}</h1>
            <p className="text-xl text-foreground/90 max-w-2xl mx-auto">{t.affordableTransparent}</p>
          </div>

          {/* Notary Services Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.notaryServices}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-lg border border-foreground/30 bg-foreground/10 p-6 flex flex-col hover:bg-foreground/20 transition"
                >
                  <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-foreground/80 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-foreground/80 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Apostille & Legalization Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.apostilleAndLegalization}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {apostillePricing.map((category) => (
                <div key={category.name} className="rounded-lg border border-foreground/30 bg-foreground/10 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{category.name}</h3>
                  <p className="text-sm text-foreground/80 mb-4">{category.description}</p>
                  <div className="space-y-3 mb-4">
                    {category.services.map((service) => (
                      <div
                        key={service.label}
                        className="flex justify-between items-center pb-4 border-b border-foreground/30 last:border-b-0"
                      >
                        <span className="text-foreground">{service.label}</span>
                        <span className="text-lg font-bold text-foreground">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-foreground/70 italic">{category.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* CTA Section */}
          <div className="bg-foreground/20 border border-foreground/30 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">{t.readyToGetStarted}</h2>
            <p className="text-foreground/90 mb-4 max-w-2xl mx-auto">{t.contactToSchedule}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16265903560"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                {t.callNumber}
              </a>
              <a
                href="mailto:Kathryn@CAMobileApostille.com"
                className="inline-block border border-foreground text-foreground px-6 py-3 rounded-lg font-medium hover:bg-foreground/20 transition"
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
