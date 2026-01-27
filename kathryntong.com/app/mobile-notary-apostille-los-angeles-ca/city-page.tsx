"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import Breadcrumb from "@/components/breadcrumb"
import { Phone, Mail, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
        <main className="py-6 md:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/services" },
              { label: "Los Angeles", href: "/mobile-notary-apostille-los-angeles-ca" }
            ]} />
            {/* Hero Section */}
            <div className="mb-6">
              <div className="grid md:grid-cols-2 gap-6 items-start">
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
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      {t.cityPageLAAreasWeServe}
                    </h2>
                    <p className="text-foreground text-base mb-4">
                      {t.cityPageLAAreasDesc}
                    </p>
                    <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
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
                <div className="relative h-80 rounded-lg overflow-hidden">
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
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t.cityPageServicesTitle.replace('{cityName}', cityName)}
              </h2>
              <p className="text-foreground text-base mb-4">
                {t.cityPageServicesDesc}
              </p>
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
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
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t.cityPageWhyChooseTitle.replace('{cityName}', cityName)}
              </h2>
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
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

            {/* International Services Paragraph */}
            <div className="mb-6">
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
                <p className="text-foreground text-base leading-relaxed">
                  In addition to local services, we also assist clients with <Link href="/international-apostille" className="text-primary hover:text-primary/80 font-semibold underline">international apostille and document authentication services</Link> for documents used in <Link href="/international-apostille/china" className="text-primary hover:text-primary/80 font-semibold underline">China</Link>, <Link href="/international-apostille/taiwan" className="text-primary hover:text-primary/80 font-semibold underline">Taiwan</Link>, <Link href="/international-apostille/hong-kong" className="text-primary hover:text-primary/80 font-semibold underline">Hong Kong</Link>, <Link href="/international-apostille/mexico" className="text-primary hover:text-primary/80 font-semibold underline">Mexico</Link>, <Link href="/international-apostille/philippines" className="text-primary hover:text-primary/80 font-semibold underline">the Philippines</Link>, <Link href="/international-apostille/south-korea" className="text-primary hover:text-primary/80 font-semibold underline">South Korea</Link>, <Link href="/international-apostille/japan" className="text-primary hover:text-primary/80 font-semibold underline">Japan</Link>, and more. Our experience includes preparing U.S. documents for international use across multiple regions, including Asia and the Middle East, with country-specific requirements carefully followed.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Frequently Asked Questions – Los Angeles Mobile Notary & Apostille
              </h2>
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Q: Do you provide mobile notary services throughout Los Angeles?
                  </h3>
                  <p className="text-foreground text-base">
                    A: Yes. Mobile notary services are available across Los Angeles by appointment, including residential, business, and institutional locations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Q: Can I obtain an apostille for documents issued outside Los Angeles County?
                  </h3>
                  <p className="text-foreground text-base">
                    A: Yes. Apostille services are based on the issuing authority, not the city. California-issued documents from any county may be eligible.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Q: Do you offer same-day apostille services in Los Angeles?
                  </h3>
                  <p className="text-foreground text-base">
                    A: Same-day apostille may be available for eligible California documents, subject to document type and submission timing.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Q: Are international apostille services available for Los Angeles clients?
                  </h3>
                  <p className="text-foreground text-base">
                    A: Yes. We assist with apostille and document authentication for Hague and non-Hague countries.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Q: How quickly can I get an apostille completed in Los Angeles County?
                  </h3>
                  <p className="text-foreground text-base">
                    A: Processing time depends on the document type, issuing authority, and destination country. Same-day and expedited apostille services may be available for certain California documents, while mail-in processing is commonly used for federal and international requests.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Q: Do you handle apostille and document authentication for countries outside the Hague Convention?
                  </h3>
                  <p className="text-foreground text-base">
                    A: Yes. In addition to Hague Apostille countries, we assist with document authentication for non-Hague destinations, including Taiwan and other regions that require additional certification steps instead of a Hague Apostille.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t.cityPageContactTitle.replace('{cityName}', cityName)}
              </h2>
              <p className="text-foreground text-base mb-4">
                {t.cityPageContactDesc}
              </p>
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
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
          {/* Breadcrumb */}
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/services" },
            { label: cityName }
          ]} />
          {/* Hero Section */}
          <div className="mb-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
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
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      {t.cityPageAreasWeServe.replace('{cityName}', cityName)}
                    </h2>
                    <p className="text-foreground text-base mb-4">
                      {t.cityPageAreasWeServeDesc.replace('{cityName}', cityName)}
                    </p>
                    <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
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
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t.cityPageServicesTitle.replace('{cityName}', cityName)}
            </h2>
            <p className="text-foreground text-base mb-4">
              {t.cityPageServicesDesc}
            </p>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
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

          {/* International Services Paragraph */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <p className="text-foreground text-base leading-relaxed">
                In addition to local services, we also assist clients with <Link href="/international-apostille" className="text-primary hover:text-primary/80 font-semibold underline">international apostille and document authentication services</Link> for documents used in <Link href="/international-apostille/china" className="text-primary hover:text-primary/80 font-semibold underline">China</Link>, <Link href="/international-apostille/taiwan" className="text-primary hover:text-primary/80 font-semibold underline">Taiwan</Link>, <Link href="/international-apostille/hong-kong" className="text-primary hover:text-primary/80 font-semibold underline">Hong Kong</Link>, <Link href="/international-apostille/mexico" className="text-primary hover:text-primary/80 font-semibold underline">Mexico</Link>, <Link href="/international-apostille/philippines" className="text-primary hover:text-primary/80 font-semibold underline">the Philippines</Link>, <Link href="/international-apostille/south-korea" className="text-primary hover:text-primary/80 font-semibold underline">South Korea</Link>, <Link href="/international-apostille/japan" className="text-primary hover:text-primary/80 font-semibold underline">Japan</Link>, and more. Our experience includes preparing U.S. documents for international use across multiple regions, including Asia and the Middle East, with country-specific requirements carefully followed.
              </p>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t.cityPageWhyChooseTitle.replace('{cityName}', cityName)}
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
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

          {/* FAQ Section - Universal FAQs added at end */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: How quickly can I get an apostille completed in Los Angeles County?
                </h3>
                <p className="text-foreground text-base">
                  A: Processing time depends on the document type, issuing authority, and destination country. Same-day and expedited apostille services may be available for certain California documents, while mail-in processing is commonly used for federal and international requests.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Do you handle apostille and document authentication for countries outside the Hague Convention?
                </h3>
                <p className="text-foreground text-base">
                  A: Yes. In addition to Hague Apostille countries, we assist with document authentication for non-Hague destinations, including Taiwan and other regions that require additional certification steps instead of a Hague Apostille.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t.cityPageContactTitle.replace('{cityName}', cityName)}
            </h2>
            <p className="text-foreground text-base mb-4">
              {t.cityPageContactDesc}
            </p>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
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
