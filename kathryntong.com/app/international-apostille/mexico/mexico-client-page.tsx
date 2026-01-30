"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function MexicoApostilleClientPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Mexico Apostille Services – U.S. Document Legalization
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-4">
              Apostille for U.S. Documents Used in Mexico
            </h2>
          </div>

          {/* Core Page Content */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Kathryn's Mobile Notary & Apostille provides <Link href="/apostille" className="text-primary hover:text-primary/80 font-semibold underline">apostille services for documents used in Mexico</Link>, including personal, educational, and business documents. Services are available by appointment and through <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:text-primary/80 font-semibold underline">mail-in apostille processing</Link> for clients located anywhere in the United States.
              </p>
            </div>
          </div>

          {/* Mexico Apostille Requirements Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Mexico Apostille Requirements
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Mexico is a member of the Hague Apostille Convention. U.S. documents intended for use in Mexico generally require a Hague Apostille, rather than consular legalization.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-3">
                Common documents apostilled for use in Mexico include:
              </p>
              <ul className="space-y-1.5 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">U.S. birth and marriage certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Divorce decrees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">FBI background checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Powers of attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Affidavits and sworn statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Business and corporate documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Educational records</span>
                </li>
              </ul>
              <p className="text-foreground text-base leading-relaxed">
                Apostilles are issued by the Secretary of State for state-issued documents or the U.S. Department of State for federal documents.
              </p>
            </div>
          </div>

          {/* Important Mexico-Specific Considerations Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Important Mexico-Specific Considerations
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Although Mexico recognizes Hague Apostilles, Mexican authorities often require additional steps, including:
              </p>
              <ul className="space-y-1.5 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Certified Spanish translations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Notarization requirements for certain documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Local authority-specific formatting</span>
                </li>
              </ul>
              <p className="text-foreground text-base leading-relaxed">
                Acceptance requirements are determined by the receiving authority in Mexico.
              </p>
            </div>
          </div>

          {/* Mail-In & Expedited Service Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Mail-In & Expedited Service
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:text-primary/80 font-semibold underline">Mail-in apostille service</Link> is available for documents intended for use in Mexico. Expedited processing may be available depending on document type and issuing authority.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-3">
                For related services, please visit:
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/apostille"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/apostille/mail-in-apostille-services"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Mail-In Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/international-apostille"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  International Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Frequently Asked Questions – Mexico Apostille
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Can I use a U.S. birth certificate in Mexico after an apostille?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Yes. Mexico recognizes Hague Apostilles. A properly apostilled U.S. birth certificate is generally accepted, subject to local authority requirements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Does Mexico require consular legalization or an apostille?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Mexico generally requires a Hague Apostille for eligible U.S. documents rather than consular legalization.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Are Spanish translations required for documents used in Mexico?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Many Mexican authorities require certified Spanish translations. Translation requirements vary by institution.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Can FBI background checks be apostilled for use in Mexico?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Yes. FBI background checks may be apostilled through the U.S. Department of State for use in Mexico.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Can I submit my Mexico apostille request by mail?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Yes. Mail-in apostille services are available nationwide for Mexico-bound documents.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Do you handle apostille and document authentication for countries outside the Hague Convention?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Yes. In addition to Hague Apostille countries, we assist with document authentication for non-Hague destinations, including Taiwan and other regions that require additional certification steps instead of a Hague Apostille.
                </p>
              </div>
            </div>
          </div>

          {/* Mail-In Loop Paragraph */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <p className="text-foreground text-base leading-relaxed">
                Most international apostille and document authentication requests qualify for our <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:text-primary/80 font-semibold underline">Mail-In Apostille Services</Link>, which are available nationwide for clients submitting documents from anywhere in the United States or abroad.
              </p>
            </div>
          </div>

          {/* Internal Linking Section */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                For more information about <Link href="/international-apostille" className="text-primary hover:text-primary/80 font-semibold underline">international apostille services</Link>, <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:text-primary/80 font-semibold underline">mail-in apostille for Mexico</Link>, or local services, visit:
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/international-apostille"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  International Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/apostille/mail-in-apostille-services"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Mail-In Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/mobile-notary-apostille-monterey-park"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Monterey Park Mobile Notary & Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/mobile-notary-apostille-los-angeles-ca"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Los Angeles Mobile Notary & Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Language Disclaimer */}
          <div className="mb-6">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <p className="text-foreground text-sm italic text-foreground/80">
                This page is provided in English. Certified Spanish translations may be required by authorities in Mexico. Acceptance is determined by the receiving institution.
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mb-6">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Ready to Get Started?
              </h2>
              <p className="text-foreground text-base mb-2">
                Contact us today for expert Mexico apostille services.
              </p>
              <p className="text-foreground text-base font-semibold mb-2">
                We're open 7 Days per Week, 8:30 am - 8:30 pm.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href="tel:+16265903560" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>626-590-3560</span>
                </a>
                <a 
                  href="mailto:Kathryn@KathrynTong.com" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  <span>Kathryn@KathrynTong.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* Final CTA Section */}
          <div className="bg-white py-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">Ready to Start?</h2>
            <p className="text-base lg:text-lg text-foreground/90">
              Call or text <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">626-590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
