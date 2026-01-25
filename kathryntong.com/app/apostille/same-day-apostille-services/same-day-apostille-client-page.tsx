"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { CheckCircle, Phone, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SameDayApostilleClientPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link 
            href="/apostille"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Apostille & Legalization Services</span>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Same-Day Apostille Services
            </h1>
            <p className="text-xl text-foreground/90 mb-4">
              For time-sensitive documents that qualify for expedited processing in California.
            </p>
          </div>

          {/* Overview Section */}
          <div className="mb-10">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <p className="text-foreground text-base leading-relaxed mb-4">
                When you need your documents apostilled urgently, our same-day apostille service provides expedited processing for eligible California-issued documents. This service is ideal for clients with tight deadlines or time-sensitive international requirements.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                Documents are processed and submitted to the California Secretary of State on the same day, with apostilles typically available within 24-48 hours for qualifying documents.
              </p>
            </div>
          </div>

          {/* What Documents Qualify Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Documents Qualify for Same-Day Processing?</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Notarized documents (powers of attorney, affidavits, contracts)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Certified copies of court documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Academic transcripts and diplomas (properly notarized)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Business and corporate documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Other documents that have been properly notarized or certified</span>
                </li>
              </ul>
              <p className="text-foreground text-sm mt-4 italic">
                Note: Government-issued documents (birth certificates, marriage certificates, etc.) typically require certified copies from the issuing agency and may have different processing times.
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 1: Document Review</h3>
                <p className="text-foreground text-base">
                  We review your documents to ensure they meet California Secretary of State requirements and are properly prepared for apostille processing.
                </p>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 2: Same-Day Submission</h3>
                <p className="text-foreground text-base">
                  Documents are submitted to the California Secretary of State on the same day, with expedited processing requested.
                </p>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 3: Fast Turnaround</h3>
                <p className="text-foreground text-base">
                  Apostilled documents are typically ready within 24-48 hours, depending on Secretary of State processing times.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Same-Day Apostille Service?</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Fast processing for urgent deadlines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Expert document review to prevent rejections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Direct submission to California Secretary of State</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Clear communication throughout the process</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Available for pickup or secure delivery</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-10">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-foreground text-base mb-4">
                Contact us to discuss your same-day apostille needs and confirm document eligibility.
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

          {/* Final CTA */}
          <div className="bg-white py-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">Need Help?</h2>
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

