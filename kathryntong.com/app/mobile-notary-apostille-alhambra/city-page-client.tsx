"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import Breadcrumb from "@/components/breadcrumb"
import { Phone, Mail, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/lib/use-translations"

export default function AlhambraCityPageClient() {
  const t = useTranslations()
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/services" },
            { label: "Alhambra" }
          ]} />
          
          {/* Hero Section */}
          <div className="mb-4">
            <div className="grid md:grid-cols-2 gap-4 items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Alhambra Mobile Notary & Apostille Services
                </h1>
                
                <div className="space-y-2 mb-3">
                  <p className="text-foreground text-sm leading-relaxed">
                    Mobile Notary & Apostille Services in Alhambra, CA
                  </p>
                  <p className="text-foreground text-sm leading-relaxed">
                    Kathryn's Mobile Notary & Apostille provides professional mobile notary and apostille services to individuals, families, and businesses in Alhambra, California. All services are appointment-only, with mobile service available throughout Alhambra and nearby San Gabriel Valley cities.
                  </p>
                </div>
              </div>
              <div className="relative h-48 md:h-56 rounded-lg overflow-hidden">
                <Image
                  src="/images/cities/alhambra.jpg"
                  alt="Alhambra with mobile notary services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Apostille Services for Alhambra Residents Section */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Apostille Services for Alhambra Residents
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-sm leading-relaxed mb-2">
                If you need U.S. documents prepared for use overseas, our apostille services in Alhambra ensure your paperwork is processed correctly and efficiently according to destination-country requirements.
              </p>
              <p className="text-foreground text-sm leading-relaxed mb-2">
                We regularly assist Alhambra clients with apostilles for use in:
              </p>
              <ul className="space-y-1 mb-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">
                    <Link href="/international-apostille/china" className="text-primary hover:text-primary/80 font-semibold underline">China</Link> (Hague Apostille, effective 2023)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">
                    <Link href="/international-apostille/taiwan" className="text-primary hover:text-primary/80 font-semibold underline">Taiwan</Link> (non-Hague legalization)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">
                    <Link href="/international-apostille/hong-kong" className="text-primary hover:text-primary/80 font-semibold underline">Hong Kong</Link>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">
                    <Link href="/international-apostille/japan" className="text-primary hover:text-primary/80 font-semibold underline">Japan</Link>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">
                    <Link href="/international-apostille/south-korea" className="text-primary hover:text-primary/80 font-semibold underline">South Korea</Link>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">
                    <Link href="/international-apostille/mexico" className="text-primary hover:text-primary/80 font-semibold underline">Mexico</Link>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">
                    <Link href="/international-apostille/philippines" className="text-primary hover:text-primary/80 font-semibold underline">Philippines</Link>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">United Kingdom</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">And more international destinations</span>
                </li>
              </ul>
              <p className="text-foreground text-sm leading-relaxed mb-2">
                Common apostille document types include:
              </p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold text-sm">•</span>
                  <span className="text-foreground text-sm">Birth, marriage, and death certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold text-sm">•</span>
                  <span className="text-foreground text-sm">FBI background checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold text-sm">•</span>
                  <span className="text-foreground text-sm">Power of attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold text-sm">•</span>
                  <span className="text-foreground text-sm">Educational records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold text-sm">•</span>
                  <span className="text-foreground text-sm">Business and corporate documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold text-sm">•</span>
                  <span className="text-foreground text-sm">Immigration-related paperwork</span>
                </li>
              </ul>
              <p className="text-foreground text-sm leading-relaxed mt-2">
                For country-specific requirements, visit our <Link href="/international-apostille" className="text-primary hover:text-primary/80 font-semibold underline">International Apostille Services</Link> page.
              </p>
            </div>
          </div>

          {/* Mobile Notary Services in Alhambra Section */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Mobile Notary Services in Alhambra
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-sm leading-relaxed mb-2">
                Our mobile notary services in Alhambra are designed for convenience and accuracy. We travel to your location for notarizations that require flexibility, privacy, or urgency.
              </p>
              <p className="text-foreground text-sm leading-relaxed mb-2">
                Mobile notary services include:
              </p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold text-sm">•</span>
                  <span className="text-foreground text-sm">Power of attorney notarization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold text-sm">•</span>
                  <span className="text-foreground text-sm">Affidavits and sworn statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold text-sm">•</span>
                  <span className="text-foreground text-sm">Trust and estate documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold text-sm">•</span>
                  <span className="text-foreground text-sm">Real estate and escrow documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 font-bold text-sm">•</span>
                  <span className="text-foreground text-sm">Immigration and international forms</span>
                </li>
              </ul>
              <p className="text-foreground text-sm leading-relaxed mt-2">
                All notarizations are performed in compliance with California notary law.
              </p>
            </div>
          </div>

          {/* Why Alhambra Clients Choose Us Section */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Why Alhambra Clients Choose Us
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Apostille-focused specialization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Experience with international and immigration documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Familiarity with Chinese-speaking and multilingual clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Clear guidance on Hague vs. non-Hague countries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Mobile, appointment-only service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Trusted service throughout Los Angeles County</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Area Section */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Service Area
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-sm leading-relaxed mb-2">
                We provide mobile notary and apostille services throughout:
              </p>
              <ul className="space-y-1 mb-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Alhambra</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Monterey Park</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">San Gabriel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Pasadena</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">South Pasadena</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">Glendale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">
                    <Link href="/mobile-notary-apostille-los-angeles-ca" className="text-primary hover:text-primary/80 font-semibold underline">Los Angeles</Link>
                  </span>
                </li>
              </ul>
              <p className="text-foreground text-sm leading-relaxed">
                If you are unsure whether your location is covered, please contact us.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Contact – Alhambra Mobile Notary & Apostille
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">
                    Phone / Text: <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">626-590-3560</a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">
                    Email: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-foreground text-sm font-semibold">WeChat:</span>
                  <span className="text-foreground text-sm">USANotaryApostille</span>
                </div>
                <div className="mt-2">
                  <p className="text-foreground text-sm font-semibold mb-0.5">Business Hours:</p>
                  <p className="text-foreground text-sm">By appointment only</p>
                </div>
              </div>
            </div>
            <p className="text-foreground text-xs mt-2 italic">
              <strong>Disclaimer:</strong> Kathryn's Mobile Notary & Apostille provides mobile services by appointment and does not accept walk-ins.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Frequently Asked Questions – Alhambra Apostille Services
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4 space-y-2">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Q: Do I need an apostille for documents used outside the U.S.?
                </h3>
                <p className="text-foreground text-sm">
                  A: Yes. Most foreign countries require either an apostille or legalization before accepting U.S. documents.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Q: Can you help with China or Taiwan documents from Alhambra?
                </h3>
                <p className="text-foreground text-sm">
                  A: Yes. We handle both Hague apostilles for China and non-Hague legalization for Taiwan, including document review and guidance.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Q: Do you travel to homes and offices in Alhambra?
                </h3>
                <p className="text-foreground text-sm">
                  A: Yes. Mobile service is available throughout Alhambra by appointment.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Q: Can I mail in my documents instead?
                </h3>
                <p className="text-foreground text-sm">
                  A: Yes. Mail-in apostille service is available. Please contact us for instructions.
                </p>
              </div>
            </div>
          </div>

          {/* Internal Links Section */}
          <div className="mb-4">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-foreground mb-2">Internal Links</h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/international-apostille" className="text-primary hover:underline font-semibold">
                  International Apostille Services
                </Link>
                <span className="text-foreground">|</span>
                <Link href="/international-apostille/china" className="text-primary hover:underline font-semibold">
                  China Apostille
                </Link>
                <span className="text-foreground">|</span>
                <Link href="/international-apostille/taiwan" className="text-primary hover:underline font-semibold">
                  Taiwan Legalization
                </Link>
                <span className="text-foreground">|</span>
                <Link href="/international-apostille/japan" className="text-primary hover:underline font-semibold">
                  Japan Apostille
                </Link>
                <span className="text-foreground">|</span>
                <Link href="/mobile-notary-apostille-los-angeles-ca" className="text-primary hover:underline font-semibold">
                  Los Angeles
                </Link>
              </div>
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* CTA Section */}
          <div className="bg-white py-3 text-center">
            <h2 className="text-xl lg:text-2xl font-bold mb-2 text-foreground">{t.readyToStart}</h2>
            <p className="text-sm lg:text-base text-foreground/90">
              {t.callOrTextLabel} <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">626-590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

