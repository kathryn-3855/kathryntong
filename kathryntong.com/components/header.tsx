"use client"

import { Menu, X, Globe, Phone, Mail, FileText, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useTranslations } from "@/lib/use-translations"
import type React from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false)
  const [isServiceAreasMobileOpen, setIsServiceAreasMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage } = useLanguage()
  const t = useTranslations()

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServiceAreasOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])
  
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
      setTimeout(() => {
        setSubmitStatus("idle")
        setIsQuoteModalOpen(false)
      }, 3000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 text-sm font-medium">
          <a href="tel:626-590-3560" className="flex items-center gap-2 hover:opacity-80 transition">
            <Phone size={18} />
            <span className="font-bold">626-590-3560</span>
          </a>
          <span className="text-primary-foreground/50">|</span>
          <a href="mailto:Kathryn@KathrynTong.com" className="flex items-center gap-2 hover:opacity-80 transition">
            <Mail size={18} />
            <span className="font-bold">Kathryn@KathrynTong.com</span>
          </a>
          <span className="text-primary-foreground/50">|</span>
          <a href="https://wa.me/16265903560" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="font-bold">WhatsApp</span>
          </a>
          <span className="text-primary-foreground/50">|</span>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <FileText size={18} />
            <span className="font-bold">Request A Quote</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/kathryntonglogo.webp"
                alt="Kathryn's Mobile Notary Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-foreground">Kathryn's Mobile Notary</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-foreground hover:text-primary transition">
              {t.aboutMe}
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition">
              {t.mobileNotary}
            </Link>
            <Link href="/apostille" className="text-foreground hover:text-primary transition">
              {t.apostilleLegalization}
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-primary transition">
              {t.pricing}
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServiceAreasOpen(!isServiceAreasOpen)}
                className="flex items-center gap-1 text-foreground hover:text-primary transition"
              >
                Service Areas
                <ChevronDown size={16} className={isServiceAreasOpen ? "rotate-180" : ""} />
              </button>
              {isServiceAreasOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-foreground/20 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/${city.slug}`}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-foreground/10 transition"
                        onClick={() => setIsServiceAreasOpen(false)}
                      >
                        Notary-Apostille {city.name}
                      </Link>
                    ))}
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-foreground/10 transition border-t border-foreground/20 mt-2"
                      onClick={() => setIsServiceAreasOpen(false)}
                    >
                      View All Service Areas
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-accent transition"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{language === "en" ? "中文" : "EN"}</span>
            </button>
          </nav>

          {/* Mobile Menu & Language Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="flex items-center gap-1 px-2 py-2 rounded-lg border border-border hover:bg-accent transition"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="text-xs font-medium">{language === "en" ? "中文" : "EN"}</span>
            </button>
            <button className="p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link
              href="/about"
              className="block text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.aboutMe}
            </Link>
            <Link
              href="/services"
              className="block text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.mobileNotary}
            </Link>
            <Link
              href="/apostille"
              className="block text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.apostilleLegalization}
            </Link>
            <Link
              href="/pricing"
              className="block text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.pricing}
            </Link>
            <div>
              <button
                onClick={() => setIsServiceAreasMobileOpen(!isServiceAreasMobileOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary transition"
              >
                Service Areas
                <ChevronDown size={16} className={isServiceAreasMobileOpen ? "rotate-180" : ""} />
              </button>
              {isServiceAreasMobileOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}`}
                      className="block text-sm text-foreground/80 hover:text-primary transition"
                      onClick={() => {
                        setIsOpen(false)
                        setIsServiceAreasMobileOpen(false)
                      }}
                    >
                      Notary-Apostille {city.name}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="block text-sm text-foreground/80 hover:text-primary transition pt-2 border-t border-foreground/20"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServiceAreasMobileOpen(false)
                    }}
                  >
                    View All Service Areas
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>

      {/* Quote Request Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setIsQuoteModalOpen(false)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-border p-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Request A Quote</h2>
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="p-2 hover:bg-accent rounded-lg transition"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="quote-name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="quote-email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="quote-phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="(626) 590-3560"
                  />
                </div>

                <div>
                  <label htmlFor="quote-serviceType" className="block text-sm font-semibold text-foreground mb-2">
                    Service Type
                  </label>
                  <select
                    id="quote-serviceType"
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
                  <label htmlFor="quote-message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="quote-message"
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
          </div>
        </div>
      )}
    </header>
  )
}
