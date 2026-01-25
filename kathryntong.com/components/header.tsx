"use client"

import { Menu, X, Globe, ChevronDown, Phone, Mail, MessageCircle, MessageSquare } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useTranslations } from "@/lib/use-translations"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false)
  const [isApostilleOpen, setIsApostilleOpen] = useState(false)
  const [isInternationalApostilleOpen, setIsInternationalApostilleOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = useTranslations()
  
  const cities = [
    { name: t.cityLosAngeles, path: "/mobile-notary-apostille-los-angeles-ca" },
    { name: t.cityBeverlyHills, path: "/mobile-notary-apostille-beverly-hills" },
    { name: t.cityPasadena, path: "/mobile-notary-apostille-pasadena-ca" },
    { name: t.cityCulverCity, path: "/mobile-notary-apostille-culver-city-ca" },
    { name: t.citySantaMonica, path: "/mobile-notary-apostille-santa-monica-ca" },
    { name: t.cityWestHollywood, path: "/mobile-notary-apostille-west-hollywood" },
    { name: t.cityArcadia, path: "/mobile-notary-apostille-arcadia" },
    { name: t.citySanMarino, path: "/mobile-notary-apostille-san-marino" },
    { name: t.citySouthPasadena, path: "/mobile-notary-apostille-south-pasadena" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 flex-wrap text-sm font-medium">
          <a href="tel:+16265903560" className="flex items-center gap-2 hover:opacity-80 transition">
            <Phone className="w-4 h-4" />
            <span className="font-bold">626-590-3560</span>
          </a>
          <a href="mailto:Kathryn@KathrynTong.com" className="flex items-center gap-2 hover:opacity-80 transition">
            <Mail className="w-4 h-4" />
            <span className="font-bold">Kathryn@KathrynTong.com</span>
          </a>
          <a 
            href="https://wa.me/16265903560" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <div className="flex items-center gap-2 hover:opacity-80 transition border-l border-primary-foreground/30 pl-6">
            <MessageSquare className="w-4 h-4" />
            <span className="font-bold">WeChat: USANotaryApostille</span>
          </div>
          <Link href="/contact" className="flex items-center gap-2 hover:opacity-80 transition border-l border-primary-foreground/30 pl-6">
            <span>Request A Quote</span>
          </Link>
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
            <Link href="/about" className="text-gray-700 font-bold hover:text-primary transition">
              {t.aboutMe}
            </Link>
            <Link href="/services" className="text-gray-700 font-bold hover:text-primary transition">
              {t.mobileNotary}
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsApostilleOpen(true)}
              onMouseLeave={() => setIsApostilleOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 font-bold hover:text-primary transition"
              >
                {t.apostilleLegalization}
                <ChevronDown size={16} className={isApostilleOpen ? "rotate-180 transition" : "transition"} />
              </button>
              {isApostilleOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-lg shadow-lg z-50 py-2"
                >
                  <Link
                    href="/apostille"
                    className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition"
                  >
                    Apostille & Legalization Services
                  </Link>
                  <Link
                    href="/apostille/same-day-apostille-services"
                    className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition"
                  >
                    Same-Day Apostille Services
                  </Link>
                  <Link
                    href="/apostille/mail-in-apostille-services"
                    className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition"
                  >
                    Mail-In Apostille Services
                  </Link>
                </div>
              )}
            </div>
            <div 
              className="relative"
              onMouseEnter={() => setIsInternationalApostilleOpen(true)}
              onMouseLeave={() => setIsInternationalApostilleOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 font-bold hover:text-primary transition"
              >
                International Apostille
                <ChevronDown size={16} className={isInternationalApostilleOpen ? "rotate-180 transition" : "transition"} />
              </button>
              {isInternationalApostilleOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-lg shadow-lg z-50 py-2"
                >
                  <Link
                    href="/international-apostille"
                    className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition"
                  >
                    International Apostille Services
                  </Link>
                  <Link
                    href="/international-apostille/china"
                    className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition"
                  >
                    Apostille Services for China
                  </Link>
                  <Link
                    href="/international-apostille/hong-kong"
                    className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition"
                  >
                    Apostille Services for Hong Kong
                  </Link>
                  <Link
                    href="/international-apostille/taiwan"
                    className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition"
                  >
                    Apostille Services for Taiwan
                  </Link>
                  <Link
                    href="/international-apostille/mexico"
                    className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition"
                  >
                    Apostille Services for Mexico
                  </Link>
                  <Link
                    href="/international-apostille/south-korea"
                    className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition"
                  >
                    Apostille Services for South Korea
                  </Link>
                  <Link
                    href="/international-apostille/philippines"
                    className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition"
                  >
                    Apostille Services for the Philippines
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact" className="text-gray-700 font-bold hover:text-primary transition">
              {t.contact}
            </Link>
            <Link href="/pricing" className="text-gray-700 font-bold hover:text-primary transition">
              {t.pricing}
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsServiceAreasOpen(true)}
              onMouseLeave={() => setIsServiceAreasOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 font-bold hover:text-primary transition"
              >
                {t.serviceAreas}
                <ChevronDown size={16} className={isServiceAreasOpen ? "rotate-180 transition" : "transition"} />
              </button>
              {isServiceAreasOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-lg shadow-lg z-50 py-2"
                >
                  {cities.map((city) => (
                    <Link
                      key={city.path}
                      href={city.path}
                      className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition"
                    >
                      {city.name} Mobile Notary & Apostille Services
                    </Link>
                  ))}
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
              className="block text-gray-700 font-bold hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.aboutMe}
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 font-bold hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.mobileNotary}
            </Link>
            <div>
              <button
                onClick={() => setIsApostilleOpen(!isApostilleOpen)}
                className="flex items-center justify-between w-full text-gray-700 font-bold hover:text-primary transition"
              >
                {t.apostilleLegalization}
                <ChevronDown size={16} className={isApostilleOpen ? "rotate-180 transition" : "transition"} />
              </button>
              {isApostilleOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/apostille"
                    className="block text-foreground hover:text-primary transition text-sm"
                    onClick={() => {
                      setIsOpen(false)
                      setIsApostilleOpen(false)
                    }}
                  >
                    Apostille & Legalization Services
                  </Link>
                  <Link
                    href="/apostille/same-day-apostille-services"
                    className="block text-foreground hover:text-primary transition text-sm"
                    onClick={() => {
                      setIsOpen(false)
                      setIsApostilleOpen(false)
                    }}
                  >
                    Same-Day Apostille Services
                  </Link>
                  <Link
                    href="/apostille/mail-in-apostille-services"
                    className="block text-foreground hover:text-primary transition text-sm"
                    onClick={() => {
                      setIsOpen(false)
                      setIsApostilleOpen(false)
                    }}
                  >
                    Mail-In Apostille Services
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setIsInternationalApostilleOpen(!isInternationalApostilleOpen)}
                className="flex items-center justify-between w-full text-gray-700 font-bold hover:text-primary transition"
              >
                International Apostille
                <ChevronDown size={16} className={isInternationalApostilleOpen ? "rotate-180 transition" : "transition"} />
              </button>
              {isInternationalApostilleOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/international-apostille"
                    className="block text-foreground hover:text-primary transition text-sm"
                    onClick={() => {
                      setIsOpen(false)
                      setIsInternationalApostilleOpen(false)
                    }}
                  >
                    International Apostille Services
                  </Link>
                  <Link
                    href="/international-apostille/china"
                    className="block text-foreground hover:text-primary transition text-sm"
                    onClick={() => {
                      setIsOpen(false)
                      setIsInternationalApostilleOpen(false)
                    }}
                  >
                    Apostille Services for China
                  </Link>
                  <Link
                    href="/international-apostille/hong-kong"
                    className="block text-foreground hover:text-primary transition text-sm"
                    onClick={() => {
                      setIsOpen(false)
                      setIsInternationalApostilleOpen(false)
                    }}
                  >
                    Apostille Services for Hong Kong
                  </Link>
                  <Link
                    href="/international-apostille/taiwan"
                    className="block text-foreground hover:text-primary transition text-sm"
                    onClick={() => {
                      setIsOpen(false)
                      setIsInternationalApostilleOpen(false)
                    }}
                  >
                    Apostille Services for Taiwan
                  </Link>
                  <Link
                    href="/international-apostille/mexico"
                    className="block text-foreground hover:text-primary transition text-sm"
                    onClick={() => {
                      setIsOpen(false)
                      setIsInternationalApostilleOpen(false)
                    }}
                  >
                    Apostille Services for Mexico
                  </Link>
                  <Link
                    href="/international-apostille/south-korea"
                    className="block text-foreground hover:text-primary transition text-sm"
                    onClick={() => {
                      setIsOpen(false)
                      setIsInternationalApostilleOpen(false)
                    }}
                  >
                    Apostille Services for South Korea
                  </Link>
                  <Link
                    href="/international-apostille/philippines"
                    className="block text-foreground hover:text-primary transition text-sm"
                    onClick={() => {
                      setIsOpen(false)
                      setIsInternationalApostilleOpen(false)
                    }}
                  >
                    Apostille Services for the Philippines
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="block text-gray-700 font-bold hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.contact}
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 font-bold hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {t.pricing}
            </Link>
            <div>
              <button
                onClick={() => setIsServiceAreasOpen(!isServiceAreasOpen)}
                className="flex items-center justify-between w-full text-gray-700 font-bold hover:text-primary transition"
              >
                {t.serviceAreas}
                <ChevronDown size={16} className={isServiceAreasOpen ? "rotate-180 transition" : "transition"} />
              </button>
              {isServiceAreasOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {cities.map((city) => (
                    <Link
                      key={city.path}
                      href={city.path}
                      className="block text-foreground hover:text-primary transition text-sm"
                      onClick={() => {
                        setIsOpen(false)
                        setIsServiceAreasOpen(false)
                      }}
                    >
                      {city.name} Mobile Notary & Apostille Services
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
