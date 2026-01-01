"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"

interface CityPageProps {
  cityName: string
  cityState: string
  description: string
  imagePath: string
  imageAlt: string
  services: string[]
  benefits: string[]
}

export default function CityPage({ 
  cityName, 
  cityState, 
  description, 
  imagePath, 
  imageAlt,
  services,
  benefits
}: CityPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Mobile Notary & Apostille Services in {cityName}, {cityState}
                </h1>
                <p className="text-xl text-foreground/90 mb-6 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={imagePath}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Notary Services in {cityName}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-foreground/10 rounded-lg p-6 border border-foreground/30">
                  <CheckCircle className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{service}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Why Choose Our Mobile Notary Services in {cityName}?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-foreground/90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Area Info */}
          <div className="bg-foreground/10 rounded-lg p-8 mb-16">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Service Area</h2>
            </div>
            <p className="text-foreground/90 mb-4">
              We provide mobile notary and apostille services throughout {cityName}, {cityState} and surrounding areas. 
              Our mobile service means we come to you - whether that's your office, home, or any convenient location.
            </p>
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="w-5 h-5" />
              <p>Available 7 days a week, 8:30 AM - 8:30 PM | Appointments required</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="mb-6 max-w-2xl mx-auto text-white">
              Contact us today to schedule your mobile notary or apostille service in {cityName}, {cityState}. 
              We're here to help with all your notarization needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16265903560"
                className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                Call: 626-590-3560
              </a>
              <a
                href="mailto:Kathryn@KathrynTong.com"
                className="inline-block border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition"
              >
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
