"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function UnitedKingdomApostilleClientPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              United Kingdom Apostille Services – U.S. Document Apostille for Use in the U.K.
            </h1>
          </div>

          {/* Introduction Section */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                The United Kingdom (England, Scotland, Wales, and Northern Ireland) is a member of the Hague Apostille Convention and accepts properly issued Hague Apostilles on qualifying U.S. documents. A Hague Apostille certifies the authenticity of a document so it can be recognized by authorities in the U.K. without additional embassy or consular legalization.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                Kathryn's Mobile Notary & Apostille assists clients with preparing U.S. documents for use in the United Kingdom by ensuring the correct certification process is followed based on the document type and issuing authority.
              </p>
            </div>
          </div>

          {/* Common Documents Used in the U.K. Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Common Documents Used in the U.K.
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Birth, marriage, and death certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Divorce decrees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Powers of attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Diplomas and academic records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Business & corporate documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">FBI background checks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Important Notes for the United Kingdom Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Important Notes for the United Kingdom
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Documents must be apostilled by the appropriate issuing authority (state for most documents; U.S. Department of State for federal documents)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">No embassy or consulate legalization is required for the U.K. after a valid Hague Apostille</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Some U.K. institutions may request certified translations depending on the document and purpose</span>
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
                Most U.K. apostille requests qualify for our <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:text-primary/80 font-semibold underline">Mail-In Apostille Services</Link>, available nationwide to clients submitting documents from anywhere in the U.S. or abroad.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Frequently Asked Questions – United Kingdom Apostille Services
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Do U.S. documents need an apostille for use in the United Kingdom?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  Yes. The United Kingdom is a member of the Hague Apostille Convention. U.S. documents must have a Hague Apostille to be legally recognized in England, Scotland, Wales, or Northern Ireland.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Is embassy or consulate legalization required for the U.K.?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  No. Once a document has a valid Hague Apostille, U.K. embassy or consular legalization is not required.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Where is the apostille issued for U.K.-bound documents?
                </h3>
                <p className="text-foreground text-base leading-relaxed mb-2">
                  It depends on the document type:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li className="text-foreground text-base">California-issued or California-notarized documents are apostilled by the California Secretary of State</li>
                  <li className="text-foreground text-base">Federal documents (such as FBI background checks) are apostilled by the U.S. Department of State</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What documents commonly require an apostille for the U.K.?
                </h3>
                <p className="text-foreground text-base leading-relaxed mb-2">
                  Common documents include:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li className="text-foreground text-base">Birth, marriage, and death certificates</li>
                  <li className="text-foreground text-base">Divorce decrees</li>
                  <li className="text-foreground text-base">Powers of attorney</li>
                  <li className="text-foreground text-base">Diplomas and academic records</li>
                  <li className="text-foreground text-base">Business and corporate documents</li>
                  <li className="text-foreground text-base">FBI background checks</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Do documents need to be notarized before apostille?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  Some documents must be notarized before apostille, while others (such as certified vital records) must not be notarized. Each document must be reviewed to ensure it meets apostille requirements before submission.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How long does it take to get an apostille for the U.K.?
                </h3>
                <p className="text-foreground text-base leading-relaxed mb-2">
                  Processing times vary depending on:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-2">
                  <li className="text-foreground text-base">Issuing authority (state or federal)</li>
                  <li className="text-foreground text-base">Service level (standard or expedited)</li>
                </ul>
                <p className="text-foreground text-base leading-relaxed">
                  Kathryn's Mobile Notary & Apostille offers regular and expedited options to meet time-sensitive needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Can I mail in my documents for U.K. apostille services?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  Yes. Most U.K. apostille requests qualify for mail-in apostille services, and clients nationwide may submit documents by mail.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Do U.K. authorities require certified translations?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  Some U.K. institutions may require certified English translations depending on the document and its intended use. Requirements vary by authority.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Can you help if my documents were issued outside California?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  Yes. Assistance is available for out-of-state and federal documents, depending on the issuing authority and document type.
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
                For more information about <Link href="/international-apostille" className="text-primary hover:text-primary/80 font-semibold underline">international apostille services</Link>, <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:text-primary/80 font-semibold underline">mail-in apostille for the United Kingdom</Link>, or local services, visit:
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
                This page is provided in English. Certified translations may be required by authorities in the United Kingdom. Acceptance is determined by the receiving institution.
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
                Contact Kathryn's Mobile Notary & Apostille today for expert apostille services for the United Kingdom.
              </p>
              <p className="text-foreground text-base font-semibold mb-2">
                We're open 7 days a week, 8:30 am – 8:30 pm.
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

