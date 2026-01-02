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
  surroundingAreas?: string[]
  popularSectors?: string[]
}

export default function CityPage({ 
  cityName, 
  cityState, 
  description, 
  imagePath, 
  imageAlt,
  services,
  benefits,
  surroundingAreas = [],
  popularSectors = []
}: CityPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Mobile Notary & Apostille Services in {cityName}, {cityState}
                </h1>
                <p className="text-base text-foreground/90 mb-6 leading-relaxed">
                  Kathryn's Mobile Notary & Apostille provides convenient on-site notary and apostille services to clients in {cityName}{surroundingAreas.length > 0 ? `, ${surroundingAreas.join(", ")}` : " and surrounding areas"}. As a California Licensed Notary Public and Certified Apostille Agent based in Monterey Park, I travel directly to offices, law firms, health facilities, homes and educational institutions - saving clients time and preventing costly document errors.
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Services:</h3>
                  <ul className="space-y-1 text-foreground/90">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
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

          {/* Popular Sectors Served Section */}
          {popularSectors.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Popular Sectors Served:</h2>
              <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
                <ul className="space-y-2">
                  {popularSectors.map((sector, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground text-sm">{sector}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

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

