"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { Phone, Mail, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/lib/use-translations"

export default function BeverlyHillsCityPageClient() {
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
                  Beverly Hills Mobile Notary & Apostille Services
                </h1>
                
                <div className="space-y-3 mb-4">
                  <p className="text-foreground text-base leading-relaxed">
                    Kathryn's Mobile Notary & Apostille provides professional mobile notary and apostille services in Beverly Hills. We serve individuals, businesses, and students needing notarization, same-day apostilles, mail-in apostille services, or international document legalization—all at your location for convenience.
                  </p>
                </div>

                {/* Areas We Serve Section */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Areas We Serve in Beverly Hills
                  </h2>
                  <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-base">Wilshire Corridor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-base">Beverly Hills Flats</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-base">Trousdale Estates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-base">Holmby Hills (nearby)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-base">Nearby Los Angeles neighborhoods</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/cities/beverly-hills.jpg"
                  alt="Beverly Hills with mobile notary services"
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
                  <span className="text-foreground text-base">International Apostille & Legalization (China, Taiwan, Hong Kong, Mexico, South Korea, Philippines)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">General Mobile Notary Services</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Frequently Asked Questions – Beverly Hills Apostille & Notary
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Do you provide mobile notary services in Beverly Hills?
                </h3>
                <p className="text-foreground text-base">
                  A: Yes. Mobile notary services are available throughout Beverly Hills by appointment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Can business and corporate documents be apostilled?
                </h3>
                <p className="text-foreground text-base">
                  A: Yes. We assist with apostille services for business, corporate, and legal documents used internationally.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Is mail-in apostille service available for Beverly Hills clients?
                </h3>
                <p className="text-foreground text-base">
                  A: Yes. Mail-in apostille processing is available nationwide and may be suitable depending on document type.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Do I need to visit an office in Beverly Hills?
                </h3>
                <p className="text-foreground text-base">
                  A: No. Services are provided by appointment, either via mobile service or mail-in processing.
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
              Mobile Service Disclaimer: Services available by appointment; no walk-in office.
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
