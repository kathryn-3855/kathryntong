"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail } from "lucide-react"

interface CityPageProps {
  cityName: string
  cityState: string
}

export default function CityPage({ cityName, cityState }: CityPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mobile Notary & Apostille Services in {cityName}, {cityState}
            </h1>
            <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
              Professional mobile notary and apostille services in {cityName}, {cityState}. Content will be added here.
            </p>
          </div>

          <div className="bg-foreground/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Get Started Today</h2>
            <p className="text-foreground/90 mb-6 max-w-2xl mx-auto">
              Contact us to schedule your mobile notary or apostille service in {cityName}, {cityState}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16265903560"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call: 626-590-3560
              </a>
              <a
                href="mailto:Kathryn@KathrynTong.com"
                className="inline-block border border-foreground text-foreground px-6 py-3 rounded-lg font-medium hover:bg-foreground/20 transition flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

