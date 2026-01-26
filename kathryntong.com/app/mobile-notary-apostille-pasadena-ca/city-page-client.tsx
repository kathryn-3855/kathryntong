"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { Phone, Mail, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/lib/use-translations"

export default function PasadenaCityPageClient() {
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
                  Pasadena Mobile Notary & Apostille Services
                </h1>
                
                <div className="space-y-4 mb-6">
                  <p className="text-foreground text-base leading-relaxed">
                    Kathryn's Mobile Notary & Apostille offers mobile notary and apostille services throughout Pasadena, including residential and business locations.
                  </p>
                </div>

                {/* Neighborhoods Served Section */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Neighborhoods Served
                  </h2>
                  <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
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
              <div className="relative h-96 rounded-lg overflow-hidden">
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
              Mobile Service Disclaimer: Appointment-based; no walk-in office.
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
