"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PhilippinesApostilleClientPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Apostille Services for the Philippines
            </h1>
          </div>

          {/* Introduction Section */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed">
                The Philippines is a Hague Apostille Convention member.
              </p>
            </div>
          </div>

          {/* Philippines Apostille Overview Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Philippines Apostille Overview
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-foreground text-base font-semibold">Hague Status:</span>
                  <span className="text-foreground text-base">✅ Hague Member</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-foreground text-base font-semibold">Required Process:</span>
                  <span className="text-foreground text-base">Apostille only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Common Documents Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Common Documents
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Birth and marriage certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Power of Attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Dual citizenship documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Immigration paperwork</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mail-In Apostille Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Mail-In Apostille Available
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
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

          {/* Call to Action Section */}
          <div className="mb-6">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Ready to Get Started?
              </h2>
              <p className="text-foreground text-base mb-2">
                Contact us today for expert Philippines apostille services.
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

