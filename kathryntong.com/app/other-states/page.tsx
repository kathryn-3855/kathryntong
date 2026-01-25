"use client"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { Check } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

const statesData = [
  {
    name: "Arizona",
    cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Glendale"],
  },
  {
    name: "Colorado",
    cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood"],
  },
  {
    name: "Florida",
    cities: ["Miami", "Tampa", "Orlando", "Jacksonville", "Fort Lauderdale"],
  },
  {
    name: "Illinois",
    cities: ["Chicago", "Aurora", "Rockford", "Joliet", "Naperville"],
  },
  {
    name: "New York",
    cities: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse"],
  },
  {
    name: "Texas",
    cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
  },
  {
    name: "Washington",
    cities: ["Seattle", "Tacoma", "Vancouver", "Spokane", "Bellevue"],
  },
  {
    name: "Nevada",
    cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Paradise"],
  },
  {
    name: "Oregon",
    cities: ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro"],
  },
  {
    name: "Utah",
    cities: ["Salt Lake City", "Provo", "West Valley City", "Orem", "Sandy"],
  },
]

export default function OtherStatesPage() {
  const [selectedState, setSelectedState] = useState<string>(statesData[0].name)
  const t = useTranslations()

  const currentState = statesData.find((state) => state.name === selectedState)
  const allCities = statesData.flatMap((state) => state.cities)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.otherStatesTitle}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.otherStatesSubtitle}
            </p>
          </div>

          {/* State Selector */}
          <div className="mb-16">
            <div className="max-w-md mx-auto">
              <label className="block text-lg font-semibold text-foreground mb-4">{t.otherStatesSelectLabel}</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground text-lg"
              >
                {statesData.map((state) => (
                  <option key={state.name} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Cities in Selected State */}
          {currentState && (
            <div className="mb-20 bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">{t.otherStatesServiceAreasTitle} {currentState.name}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {currentState.cities.map((city) => (
                  <div key={city} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-foreground">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 text-sm">
                {t.otherStatesServiceAreasDesc} {currentState.name}. {t.otherStatesServiceAreasContact}
              </p>
            </div>
          )}

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t.otherStatesPricingTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-border rounded-lg p-8 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-4">{t.otherStatesMobileNotaryTitle}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{t.otherStatesMobileNotaryPrice}</span>
                  <span className="text-muted-foreground ml-2">{t.otherStatesMobileNotaryPriceUnit}</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t.otherStatesMobileNotaryFeature1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t.otherStatesMobileNotaryFeature2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t.otherStatesMobileNotaryFeature3}</span>
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-4">{t.otherStatesApostilleTitle}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{t.otherStatesApostillePrice}</span>
                  <span className="text-muted-foreground ml-2">{t.otherStatesApostillePriceUnit}</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t.otherStatesApostilleFeature1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t.otherStatesApostilleFeature2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t.otherStatesApostilleFeature3}</span>
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-4">{t.otherStatesLegalizationTitle}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{t.otherStatesLegalizationPrice}</span>
                  <span className="text-muted-foreground ml-2">{t.otherStatesLegalizationPriceUnit}</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t.otherStatesLegalizationFeature1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t.otherStatesLegalizationFeature2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t.otherStatesLegalizationFeature3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* CTA Section */}
          <div className="bg-white py-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">{t.readyToStart}</h2>
            <p className="text-base lg:text-lg text-foreground/90">
              {t.callOrTextLabel} <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">(626) 590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
