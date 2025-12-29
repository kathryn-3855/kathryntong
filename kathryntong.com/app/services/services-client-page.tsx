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
                Mobile notaries are crucial for California lawyers and businesses because they provide ultimate convenience, efficiency, and flexibility, bringing notarization to your office, client's location, or any convenient spot, saving time and money by avoiding travel, traffic, and missed closings, especially for urgent real estate, estate planning, and corporate documents, ensuring legal integrity and prompt service.
              </p>
              
              <div className="mt-8 mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Key Benefits for Lawyers & Businesses:</h3>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Time Savings & Efficiency:</strong> Avoids lost productivity from travel and waiting, keeping legal processes moving faster, crucial for time-sensitive matters like real estate closings.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Convenience:</strong> Notary comes to you (law office, client site, home), simplifying logistics for busy professionals and clients.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Flexibility:</strong> Available outside regular hours, accommodating urgent needs and various schedules.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Cost-Effectiveness:</strong> Reduces staff travel time and associated expenses, boosting overall productivity.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Enhanced Client Service:</strong> Provides a premium, personalized experience, especially helpful for clients who are homebound or in care facilities.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Legal Certainty:</strong> Ensures documents like Powers of Attorney, trusts, and real estate deeds receive legally robust notarization, preventing rejections by institutions.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Streamlined Operations:</strong> Handles multiple signings or full document processing in one visit, ensuring confidentiality and compliance.</p>
                  </li>
                </ul>
              </div>

              <div className="mt-8 mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Common Uses in California:</h3>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Real Estate:</strong> Loan document signings, deeds, title transfers.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Estate Planning:</strong> Wills, trusts, Powers of Attorney (POAs).</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Business:</strong> Contracts, corporate filings, legal agreements.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Healthcare:</strong> Advance healthcare directives, medical POAs.</p>
                  </li>
                </ul>
              </div>

              <p className="text-foreground text-base leading-relaxed mt-6">
                In short, mobile notaries act as essential partners, integrating seamlessly into legal and business workflows to provide secure, prompt, and convenient authentication services that uphold legal standards and support crucial deadlines in California.
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

