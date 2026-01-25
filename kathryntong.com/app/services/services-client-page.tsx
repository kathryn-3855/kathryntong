"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function ServicesClientPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mobile Notary Services in Los Angeles & Surrounding Areas
            </h1>
            <p className="text-lg text-foreground/90">
              Convenient, professional mobile notary services for individuals, families, and businesses - available by appointment at your location.
            </p>
          </div>

          {/* What Is a Mobile Notary Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Is a Mobile Notary?</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <p className="text-foreground text-base leading-relaxed">
                A mobile notary travels to your home, office, hospital, or other agreed location to notarize documents in person. This service is ideal when travel is difficult, time is limited, or documents are urgent.
              </p>
            </div>
          </div>

          {/* Mobile Notary Services Offered Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Mobile Notary Services Offered</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Acknowledgments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Jurats</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Power of Attorney documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Immigration-related documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Real estate and loan documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Business and corporate paperwork</span>
                </li>
              </ul>
              <p className="text-foreground text-base mt-4">
                Each appointment includes ID verification and proper notarial completion in accordance with California law.
              </p>
            </div>
          </div>

          {/* How Mobile Notary Service Works Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">How Mobile Notary Service Works</h2>
            <div className="space-y-4">
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Contact us via phone, text, or email</h3>
                  </div>
                </div>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Confirm document type and ID requirements</h3>
                  </div>
                </div>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Meet at your preferred location for notarization</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Area Callout */}
          <div className="mb-8">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Service Area</h3>
                  <p className="text-foreground text-base mb-2">
                    Mobile notary services are available throughout Los Angeles and surrounding areas.
                  </p>
                  <Link href="/contact" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">
                    👉 Visit the Service Areas page for full coverage details.
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* Call to Action */}
          <div className="text-center py-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">Call to Action</h2>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 max-w-3xl mx-auto">
              <p className="text-base text-foreground mb-4">
                Phone or text or email to schedule a mobile notary visit today.
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

