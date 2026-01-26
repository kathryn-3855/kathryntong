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
      <main className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Glendale Mobile Notary & Apostille Services
                </h1>
                
                <div className="space-y-3 mb-3">
                  <p className="text-foreground text-base leading-relaxed">
                    Kathryn's Mobile Notary & Apostille provides professional <Link href="/mobile-notary-apostille-los-angeles-ca" className="text-primary hover:underline font-semibold">mobile notary and apostille services</Link> in Glendale, serving individuals, families, and businesses by appointment. Mobile service is available throughout Glendale for clients who need documents notarized accurately and efficiently.
                  </p>
                  <p className="text-foreground text-base leading-relaxed">
                    We specialize in California <Link href="/apostille" className="text-primary hover:underline font-semibold">apostille services</Link>, including same-day and <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:underline font-semibold">mail-in apostille processing</Link> for birth certificates, FBI background checks, powers of attorney, affidavits, and other official documents. Each request is reviewed carefully to ensure compliance before submission.
                  </p>
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
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
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Apostille Services for International Use
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Glendale clients frequently require documents for use outside the United States. We assist with <Link href="/international-apostille" className="text-primary hover:underline font-semibold">international apostille and document authentication services</Link> for both Hague and non-Hague countries, including China, Taiwan, Hong Kong, Mexico, South Korea, and the Philippines.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:underline font-semibold">Mail-in apostille service</Link> is available nationwide, making the process convenient even when in-person service is not required.
              </p>
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

          {/* Appointment-Based Mobile Service Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Appointment-Based Mobile Service
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <p className="text-foreground text-base leading-relaxed mb-3">
                All services are provided by appointment only. Mobile notary service is available throughout Glendale, and <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:underline font-semibold">mail-in options</Link> are available for apostille processing depending on document type and destination country.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                For additional service areas, visit our <Link href="/mobile-notary-apostille-los-angeles-ca" className="text-primary hover:underline font-semibold">Los Angeles Mobile Notary & Apostille Services</Link> page.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Frequently Asked Questions – Glendale Apostille & Notary
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Do you provide mobile notary services throughout Glendale?
                </h3>
                <p className="text-foreground text-base">
                  A: Yes. Mobile notary services are available throughout Glendale by appointment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Can I get an apostille without visiting an office?
                </h3>
                <p className="text-foreground text-base">
                  A: Yes. <Link href="/apostille" className="text-primary hover:underline font-semibold">Apostille services</Link> are available through mobile pickup or <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:underline font-semibold">mail-in processing</Link>, depending on the document.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Do you handle apostilles for documents used in other countries?
                </h3>
                <p className="text-foreground text-base">
                  A: Yes. We assist with <Link href="/international-apostille" className="text-primary hover:underline font-semibold">international apostille and document authentication</Link> for many countries, including China, Taiwan, and Hong Kong.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Is same-day apostille available for Glendale clients?
                </h3>
                <p className="text-foreground text-base">
                  A: Same-day apostille may be available for eligible California documents. Availability depends on document type and submission timing.
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
              Mobile Service Disclaimer: Appointment required.
            </p>
          </div>

          {/* Internal Links Section */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <h3 className="text-xl font-bold text-foreground mb-3">Internal Links</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/apostille" className="text-primary hover:underline font-semibold">
                  Apostille Services
                </Link>
                <span className="text-foreground">|</span>
                <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:underline font-semibold">
                  Mail-In Apostille Services
                </Link>
                <span className="text-foreground">|</span>
                <Link href="/international-apostille" className="text-primary hover:underline font-semibold">
                  International Apostille Services
                </Link>
                <span className="text-foreground">|</span>
                <Link href="/mobile-notary-apostille-los-angeles-ca" className="text-primary hover:underline font-semibold">
                  Los Angeles Mobile Notary & Apostille Services
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

