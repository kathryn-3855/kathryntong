"use client"
import { CheckCircle, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"

export default function AboutClientPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <div className="relative h-52 md:h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/kathryn.webp" alt="Kathryn's professional portrait" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">
                Kathryn's Mobile Notary & Apostille Services
              </h1>
              <p className="text-base text-foreground mb-3 leading-relaxed">
                Certified Apostille Specialist providing accurate, mobile notary and California apostille services for individuals, businesses, and international clients.
              </p>
              <p className="text-base text-foreground leading-relaxed">
                With a focus on document accuracy and international compliance, Kathryn helps clients avoid costly rejections, delays, and repeat submissions—especially for apostille and overseas use.
              </p>
            </div>
          </div>

          {/* Who I Serve Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Who I Serve</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-base text-foreground mb-3">
                Kathryn's Mobile Notary & Apostille works with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Immigration attorneys and law firms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">International clients and U.S. citizens living abroad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">California residents and businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Families handling cross-border personal and legal matters</span>
                </li>
              </ul>
              <p className="text-base text-foreground mt-3">
                Whether documents are needed locally, across the U.S., or internationally, each request is handled with precision and clear communication.
              </p>
            </div>
          </div>

          {/* Why Clients Choose Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Clients Choose Kathryn's Mobile Notary & Apostille</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Certified Apostille Specialist (California)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Accuracy-first process to prevent document rejection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Mobile notary services at your home, office, or agreed location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Same-day and mail-in apostille options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Experience with international document requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Trusted by domestic and overseas clients</span>
                </li>
              </ul>
              <p className="text-base text-foreground mt-3 italic">
                Unlike generic notary listings, services are structured around compliance—not speed alone.
              </p>
            </div>
          </div>

          {/* Languages & International Clients Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Languages & International Clients</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-base text-foreground leading-relaxed">
                All services are provided in English.
              </p>
              <p className="text-base text-foreground leading-relaxed mt-3">
                Chinese-language informational pages are available for clarity only and do not constitute document translation or interpretation services.
              </p>
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* Call to Action */}
          <div className="text-center py-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">Call to Action</h2>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 max-w-3xl mx-auto">
              <p className="text-base text-foreground mb-3">
                Before preparing or submitting documents, confirm your requirements.
              </p>
              <p className="text-base text-foreground font-semibold mb-3">
                Call, text, or email to discuss your document and destination country.
              </p>
              <p className="text-base text-foreground mb-3">
                We're open 7 Days per Week, from 8:30 am to 8:30 pm.
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-center">
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
        </div>
      </main>

      <Footer />
    </div>
  )
}
