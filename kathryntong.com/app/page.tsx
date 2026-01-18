"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import GoogleReviews from "@/components/google-reviews"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ContactSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GoogleReviews />
      </div>
      <Footer />
      <Chatbot />
    </div>
  )
}
