"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/lib/use-translations"

export default function GlendaleCityPageClient() {
  const t = useTranslations()
  
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
                  Glendale Mobile Notary & Apostille Services
                </h1>
                
                <div className="space-y-4 mb-6">
                  <p className="text-foreground text-base leading-relaxed">
                    Kathryn's Mobile Notary & Apostille provides professional mobile notary and apostille services in Glendale, serving individuals, families, and businesses by appointment. Mobile service is available throughout Glendale for clients who need documents notarized accurately and efficiently.
                  </p>
                  <p className="text-foreground text-base leading-relaxed">
                    We specialize in California apostille services, including same-day and mail-in apostille processing for birth certificates, FBI background checks, powers of attorney, affidavits, and other official documents. Each request is reviewed carefully to ensure compliance before submission.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/cities/glendale.jpg"
                  alt="Glendale with mobile notary services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Apostille Services for International Use Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Apostille Services for International Use
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <p className="text-foreground text-base leading-relaxed mb-4">
                Glendale clients frequently require documents for use outside the United States. We assist with international apostille and document authentication services for both Hague and non-Hague countries, including China, Taiwan, Hong Kong, Mexico, South Korea, and the Philippines.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                Mail-in apostille service is available nationwide, making the process convenient even when in-person service is not required.
              </p>
            </div>
          </div>

          {/* Services Offered Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Services Offered
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
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

          {/* Appointment-Based Mobile Service Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Appointment-Based Mobile Service
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <p className="text-foreground text-base leading-relaxed mb-4">
                All services are provided by appointment only. Mobile notary service is available throughout Glendale, and mail-in options are available for apostille processing depending on document type and destination country.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                For additional service areas, visit our <Link href="/mobile-notary-apostille-los-angeles-ca" className="text-primary hover:underline font-semibold">Los Angeles Mobile Notary & Apostille Services</Link> page.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Contact
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
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
              Mobile Service Disclaimer: Appointment required.
            </p>
          </div>

          {/* Internal Links Section */}
          <div className="mb-8">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Internal Links</h3>
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

