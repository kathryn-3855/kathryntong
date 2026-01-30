"use client"
import Header from "@/components/header"
import type React from "react"

import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { useTranslations } from "@/lib/use-translations"
import { Mail, Phone, Clock } from "lucide-react"

export default function ContactClientPage() {
  const t = useTranslations()
  const searchParams = useSearchParams()
  const isQuoteRequest = searchParams?.get("quote") === "true"
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
      <main className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isQuoteRequest && (
            <>
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Contact Kathryn's Mobile Notary & Apostille
                </h1>
                <p className="text-xl text-foreground/90 max-w-2xl mx-auto mb-6">
                  For questions about apostille eligibility, timelines, or international document requirements, please contact us directly.
                </p>
              </div>

              {/* Contact Information Section */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="bg-foreground/10 rounded-lg p-6 mb-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Phone / Text:</h3>
                      <a href="tel:+16265903560" className="text-primary font-semibold hover:underline text-lg">
                        626-590-3560
                      </a>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Email:</h3>
                      <a href="mailto:Kathryn@KathrynTong.com" className="text-primary font-semibold hover:underline text-lg">
                        Kathryn@KathrynTong.com
                      </a>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">WeChat:</h3>
                      <p className="text-foreground text-lg">USANotaryApostille</p>
                    </div>
                  </div>
                </div>

                <div className="bg-foreground/10 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Business Hours:</h3>
                  <p className="text-foreground mb-2">7 Days per Week: 8:30 am - 8:30 pm</p>
                  <p className="text-foreground">After-hours service available by appointment</p>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Service Area Notice</h3>
                  <p className="text-foreground">
                    We provide mobile and mail-in apostille services throughout Los Angeles County and serve clients nationwide by mail.
                  </p>
                </div>
              </div>
            </>
          )}
          {isQuoteRequest && (
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Request A Quote</h1>
              <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you with a quote for your notary or apostille needs.
              </p>
            </div>
          )}

          <div className={isQuoteRequest ? "max-w-2xl mx-auto" : "max-w-4xl mx-auto"}>
            {/* Contact Form */}
            <div className="bg-foreground/10 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    {t.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder={t.fullNamePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    {t.emailAddress}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder={t.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    {t.phoneNumber}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder={t.phonePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-foreground mb-2">
                    {t.serviceType}
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  >
                    <option value="notary">{t.serviceTypeNotary}</option>
                    <option value="apostille">{t.serviceTypeApostille}</option>
                    <option value="legalization">{t.serviceTypeLegalization}</option>
                    <option value="other">{t.serviceTypeOther}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
                >
                  {isSubmitting ? t.sending : t.sendMessage}
                </button>

                {submitStatus === "success" && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    {t.thankYouMessage}
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    {t.errorMessage}
                  </div>
                )}
              </form>
            </div>

          </div>

          {/* Google Reviews */}
          <div className="mt-8">
            <GoogleReviews />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
