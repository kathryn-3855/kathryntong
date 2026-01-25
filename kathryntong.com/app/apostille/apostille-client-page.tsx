"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ApostilleClientPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              California Apostille & Document Legalization Services
            </h1>
            <p className="text-lg text-foreground/90 mb-3">
              Professional apostille and document legalization services for California-issued documents, handled accurately and efficiently for domestic and international use.
            </p>
            <p className="text-base text-primary font-semibold">
              Certified Apostille Specialist • Same-Day & Mail-In Options Available
            </p>
          </div>

          {/* What is an Apostille Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">WHAT IS AN APOSTILLE?</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <p className="text-foreground text-base leading-relaxed mb-3">
                An apostille is a certification issued by the California Secretary of State that authenticates the signature and seal on a public document for use in another country that is a member of the Hague Apostille Convention.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                If the destination country is not a Hague member, the document must go through an authentication and legalization process instead.
              </p>
            </div>
          </div>

          {/* Key Reasons to Use an Apostille Specialist Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">Key Reasons to Use an Apostille Specialist:</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">Expertise & Efficiency:</span>
                    <span className="text-foreground text-base"> We know the exact requirements of different countries and government agencies, preventing errors and delays.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">Stress Reduction:</span>
                    <span className="text-foreground text-base"> We handle running around, form-filling, and submission, saving you significant time and frustration.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">Risk Mitigation:</span>
                    <span className="text-foreground text-base"> We ensure documents are formatted correctly and meet legal standards, reducing the chance of rejection by foreign authorities.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">Handles Various Documents:</span>
                    <span className="text-foreground text-base"> We specialize in personal (birth/marriage certs, diplomas), educational, and business (contracts, incorporation) documents.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <div>
                    <span className="text-foreground text-base font-semibold">Follow up on the entire process from beginning to end,</span>
                    <span className="text-foreground text-base"> making sure that your documents are ready within the specified timeframe.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Common Documents Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">COMMON DOCUMENTS THAT REQUIRE AN APOSTILLE</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Birth, marriage, and death certificates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Powers of attorney</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">FBI background checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Court documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Academic transcripts and diplomas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Business and corporate documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Immigration-related documents</span>
                </li>
              </ul>
              <p className="text-foreground text-sm mt-4 italic">
                Each document type has specific preparation requirements. Errors often result in rejection or delays.
              </p>
            </div>
          </div>

          {/* Service Options Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">APOSTILLE & LEGALIZATION SERVICE OPTIONS</h2>
            <p className="text-foreground text-base mb-4">
              This page provides an overview of all available apostille workflows. Please select the option that best matches your situation.
            </p>
            <div className="space-y-3">
              <div className="border border-foreground/30 rounded-lg p-5 bg-foreground/10 hover:bg-foreground/15 transition">
                <h3 className="text-lg font-bold text-foreground mb-2">Same-Day Apostille Services</h3>
                <p className="text-foreground text-base mb-4">
                  For time-sensitive documents that qualify for expedited processing in California.
                </p>
                <Link 
                  href="/apostille/same-day-apostille-services"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Same-Day Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="border border-foreground/30 rounded-lg p-5 bg-foreground/10 hover:bg-foreground/15 transition">
                <h3 className="text-lg font-bold text-foreground mb-2">Mail-In Apostille Services</h3>
                <p className="text-foreground text-base mb-4">
                  For clients who are not able to appear in person, including out-of-state and international clients.
                </p>
                <Link 
                  href="/apostille/mail-in-apostille-services"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Mail-In Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="border border-foreground/30 rounded-lg p-5 bg-foreground/10 hover:bg-foreground/15 transition">
                <h3 className="text-lg font-bold text-foreground mb-2">Authentication & Legalization (Non-Hague Countries)</h3>
                <p className="text-foreground text-base mb-4">
                  For documents destined for countries that do not accept apostilles.
                </p>
                <Link 
                  href="/apostille/authentication-legalization"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Authentication / Legalization <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* International Clients Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">INTERNATIONAL CLIENTS & OVERSEAS USE</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <p className="text-foreground text-base leading-relaxed mb-3">
                U.S. citizens and international clients located outside California or overseas may use secure mail-in apostille services. Documents are reviewed for accuracy before submission to prevent rejection by the Secretary of State or foreign authorities.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                Country-specific requirements vary. Please refer to the International Apostille Services section for detailed guidance.
              </p>
            </div>
          </div>

          {/* Why Work With Us Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">WHY WORK WITH KATHRYN'S MOBILE NOTARY & APOSTILLE</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Certified Apostille Specialist (California)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Accuracy-first process to prevent costly rejections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Experience with international document requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Same-day, mail-in, and international workflows available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Clear communication throughout the process</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">CALL TO ACTION</h2>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-5">
              <p className="text-foreground text-base mb-3">
                Before submitting documents, confirm apostille eligibility and destination country requirements.
              </p>
              <p className="text-foreground text-base font-semibold mb-3">
                Call, text, or email to get started.
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

          {/* CTA Section */}
          <div className="bg-white py-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">Ready to Get Started?</h2>
            <p className="text-base lg:text-lg text-foreground/90">
              Call or Text <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">(626) 590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
