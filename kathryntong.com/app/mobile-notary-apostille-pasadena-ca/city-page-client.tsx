"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import Breadcrumb from "@/components/breadcrumb"
import { Phone, Mail, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/lib/use-translations"

export default function PasadenaCityPageClient() {
  const t = useTranslations()
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/services" },
            { label: "Pasadena" }
          ]} />
          {/* Hero Section */}
          <div className="mb-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Pasadena Mobile Notary & Apostille Services
                </h1>
                
                <div className="space-y-3 mb-4">
                  <p className="text-foreground text-base leading-relaxed">
                    Kathryn's Mobile Notary & Apostille offers mobile notary and apostille services throughout Pasadena, including residential and business locations.
                  </p>
                </div>

                {/* Neighborhoods Served Section */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Neighborhoods Served
                  </h2>
                  <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-base">Old Pasadena</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-base">Hastings Ranch</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-base">South Pasadena border areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-base">San Rafael Heights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-base">Northwest Pasadena</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/cities/pasadena.jpg"
                  alt="Pasadena with mobile notary services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Services Offered Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Services Offered
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Same-Day Apostille</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Mail-In Apostille Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">International Apostille & Legalization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Mobile Notary Services</span>
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
              Frequently Asked Questions – Pasadena Apostille & Notary
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Do you offer mobile notary services in Pasadena?
                </h3>
                <p className="text-foreground text-base">
                  A: Yes. Mobile notary services are available throughout Pasadena by appointment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Can you assist with apostilles for academic or educational documents?
                </h3>
                <p className="text-foreground text-base">
                  A: Yes. We frequently assist with apostilles for diplomas, transcripts, and education-related documents.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Are federal documents eligible for apostille services?
                </h3>
                <p className="text-foreground text-base">
                  A: Federal documents may require U.S. Department of State processing. Guidance is provided based on document type.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Do you handle international document use cases?
                </h3>
                <p className="text-foreground text-base">
                  A: Yes. Apostille and authentication services are available for documents used outside the United States.
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
              Contact
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-base">
                    Phone / Text: <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">(626) 590-3560</a>
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
              </div>
            </div>
            <p className="text-foreground text-sm mt-4 italic">
              Mobile Service Disclaimer: Appointment-based; no walk-in office.
            </p>
          </div>

          {/* Internal Links Section */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <h3 className="text-xl font-bold text-foreground mb-3">Internal Links</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/apostille" className="text-primary hover:underline font-semibold">
                  International Apostille Overview
                </Link>
                <span className="text-foreground">|</span>
                <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:underline font-semibold">
                  Mail-In Apostille Services
                </Link>
                <span className="text-foreground">|</span>
                <Link href="/mobile-notary-apostille-los-angeles-ca" className="text-primary hover:underline font-semibold">
                  Nearby cities
                </Link>
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
