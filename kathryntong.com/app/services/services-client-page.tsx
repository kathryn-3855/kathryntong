"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

export default function ServicesClientPage() {
  const t = useTranslations()

  const experiencedWith = [
    t.mobileNotaryFinancialMedical,
    t.mobileNotaryAffidavits,
    t.mobileNotaryRealEstate,
    t.mobileNotaryEstatePlanning,
    t.mobileNotaryInternational,
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
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-8 mb-8">
              <p className="text-foreground text-base leading-relaxed mb-6">
                Lawyers in California use mobile notaries for convenience, efficiency, and accessibility, saving time by eliminating travel, meeting tight deadlines for urgent documents (like real estate or estate planning), and serving clients with mobility issues (hospitalized, elderly, incarcerated), all while ensuring legal validity and maintaining privacy by bringing services to homes, offices, or facilities. This flexibility boosts productivity and keeps legal processes moving smoothly without traffic delays, making them essential partners for busy firms.
              </p>
              
              <div className="mt-8 mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Key Benefits for Lawyers & Firms:</h3>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Time Savings:</strong> Avoids lawyer/staff travel, traffic, and waiting, getting documents notarized faster.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Increased Productivity:</strong> Allows lawyers to handle signings on-site at their office or client locations, keeping workflow efficient.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Client Convenience:</strong> Meets clients (even difficult-to-reach ones) at their home, hospital, or business, providing a comfortable setting.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Urgency & Deadlines:</strong> Crucial for time-sensitive matters like real estate closings, trust documents, or emergency filings.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Accessibility:</strong> Essential for clients who are elderly, disabled, hospitalized, or incarcerated, ensuring legal access for all.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Cost-Effectiveness:</strong> Can reduce firm overhead compared to in-office notary services and avoids inflated rates from some walk-in notaries.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Security & Validity:</strong> Mobile notaries follow strict state laws, providing the same legal weight and accuracy as traditional notarizations, adding security to transactions.</p>
                  </li>
                </ul>
              </div>

              <div className="mt-8 mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Common Scenarios:</h3>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Estate Planning:</strong> Notarizing wills, trusts, powers of attorney at a client's home.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Real Estate:</strong> Handling loan documents or closing papers at a home or office.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Family Law:</strong> Witnessing documents for adoptions or dismissals when clients can't travel.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Corporate Matters:</strong> Meeting executives at their office for quick signings.</p>
                  </li>
                </ul>
              </div>

              <p className="text-foreground text-base leading-relaxed mt-6">
                In California, mobile notaries are a vital resource for law firms to maintain workflow, serve diverse client needs, and uphold legal standards efficiently, especially in busy metropolitan areas like Los Angeles.
              </p>
            </div>
          </div>

          {/* Service Area & Travel Section */}
          <div className="mb-20">
            <div className="border border-foreground/30 rounded-lg p-8 bg-foreground/10 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-foreground" />
                <h3 className="text-xl font-bold text-foreground">{t.serviceAreaTitle}</h3>
              </div>
              <p className="text-foreground mb-4">{t.serviceAreaDescription}</p>
              <p className="text-foreground/80 text-sm mb-4">{t.travelFeeDescription}</p>
              <div className="mt-4">
                <p className="font-semibold text-foreground mb-3">Cities We Service:</p>
                <div className="grid grid-cols-3 gap-2">
                  <p className="text-foreground text-sm">Alhambra</p>
                  <p className="text-foreground text-sm">Altadena</p>
                  <p className="text-foreground text-sm">Arcadia</p>
                  <p className="text-foreground text-sm">Baldwin Park</p>
                  <p className="text-foreground text-sm">City of Industry</p>
                  <p className="text-foreground text-sm">Commerce</p>
                  <p className="text-foreground text-sm">Duarte</p>
                  <p className="text-foreground text-sm">East Los Angeles</p>
                  <p className="text-foreground text-sm">El Monte</p>
                  <p className="text-foreground text-sm">Hacienda Heights</p>
                  <p className="text-foreground text-sm">Hollywood</p>
                  <p className="text-foreground text-sm">La Canada-Flintridge</p>
                  <p className="text-foreground text-sm">Los Angeles</p>
                  <p className="text-foreground text-sm">Montebello</p>
                  <p className="text-foreground text-sm">Monterey Park</p>
                  <p className="text-foreground text-sm">Monrovia</p>
                  <p className="text-foreground text-sm">Pasadena</p>
                  <p className="text-foreground text-sm">Pico Rivera</p>
                  <p className="text-foreground text-sm">Rosemead</p>
                  <p className="text-foreground text-sm">San Gabriel</p>
                  <p className="text-foreground text-sm">San Marino</p>
                  <p className="text-foreground text-sm">Sierra Madre</p>
                  <p className="text-foreground text-sm">South Pasadena</p>
                  <p className="text-foreground text-sm">Temple City</p>
                  <p className="text-foreground text-sm">Vernon</p>
                  <p className="text-foreground text-sm">West Covina</p>
                </div>
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

