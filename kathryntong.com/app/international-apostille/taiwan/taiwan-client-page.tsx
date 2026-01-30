"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TaiwanApostilleClientPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Taiwan Document Authentication – U.S. Document Legalization
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-4">
              Authentication of U.S. Documents for Use in Taiwan
            </h2>
          </div>

          {/* Core Page Content */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Kathryn's Mobile Notary & Apostille provides <Link href="/apostille" className="text-primary hover:text-primary/80 font-semibold underline">document authentication services for documents used in Taiwan</Link>, including personal, educational, and business documents. Services are available by appointment and through <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:text-primary/80 font-semibold underline">mail-in document authentication processing</Link> for clients located anywhere in the United States or abroad.
              </p>
            </div>
          </div>

          {/* Taiwan Document Authentication Requirements Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Taiwan Document Authentication Requirements
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Taiwan is not a member of the Hague Apostille Convention. As a result, U.S. documents intended for use in Taiwan do not receive a Hague Apostille and instead require document authentication.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-3">
                Authentication requirements typically include:
              </p>
              <ul className="space-y-1.5 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Certification by the appropriate U.S. issuing authority</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Authentication by the U.S. Department of State (for federal documents)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Additional verification or acceptance by a Taiwan Economic and Cultural Office (TECO), depending on document type and receiving authority</span>
                </li>
              </ul>
              <p className="text-foreground text-base leading-relaxed mb-3">
                Common documents authenticated for use in Taiwan include:
              </p>
              <ul className="space-y-1.5 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">U.S. birth and marriage certificates</span>
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
                  <span className="text-foreground text-base">Educational records and diplomas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Business and corporate documents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Important Taiwan-Specific Considerations Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Important Taiwan-Specific Considerations
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Receiving authorities in Taiwan may require:
              </p>
              <ul className="space-y-1.5 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Certified Chinese translations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Specific notarization language</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Recent issuance dates for civil records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">TECO-specific submission formats</span>
                </li>
              </ul>
              <p className="text-foreground text-base leading-relaxed">
                Acceptance requirements are determined by the requesting institution or authority in Taiwan.
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
                <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:text-primary/80 font-semibold underline">Mail-in document authentication service</Link> is available for Taiwan-bound documents. Expedited processing may be available depending on document type and issuing authority.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-3">
                For related services, please visit:
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/apostille"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Apostille & Authentication Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/apostille/mail-in-apostille-services"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Mail-In Apostille & Authentication <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/international-apostille"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  International Document Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Frequently Asked Questions – Taiwan Document Authentication
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Does Taiwan accept Hague Apostilles?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: No. Taiwan is not a member of the Hague Apostille Convention and does not accept Hague Apostilles.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: What type of certification is required for documents used in Taiwan?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: U.S. documents generally require document authentication and may require verification through the Taiwan Economic and Cultural Office (TECO).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Can I use a U.S. birth certificate in Taiwan after authentication?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Yes. A properly authenticated U.S. birth certificate is generally accepted, subject to receiving authority requirements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Are Chinese translations required for documents used in Taiwan?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Many authorities in Taiwan require certified Chinese translations. Requirements vary by institution.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Can Taiwan document authentication be completed by mail?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Yes. Mail-in authentication services are available nationwide for documents used in Taiwan.
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
                For more information about <Link href="/international-apostille" className="text-primary hover:text-primary/80 font-semibold underline">international apostille & authentication services</Link>, <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:text-primary/80 font-semibold underline">mail-in document authentication for Taiwan</Link>, or local services, visit:
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/international-apostille"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  International Apostille & Authentication Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/apostille/mail-in-apostille-services"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Mail-In Apostille & Authentication <ArrowRight className="w-4 h-4" />
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
                This page is provided in English. Certified Chinese translations and TECO review may be required. Acceptance is determined by the receiving authority in Taiwan.
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
                Contact us today for expert Taiwan document authentication services.
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
