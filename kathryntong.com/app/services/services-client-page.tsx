"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
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
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              {t.mobileNotaryHeroHeadline.split(':')[0]}:<br />
              {t.mobileNotaryHeroHeadline.split(':')[1]}
            </h1>
            <p className="text-xl text-foreground/90">
              {t.mobileNotaryHeroSubheadline}
            </p>
          </div>

          {/* Core Services Section */}
          <div className="mb-8">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    {t.mobileNotaryValueAdded}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    {t.mobileNotaryConvenience}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base">
                    {t.mobileNotaryReliable}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Area & Travel Section */}
          <div className="mb-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-foreground/30 rounded-lg p-8 bg-foreground/10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-foreground" />
                  <h3 className="text-xl font-bold text-foreground">{t.serviceAreaTitle}</h3>
                </div>
                <p className="text-foreground mb-4">{t.serviceAreaDescription}</p>
                <p className="text-foreground/80 text-sm mb-4">{t.travelFeeDescription}</p>
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Alhambra</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Arcadia</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Beverly Hills</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Commerce</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Culver City</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Glendale</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Hollywood</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Los Angeles</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Monterey Park</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Montebello</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Monrovia</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Pasadena</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">San Gabriel</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">San Marino</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Santa Monica</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Silverlake</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">South Pasadena</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">Vernon</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">West Hollywood</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground text-sm">West Los Angeles</p>
                    </div>
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

          {/* Google Reviews */}
          <GoogleReviews />

          {/* CTA Section */}
          <div className="bg-white py-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">{t.readyToStart}</h2>
            <p className="text-base lg:text-lg text-foreground/90">
              Call or Text <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">(626) 590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

