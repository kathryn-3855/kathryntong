"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import { Phone, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white text-foreground py-20 lg:py-32">
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
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">STATEMENT</h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              I provide mobile notary services exclusively for clients who require dependable, punctual, and confidential execution of important documents.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My practice is focused on serving law firms, corporations, escrow professionals, healthcare facilities, and private clients who expect a higher standard of service.
            </p>
          </div>
        </div>
      </section>

      {/* Specialized Notary Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">SPECIALIZED NOTARY SERVICES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-6">
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

      {/* Why Clients Choose Me */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">WHY CLIENTS CHOOSE ME</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Professional Standards</h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">On-site mobile service at Offices, Residences, or Health Facilities</h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Punctual, discreet, and well-prepared appointments</h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Clear communication and dependable follow-through</h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Experienced with complex and time-sensitive documents</h3>
              </div>
            </div>
          </div>
          <p className="text-center text-foreground/80 text-lg">
            I work directly with attorneys, office managers, escrow officers, and professionals who require consistency and confidence in their service providers.
          </p>
        </div>
      </section>

      {/* Fees & Arrangements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">FEES & ARRANGEMENTS</h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              Professional services are billed per visit or per engagement, based on location, urgency, and scope of work.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I do not offer walk-in, counter service, or discount notarizations.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal Client Statement */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">IDEAL CLIENT STATEMENT</h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              This service is best suited for clients who prioritize reliability, discretion, and efficiency over lowest-price options.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
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
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Inquiries</h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              For law firms, businesses, and private clients requiring prompt and professional notary services, please call or text to discuss availability.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
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
