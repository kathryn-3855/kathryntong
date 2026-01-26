import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import GoogleReviews from "@/components/google-reviews"
import LocalBusinessSchema from "@/components/local-business-schema"

export const metadata: Metadata = {
  title: "Mobile Notary & Apostille Services Los Angeles | Kathryn's",
  description:
    "Certified mobile notary and apostille services in Los Angeles. Same-day and mail-in apostille for U.S. and international documents. Trusted, accurate, and convenient.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <LocalBusinessSchema />
      <Header />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GoogleReviews />
      </div>
      <ContactSection />
      <Footer />
      <Chatbot />
    </div>
  )
}
