"use client"

import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useTranslations } from "@/lib/use-translations"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false)
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
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        {t.phone} <span className="font-bold">626-590-3560</span> | {t.email}{" "}
        <span className="font-bold">Kathryn@KathrynTong.com</span>
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
            <div className="relative">
              <button
                onMouseEnter={() => setIsServiceAreasOpen(true)}
                onMouseLeave={() => setIsServiceAreasOpen(false)}
                className="flex items-center gap-1 text-foreground hover:text-primary transition"
              >
                {t.serviceAreas}
                <ChevronDown size={16} className={isServiceAreasOpen ? "rotate-180 transition" : "transition"} />
              </button>
              {isServiceAreasOpen && (
                <div
                  onMouseEnter={() => setIsServiceAreasOpen(true)}
                  onMouseLeave={() => setIsServiceAreasOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white border border-border rounded-lg shadow-lg z-50 py-2"
                >
                  {cities.map((city) => (
                    <Link
                      key={city.path}
                      href={city.path}
                      className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition"
                    >
                      {t.notaryApostille} {city.name}
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
                onClick={() => setIsServiceAreasOpen(!isServiceAreasOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary transition"
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
                      {t.notaryApostille} {city.name}
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
