"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Check } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

export default function PricingPage() {
  const t = useTranslations()

  const pricingPlans = [
    {
      name: "Healthcare Facility",
      description: "Starting from $100 per visit, depending on signing location & number of documents",
      price: "$100",
      period: "starting per visit",
      features: ["Starting from $100 per visit", "Depends on signing location", "Based on number of documents", t.appointmentsRequired],
    },
    {
      name: "Professional Offices",
      description: "Billed per visit or per engagement based on location, urgency and scope of work",
      price: "Varies",
      period: "per visit or engagement",
      features: [
        "Billed per visit or per engagement",
        "Based on location",
        "Based on urgency",
        "Based on scope of work",
        t.appointmentsRequired,
      ],
    },
    {
      name: t.estateEscrow,
      description: t.complexDocuments,
      price: "Varies",
      period: "depending on package",
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
      <main className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why Choose Us */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Why Choose Us?</h2>
            <div className="bg-foreground/10 rounded-lg p-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Mobile Services</h3>
                    <p className="text-foreground/80 text-sm">We come to your office, Residence, Facilities, or Locations of your choice.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Fast Turnaround</h3>
                    <p className="text-foreground/80 text-sm">
                      24 Hours for Notary & Apostille, 2 to 6 weeks for Federal and Embassy Legalization, depending on destination country.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">10 Years Experience</h3>
                    <p className="text-foreground/80 text-sm">Experience with complex and time sensitive documents. Clear communication and dependable follow-through.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Flexible Hours</h3>
                    <p className="text-foreground/80 text-sm">Available 7 days a week, 8:30 AM to 8:30 PM for your convenience. Appointments required.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Notary Pricing */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Mobile Notary Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-lg border border-foreground/30 bg-foreground/10 p-6 flex flex-col hover:bg-foreground/20 transition"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-foreground/80 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-foreground/80 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Apostille & Legalization Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">{t.apostilleAndLegalization}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {apostillePricing.map((category) => (
                <div key={category.name} className="rounded-lg border border-foreground/30 bg-foreground/10 p-5">
                  <h3 className="text-base font-bold text-foreground mb-1">{category.name}</h3>
                  <p className="text-xs text-foreground/80 mb-3">{category.description}</p>
                  <div className="space-y-2 mb-3">
                    {category.services.map((service) => (
                      <div
                        key={service.label}
                        className="flex justify-between items-center pb-2 border-b border-foreground/30 last:border-b-0"
                      >
                        <span className="text-xs text-foreground">{service.label}</span>
                        <span className="text-sm font-bold text-foreground">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-foreground/70 italic">{category.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-foreground/20 border border-foreground/30 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">{t.readyToGetStarted}</h2>
            <p className="text-foreground/90 mb-5 max-w-2xl mx-auto">{t.contactToSchedule}</p>
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
