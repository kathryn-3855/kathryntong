"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { Phone, Mail, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "@/lib/use-translations"

interface CityPageProps {
  cityName: string
  cityState: string
  description: string
  imagePath: string
  imageAlt: string
  services: string[]
  benefits: string[]
  surroundingAreas?: string[]
  popularSectors?: string[]
}

export default function CityPage({ 
  cityName, 
  cityState, 
  description, 
  imagePath, 
  imageAlt,
  services,
  benefits,
  surroundingAreas = [],
  popularSectors = []
}: CityPageProps) {
  const t = useTranslations()
  
  // Check if this is Los Angeles page
  const isLosAngeles = cityName === "Los Angeles" || cityName === t.cityLosAngeles
  
  if (isLosAngeles) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Los Angeles Mobile Notary & Apostille Services
                  </h1>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-foreground text-base leading-relaxed">
                      Kathryn's Mobile Notary & Apostille provides professional mobile notary and apostille services throughout Los Angeles. We specialize in serving individuals, families, businesses, and students who need documents notarized or apostilled for local or international use—without leaving your home or office.
                    </p>
                    <p className="text-foreground text-base leading-relaxed">
                      Our mobile service ensures convenience, accuracy, and fast turnaround, whether you need same-day notarization, mail-in apostille processing, or international document legalization.
                    </p>
                  </div>

                  {/* Areas We Serve Section */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Areas We Serve in Los Angeles
                    </h2>
                    <p className="text-foreground text-base mb-4">
                      We provide mobile notary and apostille services in neighborhoods and communities across Los Angeles, including:
                    </p>
                    <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-base">Downtown Los Angeles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-base">Hollywood</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-base">West Los Angeles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-base">Beverly Hills</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-base">Century City</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-base">Koreatown</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-base">Chinatown</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-base">East Los Angeles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-base">Silver Lake</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-base">Pasadena (nearby)</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-foreground text-sm mt-4 italic">
                      If your neighborhood is not listed, please contact us—we travel throughout Los Angeles County.
                    </p>
                  </div>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={imagePath}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Los Angeles Mobile Notary & Apostille Services
              </h2>
              <p className="text-foreground text-base mb-4">
                We handle a wide range of notarization and apostille services:
              </p>
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <div>
                      <span className="text-foreground text-base font-semibold">Same-Day Apostille</span>
                      <span className="text-foreground text-base"> – expedited apostille processing for eligible documents</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <div>
                      <span className="text-foreground text-base font-semibold">Mail-In Apostille Services</span>
                      <span className="text-foreground text-base"> – convenient submission and return for clients nationwide</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <div>
                      <span className="text-foreground text-base font-semibold">International Apostille & Legalization</span>
                      <span className="text-foreground text-base"> – China, Taiwan, Hong Kong, Mexico, South Korea, Philippines, and other countries</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <div>
                      <span className="text-foreground text-base font-semibold">General Mobile Notary Services</span>
                      <span className="text-foreground text-base"> – powers of attorney, affidavits, contracts, corporate documents, and more</span>
                    </div>
                  </li>
                </ul>
                <p className="text-foreground text-sm mt-4">
                  Each document is carefully reviewed to prevent errors and ensure compliance with U.S. and destination country requirements.
                </p>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Why Choose Kathryn's Mobile Notary & Apostille in Los Angeles
              </h2>
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-base">Certified Apostille Specialist in California</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-base">Experience with both Hague and non-Hague countries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-base">Mobile & mail-in services for maximum convenience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-base">Expertise in immigration, business, academic, and legal documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-base">Clear communication to prevent costly mistakes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Kathryn in Los Angeles
              </h2>
              <p className="text-foreground text-base mb-4">
                For questions or to schedule a mobile appointment:
              </p>
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-base">
                      Phone / Text: <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">626-590-3560</a>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-base">
                      Email: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground text-base font-semibold">WeChat:</span>
                    <span className="text-foreground text-base">USANotaryApostille</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground text-base font-semibold">Business Hours:</span>
                    <span className="text-foreground text-base">Monday – Friday: [Your Hours]</span>
                  </div>
                  <p className="text-foreground text-sm mt-2">
                    Weekend & after-hours service available by appointment
                  </p>
                </div>
              </div>
              <p className="text-foreground text-sm mt-4 italic">
                Mobile Service Disclaimer: Services are provided by appointment only; we do not maintain a public walk-in office.
              </p>
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
  
  // Default template for other cities
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  We provide Mobile Notary + Apostille Services in {cityName}
                  {surroundingAreas.length > 0 && (
                    <span className="font-normal text-xl"> and surrounding areas of {surroundingAreas.join(", ")}</span>
                  )}
                </h1>
                
                {/* Why Choose Section */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    {t.cityWhyChoose.replace('{cityName}', cityName)}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-foreground text-sm leading-relaxed">
                          <strong>Value-Added Service:</strong> We specialized in working with Lawyers, Corporate Executives, Small Businesses, and High-Profile individuals, handling complicated local & international contracts, agreements & sensitive estate documents etc, ensuring absolute discretion, privacy and confidentiality.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-foreground text-sm leading-relaxed">
                          <strong>Convenience – We travel to you!</strong> With our mobile notary services, we ensure that your firm and clients can conduct businesses at any time, pace and any locations, which will significantly increase productivity.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-foreground text-sm leading-relaxed">
                          <strong>Reliable Partner:</strong> We serve as a reliable partner to your business and will certainly show up at your doorstep with prior scheduling. Will also answer client's phone calls, texts and emails 7 days a week. Notarized and Apostilled documents can be expedited and ready within 24 hours or same day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Section */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Services:</h2>
                  <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground text-sm">Mobile Notary at your Location, 7 Days a week</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground text-sm">Personal, Business and Education Documents Notary</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground text-sm">Estate Documents Notary (Trust/Will/Deed/Advance Healthcare Directives etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground text-sm">Business, Personal, Education and Federal Documents Apostille (e.g. FBI Background Check) for International Use (All 50 States)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground text-sm">Embassy Legalization (For Non-Hague Countries)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground text-sm">Same-Day and Expedited Services available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={imagePath}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Popular Sectors Served Section */}
          {popularSectors.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-bold text-foreground mb-4">{t.cityPagePopularSectors}:</h2>
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
                <ul className="space-y-2">
                  {popularSectors.map((sector, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground text-sm">{sector}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

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
