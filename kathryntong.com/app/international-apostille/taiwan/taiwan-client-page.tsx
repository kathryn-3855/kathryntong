"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react"
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
              Apostille Services for Taiwan
            </h1>
          </div>

          {/* Taiwan Document Authentication Overview Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Taiwan Document Authentication Overview
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2">
                  <span className="text-foreground text-base font-semibold">Hague Status:</span>
                  <span className="text-foreground text-base">❌ Non-Hague</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-foreground text-base font-semibold">Typical Process:</span>
                </div>
              </div>
              <ul className="space-y-1.5 mb-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">State authentication or federal authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Additional verification depending on document type and destination use</span>
                </li>
              </ul>
              <p className="text-foreground text-base leading-relaxed">
                Taiwan requirements vary significantly by document category.
              </p>
            </div>
          </div>

          {/* Common Documents Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Common Documents Used in Taiwan
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Birth and marriage certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Police clearance letters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Power of Attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Academic records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Immigration and residency documents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mail-In Processing Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Mail-In Processing Available
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Most Taiwan-bound documents qualify for mail-in processing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/apostille"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  👉 Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/apostille/mail-in-apostille-services"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  👉 Mail-In Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Notes
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Some documents require prior notarization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Translations may be required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Processing time varies</span>
                </li>
              </ul>
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
                  <span>(626) 590-3560</span>
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
              Call or text <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">(626) 590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

