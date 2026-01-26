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
                    {t.cityPageTitle.replace('{cityName}', cityName)} | Kathryn's
                  </h1>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-foreground text-base leading-relaxed">
                      {t.cityPageIntro1.replace('{cityName}', cityName)}
                    </p>
                    <p className="text-foreground text-base leading-relaxed">
                      {t.cityPageIntro2}
                    </p>
                  </div>

                  {/* Areas We Serve Section */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      {t.cityPageLAAreasWeServe}
                    </h2>
                    <p className="text-foreground text-base mb-4">
                      {t.cityPageLAAreasDesc}
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
                      {t.cityPageLATravelNote}
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
                {t.cityPageServicesTitle.replace('{cityName}', cityName)}
              </h2>
              <p className="text-foreground text-base mb-4">
                {t.cityPageServicesDesc}
              </p>
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <div>
                      <span className="text-foreground text-base font-semibold">{t.cityPageService1}</span>
                      <span className="text-foreground text-base">{t.cityPageService1Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <div>
                      <span className="text-foreground text-base font-semibold">{t.cityPageService2}</span>
                      <span className="text-foreground text-base">{t.cityPageService2Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <div>
                      <span className="text-foreground text-base font-semibold">{t.cityPageService3}</span>
                      <span className="text-foreground text-base">{t.cityPageService3Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <div>
                      <span className="text-foreground text-base font-semibold">{t.cityPageService4}</span>
                      <span className="text-foreground text-base">{t.cityPageService4Desc}</span>
                    </div>
                  </li>
                </ul>
                <p className="text-foreground text-sm mt-4">
                  {t.cityPageServicesNote}
                </p>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {t.cityPageWhyChooseTitle.replace('{cityName}', cityName)}
              </h2>
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-base">{t.cityPageWhyChoose1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-base">{t.cityPageWhyChoose2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-base">{t.cityPageWhyChoose3}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-base">{t.cityPageWhyChoose4}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-base">{t.cityPageWhyChoose5}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {t.cityPageContactTitle.replace('{cityName}', cityName)}
              </h2>
              <p className="text-foreground text-base mb-4">
                {t.cityPageContactDesc}
              </p>
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-base">
                      {t.cityPagePhoneText} <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">(626) 590-3560</a>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-base">
                      {t.cityPageEmail} <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground text-base font-semibold">{t.cityPageWeChat}</span>
                    <span className="text-foreground text-base">USANotaryApostille</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground text-base font-semibold">{t.cityPageBusinessHours}</span>
                    <span className="text-foreground text-base">{t.cityPageBusinessHoursValue}</span>
                  </div>
                  <p className="text-foreground text-sm mt-2">
                    {t.cityPageWeekendService}
                  </p>
                </div>
              </div>
              <p className="text-foreground text-sm mt-4 italic">
                {t.cityPageMobileDisclaimer}
              </p>
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
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t.cityPageTitle.replace('{cityName}', cityName)}
                </h1>
                
                <div className="space-y-4 mb-6">
                  <p className="text-foreground text-base leading-relaxed">
                    {t.cityPageIntro1.replace('{cityName}', cityName)}
                  </p>
                  <p className="text-foreground text-base leading-relaxed">
                    {t.cityPageIntro2}
                  </p>
                </div>

                {/* Areas We Serve Section */}
                {surroundingAreas.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      {t.cityPageAreasWeServe.replace('{cityName}', cityName)}
                    </h2>
                    <p className="text-foreground text-base mb-4">
                      {t.cityPageAreasWeServeDesc.replace('{cityName}', cityName)}
                    </p>
                    <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
                      <ul className="space-y-2">
                        {surroundingAreas.map((area, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground text-base">{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-foreground text-sm mt-4 italic">
                      {t.cityPageAreasNotListed}
                    </p>
                  </div>
                )}
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
              {t.cityPageServicesTitle.replace('{cityName}', cityName)}
            </h2>
            <p className="text-foreground text-base mb-4">
              {t.cityPageServicesDesc}
            </p>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">{t.cityPageService1}</span>
                    <span className="text-foreground text-base">{t.cityPageService1Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">{t.cityPageService2}</span>
                    <span className="text-foreground text-base">{t.cityPageService2Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">{t.cityPageService3}</span>
                    <span className="text-foreground text-base">{t.cityPageService3Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">{t.cityPageService4}</span>
                    <span className="text-foreground text-base">{t.cityPageService4Desc}</span>
                  </div>
                </li>
              </ul>
              <p className="text-foreground text-sm mt-4">
                {t.cityPageServicesNote}
              </p>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.cityPageWhyChooseTitle.replace('{cityName}', cityName)}
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.cityPageWhyChoose1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.cityPageWhyChoose2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.cityPageWhyChoose3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.cityPageWhyChoose4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">{t.cityPageWhyChoose5}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.cityPageContactTitle.replace('{cityName}', cityName)}
            </h2>
            <p className="text-foreground text-base mb-4">
              {t.cityPageContactDesc}
            </p>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-base">
                    {t.cityPagePhoneText} <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">(626) 590-3560</a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-base">
                    {t.cityPageEmail} <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-foreground text-base font-semibold">{t.cityPageWeChat}</span>
                  <span className="text-foreground text-base">USANotaryApostille</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-foreground text-base font-semibold">{t.cityPageBusinessHours}</span>
                  <span className="text-foreground text-base">{t.cityPageBusinessHoursValue}</span>
                </div>
                <p className="text-foreground text-sm mt-2">
                  {t.cityPageWeekendService}
                </p>
              </div>
            </div>
            <p className="text-foreground text-sm mt-4 italic">
              {t.cityPageMobileDisclaimer}
            </p>
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
