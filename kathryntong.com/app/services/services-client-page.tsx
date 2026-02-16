"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import LocalBusinessSchema from "@/components/local-business-schema"
import { CheckCircle, Phone, Mail, MapPin, Check } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/lib/use-translations"

export default function ServicesClientPage() {
  const t = useTranslations()
  return (
    <div className="min-h-screen bg-white text-foreground">
      <LocalBusinessSchema />
      <Header />
      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.servicesPageMobileNotaryTitle}
            </h1>
            <p className="text-lg text-foreground/90">
              {t.servicesPageMobileNotarySubtitle}
            </p>
          </div>

          {/* What Is a Mobile Notary Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">{t.servicesWhatIsMobileNotaryTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <p className="text-foreground text-base leading-relaxed">
                {t.servicesWhatIsMobileNotaryText}
              </p>
            </div>
          </div>

          {/* Mobile Notary Services Offered Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">{t.servicesMobileNotaryOfferedTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.servicesMobileNotaryService1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.servicesMobileNotaryService2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.servicesMobileNotaryService3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.servicesMobileNotaryService4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.servicesMobileNotaryService5}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">{t.servicesMobileNotaryService6}</span>
                </li>
              </ul>
              <p className="text-foreground text-base mt-4">
                {t.servicesMobileNotaryNote}
              </p>
            </div>
          </div>

          {/* Service Areas Section */}
          <div className="mb-8" id="service-areas">
            <h2 className="text-2xl font-bold text-foreground mb-4">{t.servicesServiceAreasTitle}</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <p className="text-foreground text-base mb-4">
                {t.servicesServiceAreasDesc}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/mobile-notary-apostille-los-angeles-ca" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{t.cityLosAngeles}</span>
                </Link>
                <Link href="/mobile-notary-apostille-pasadena-ca" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{t.cityPasadena}</span>
                </Link>
                <Link href="/mobile-notary-apostille-beverly-hills" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{t.cityBeverlyHills}</span>
                </Link>
                <Link href="/mobile-notary-apostille-santa-monica-ca" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{t.citySantaMonica}</span>
                </Link>
                <Link href="/mobile-notary-apostille-glendale" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{t.cityGlendale}</span>
                </Link>
                <Link href="/mobile-notary-apostille-culver-city-ca" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{t.cityCulverCity}</span>
                </Link>
                <Link href="/mobile-notary-apostille-west-hollywood" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{t.cityWestHollywood}</span>
                </Link>
                <Link href="/mobile-notary-apostille-arcadia" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{t.cityArcadia}</span>
                </Link>
                <Link href="/mobile-notary-apostille-alhambra" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{t.cityAlhambra}</span>
                </Link>
                <Link href="/mobile-notary-apostille-monterey-park" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{t.cityMontereyPark}</span>
                </Link>
                <Link href="/mobile-notary-apostille-south-pasadena" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{t.citySouthPasadena}</span>
                </Link>
              </div>
              <p className="text-foreground text-sm mt-4 italic">
                {t.servicesServiceAreasNote}
              </p>
            </div>
          </div>

          {/* How Mobile Notary Service Works Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">{t.servicesHowItWorksTitle}</h2>
            <div className="space-y-4">
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{t.servicesHowItWorksStep1}</h3>
                  </div>
                </div>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{t.servicesHowItWorksStep2}</h3>
                  </div>
                </div>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{t.servicesHowItWorksStep3}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Area Callout */}
          <div className="mb-8">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t.servicesServiceAreaCalloutTitle}</h3>
                  <p className="text-foreground text-base mb-2">
                    {t.servicesServiceAreaCalloutText1}
                  </p>
                  <Link href="/services" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">
                    {t.servicesServiceAreaCalloutText2}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* Call to Action */}
          <div className="text-center py-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">{t.servicesCallToActionTitle}</h2>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 max-w-3xl mx-auto">
              <p className="text-base text-foreground mb-4">
                {t.servicesCallToActionText}
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <a 
                  href="tel:+16265903560" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>626-590-3560</span>
                </a>
                <a 
                  href="mailto:Kathryn@KathrynTong.com" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  <span>Kathryn@KathrynTong.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

