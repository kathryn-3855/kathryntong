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
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Mobile Notary & Apostille Services in {cityName}, {cityState}
                </h1>
                <p className="text-base text-foreground/90 mb-6 leading-relaxed">
                  Kathryn's Mobile Notary & Apostille provides convenient on-site notary and apostille services to clients in {cityName} and surrounding areas. As a California Licensed Notary Public and Certified Apostille Agent based in Monterey Park, I travel directly to offices, law firms, health facilities, homes and educational institutions - saving clients time and preventing costly document errors.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Services:</h3>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Mobile Notary</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>State & Federal Apostille</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Embassy Legalization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Power of Attorney</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Trust, Will & Advance Healthcare Directives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>International Business & Education Documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Same-Day and Expedited Services available</span>
                    </li>
                  </ul>
                </div>
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
