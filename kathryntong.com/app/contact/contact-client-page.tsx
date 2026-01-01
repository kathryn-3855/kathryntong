"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { MapPin } from "lucide-react"

export default function ServiceAreasPage() {
  const cities = [
    { name: "Los Angeles", slug: "mobile-notary-apostille-los-angeles-ca" },
    { name: "Culver City", slug: "mobile-notary-apostille-culver-city-ca" },
    { name: "Santa Monica", slug: "mobile-notary-apostille-santa-monica-ca" },
    { name: "Pasadena", slug: "mobile-notary-apostille-pasadena-ca" },
    { name: "Arcadia", slug: "mobile-notary-apostille-arcadia" },
    { name: "San Marino", slug: "mobile-notary-apostille-san-marino" },
    { name: "South Pasadena", slug: "mobile-notary-apostille-south-pasadena" },
    { name: "Beverly Hills", slug: "mobile-notary-apostille-beverly-hills" },
    { name: "West Hollywood", slug: "mobile-notary-apostille-west-hollywood" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Service Areas</h1>
            <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
              Professional mobile notary and apostille services throughout Los Angeles County and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="bg-foreground/10 rounded-lg p-6 hover:bg-foreground/20 transition border border-foreground/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{city.name}</h3>
                </div>
                <p className="text-foreground/80 text-sm">
                  Mobile notary and apostille services in {city.name}, CA
                </p>
              </Link>
            ))}
          </div>

          <div className="bg-foreground/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Serving All of Los Angeles County</h2>
            <p className="text-foreground/90 mb-6 max-w-2xl mx-auto">
              We provide mobile notary and apostille services throughout Los Angeles County and surrounding areas. 
              Contact us to schedule an appointment at your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16265903560"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                Call: 626-590-3560
              </a>
              <a
                href="mailto:Kathryn@KathrynTong.com"
                className="inline-block border border-foreground text-foreground px-6 py-3 rounded-lg font-medium hover:bg-foreground/20 transition"
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
