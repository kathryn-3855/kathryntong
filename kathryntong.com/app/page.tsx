"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white text-foreground py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-foreground">
              Professional Mobile Notary Services for Legal, Corporate, and Private Clients
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-3">
              Discreet, reliable, same-day notarization for law firms, businesses, and individuals who value precision and professionalism.
            </p>
            <p className="text-base text-foreground/70 mb-6">
              For professional inquiries, please call or text for priority scheduling.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              onClick={() => (window.location.href = "tel:626.590.3560")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call or Text: 626.590.3560
            </Button>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-6 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-5">
            <h2 className="text-xl font-bold text-foreground mb-2">STATEMENT</h2>
            <p className="text-base text-foreground/90 leading-relaxed mb-2">
              I provide mobile notary services exclusively for clients who require dependable, punctual, and confidential execution of important documents.
            </p>
            <p className="text-base text-foreground/90 leading-relaxed">
              My practice is focused on serving law firms, corporations, escrow professionals, healthcare facilities, and private clients who expect a higher standard of service.
            </p>
          </div>
        </div>
      </section>

      {/* Specialized Mobile Notary Services */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">SPECIALIZED MOBILE NOTARY SERVICES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-foreground mb-1">Law Firm & Legal Document Notarization</h3>
            </div>
            <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-foreground mb-1">Corporate & Business Transactions</h3>
            </div>
            <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-foreground mb-1">Escrow & Real Estate Documents</h3>
            </div>
            <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-foreground mb-1">Medical & Healthcare Facility Notary</h3>
            </div>
            <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-foreground mb-1">Trust & Estate Documents</h3>
            </div>
          </div>
          <p className="text-center text-foreground/80 text-base">
            Services are provided by appointment and tailored to professional needs, including same-day and after-hours availability.
          </p>
        </div>
      </section>

      {/* Call & Text Messages */}
      <section className="py-6 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-5 text-center">
            <p className="text-base text-foreground/90 leading-relaxed mb-4">
              Call & Text Messages are answered right away.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              onClick={() => (window.location.href = "tel:626.590.3560")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call or Text: 626.590.3560
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
