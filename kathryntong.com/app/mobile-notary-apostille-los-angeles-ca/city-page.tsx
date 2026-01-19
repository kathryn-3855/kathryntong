"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
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
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
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
            <h2 className="text-lg lg:text-xl font-bold mb-2 text-foreground">{t.readyToStart}</h2>
            <p className="text-sm text-foreground/90">
              Call or Text <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">(626) 590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

