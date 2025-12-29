"use client"
import Header from "@/components/header"
import type React from "react"

import Footer from "@/components/footer"
import { useState } from "react"
import { useTranslations } from "@/lib/use-translations"
import { Mail, Phone, Clock } from "lucide-react"

export default function ContactClientPage() {
  const t = useTranslations()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "notary",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "notary",
        message: "",
      })
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
              Get in touch with Kathryn's Mobile Notary & Apostille. We're here to help with all your notarization, Apostille & Legalization needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-foreground/10 rounded-lg p-8 text-center">
              <a href="tel:+16265903560" className="flex items-center justify-center text-primary hover:opacity-80 transition mb-4">
                <Phone className="w-12 h-12" />
              </a>
              <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+16265903560" className="text-primary font-semibold hover:underline block">
                626-590-3560
              </a>
              <p className="text-sm text-foreground/70 mt-2">Available 7 days a week</p>
            </div>

            <div className="bg-foreground/10 rounded-lg p-8 text-center">
              <a href="https://wa.me/16265903560" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-primary hover:opacity-80 transition mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
              <a href="https://wa.me/16265903560" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline block">
                WhatsApp Chat
              </a>
              <p className="text-sm text-foreground/70 font-semibold mt-2">For International Clients</p>
            </div>

            <div className="bg-foreground/10 rounded-lg p-8 text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:Kathryn@KathrynTong.com" className="text-primary font-semibold hover:underline">
                Kathryn@KathrynTong.com
              </a>
              <p className="text-sm text-foreground/70 mt-2">Fast response guaranteed</p>
            </div>

            <div className="bg-foreground/10 rounded-lg p-8 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Hours</h3>
              <p className="text-foreground font-semibold">8:30 AM - 8:30 PM</p>
              <p className="text-sm text-foreground/70 mt-2">7 days a week</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-foreground/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="(626) 590-3560"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-foreground mb-2">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  >
                    <option value="notary">Notary Services</option>
                    <option value="apostille">Apostille Certification</option>
                    <option value="legalization">Legalization Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Tell us about your notarization needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    An error occurred. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Mobile Services</h3>
                    <p className="text-foreground/80">We come to your office, Residence, Facilities, or Locations of your choice.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Fast Turnaround</h3>
                    <p className="text-foreground/80">
                      24 Hours for Notary & Apostille, 2 to 6 weeks for Federal and Embassy Legalization, depending on destination country.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10 Years Experience</h3>
                    <p className="text-foreground/80">Experience with complex and time sensitive documents. Clear communication and dependable follow-through.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Flexible Hours</h3>
                    <p className="text-foreground/80">Available 7 days a week, 8:30 AM to 8:30 PM for your convenience. Appointments required.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Bilingual Services</h3>
                    <p className="text-foreground/80">Fluent in English, Mandarin & Cantonese</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
