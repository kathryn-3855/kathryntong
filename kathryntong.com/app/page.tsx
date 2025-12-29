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
      <section className="relative overflow-hidden bg-white text-foreground py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
              Professional Mobile Notary Services for Legal, Corporate, and Private Clients
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed mb-4">
              Discreet, reliable, same-day notarization for law firms, businesses, and individuals who value precision and professionalism.
            </p>
            <p className="text-lg text-foreground/70 mb-8">
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
      <section className="py-10 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">STATEMENT</h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-3">
              I provide mobile notary services exclusively for clients who require dependable, punctual, and confidential execution of important documents.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My practice is focused on serving law firms, corporations, escrow professionals, healthcare facilities, and private clients who expect a higher standard of service.
            </p>
          </div>
        </div>
      </section>

      {/* Specialized Notary Services */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">SPECIALIZED NOTARY SERVICES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-5">
              <h3 className="text-xl font-semibold text-foreground mb-2">Law Firm & Legal Document Notarization</h3>
            </div>
            <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Corporate & Business Transactions</h3>
            </div>
            <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Escrow & Real Estate Documents</h3>
            </div>
            <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Medical & Healthcare Facility Notary</h3>
            </div>
            <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Private Client & Estate-Related Documents</h3>
            </div>
          </div>
          <p className="text-center text-foreground/80 text-lg">
            Services are provided by appointment and tailored to professional needs, including same-day and after-hours availability.
          </p>
        </div>
      </section>

      {/* Fees & Arrangements */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">FEES & ARRANGEMENTS</h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-3">
              Professional services are billed per visit or per engagement, based on location, urgency, and scope of work.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I do not offer walk-in, counter service, or discount notarizations.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">SERVICE AREA</h2>
            </div>
            <p className="text-lg text-foreground/90 leading-relaxed mb-2">
              Serving San Gabriel Valley Surrounding Areas and Los Angeles County.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Mobile service provided by appointment only.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Inquiries */}
      <section className="py-10 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Professional Inquiries</h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              For law firms, businesses, and private clients requiring prompt and professional notary services, please call or text to discuss availability.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Phone calls & Text are answered right away. Messages are returned promptly during business hours.
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
