"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function JapanApostilleClientPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Japan Apostille Services – U.S. Document Apostille for Use in Japan
            </h1>
          </div>

          {/* Introduction Section */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Japan is a member of the Hague Apostille Convention and accepts properly issued Hague Apostilles for qualifying U.S. documents. A Hague Apostille certifies the authenticity of a document so it can be recognized by authorities in Japan without additional embassy or consular legalization.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                Kathryn's Mobile Notary & Apostille assists clients with preparing U.S. documents for use in Japan by ensuring the correct certification process is followed based on the document type and issuing authority.
              </p>
            </div>
          </div>

          {/* Common Documents Used in Japan Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Common Documents Used in Japan
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Birth certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Marriage certificates</span>
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
                  <span className="text-foreground text-base">Power of attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Academic records and diplomas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Corporate and business documents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Important Notes for Japan Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Important Notes for Japan
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Documents must be apostilled by the appropriate issuing authority (state or federal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Some Japanese institutions may require certified Japanese translations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Acceptance of apostilled documents is determined by the receiving authority in Japan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mail-In Apostille Services Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Mail-In Apostille Services
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed">
                Most Japan apostille requests qualify for our <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:text-primary/80 font-semibold underline">Mail-In Apostille Services</Link>, which are available nationwide for clients submitting documents from anywhere in the United States or abroad.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Frequently Asked Questions – Japan Apostille
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Can I use a U.S. birth certificate in Japan after an apostille?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Yes. Japan accepts Hague Apostilles for U.S. birth certificates when the apostille is properly issued by the appropriate authority.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Does Japan require embassy or consular legalization after an apostille?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: No. As a Hague Convention member, Japan does not require embassy or consular legalization once a valid apostille is attached.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Do documents need to be translated into Japanese?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Some Japanese institutions require certified Japanese translations depending on the document type and purpose of use.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Can I submit my documents by mail from outside California?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Yes. Mail-in apostille service is available nationwide and is commonly used for documents intended for use in Japan.
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
                For more information about <Link href="/international-apostille" className="text-primary hover:text-primary/80 font-semibold underline">international apostille services</Link>, <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:text-primary/80 font-semibold underline">mail-in apostille for Japan</Link>, or local services, visit:
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
                  href="/mobile-notary-apostille-los-angeles-ca"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Los Angeles Mobile Notary & Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/mobile-notary-apostille-monterey-park"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Monterey Park Mobile Notary & Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Language Disclaimer */}
          <div className="mb-6">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <p className="text-foreground text-sm italic text-foreground/80">
                This page is provided in English. Certified Japanese translations may be required by authorities in Japan. Acceptance is determined by the receiving institution.
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
                Contact us today for expert Japan apostille services.
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
