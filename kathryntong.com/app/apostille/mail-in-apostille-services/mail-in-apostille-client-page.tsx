"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { CheckCircle, Phone, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MailInApostilleClientPage() {
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
              Mail-In Apostille Services
            </h1>
            <p className="text-xl text-foreground/90 mb-4">
              For clients who are not able to appear in person, including out-of-state and international clients.
            </p>
          </div>

          {/* Overview Section */}
          <div className="mb-10">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <p className="text-foreground text-base leading-relaxed mb-4">
                Our mail-in apostille service provides a convenient solution for clients who cannot visit our office in person. This service is ideal for out-of-state clients, international clients, or anyone who prefers the convenience of mailing their documents.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                Documents are carefully reviewed for accuracy before submission to prevent rejection by the California Secretary of State or foreign authorities. Secure shipping options are available for both sending and receiving documents.
              </p>
            </div>
          </div>

          {/* Who Can Use This Service Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">Who Can Use Mail-In Apostille Services?</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Out-of-state clients who need California apostilles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">International clients located overseas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Clients who prefer the convenience of mail-in service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Clients with multiple documents to process</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Anyone who cannot visit our office in person</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">How Mail-In Apostille Works</h2>
            <div className="space-y-4">
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 1: Contact Us</h3>
                <p className="text-foreground text-base">
                  Call, text, or email to discuss your apostille needs. We'll provide instructions on how to prepare and send your documents.
                </p>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 2: Send Your Documents</h3>
                <p className="text-foreground text-base">
                  Mail your documents to us using a secure shipping method. We recommend using tracking and insurance for valuable documents.
                </p>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 3: Document Review</h3>
                <p className="text-foreground text-base">
                  We carefully review your documents for accuracy and compliance with California Secretary of State requirements before submission.
                </p>
              </div>
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">Step 4: Processing & Return</h3>
                <p className="text-foreground text-base">
                  Documents are submitted to the California Secretary of State for apostille processing. Once complete, apostilled documents are securely returned to you.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">Benefits of Mail-In Apostille Service</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Convenient for clients anywhere in the world</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">No need to travel or appear in person</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Expert document review to prevent costly rejections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Secure shipping options available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Clear communication throughout the process</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Ideal for processing multiple documents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* International Clients Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">International Clients</h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
              <p className="text-foreground text-base leading-relaxed mb-4">
                U.S. citizens and international clients located outside California or overseas can use our secure mail-in apostille services. Documents are reviewed for accuracy before submission to prevent rejection by the Secretary of State or foreign authorities.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                Country-specific requirements vary. We provide guidance on document preparation and destination country requirements to ensure your documents are properly processed.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-10">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-foreground text-base mb-4">
                Contact us to discuss your mail-in apostille needs and receive instructions on how to send your documents.
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

