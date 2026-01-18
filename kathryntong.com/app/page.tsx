"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import FAQSection from "@/components/faq-section"
import GoogleReviews from "@/components/google-reviews"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Infographic at top - positioned above header */}
      <div className="w-full bg-blue-50 border-b-4 border-blue-500 py-8" style={{ position: 'relative', zIndex: 100 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full bg-white shadow-lg rounded-lg p-6" style={{ minHeight: '300px' }}>
            <h2 className="text-center text-xl font-bold mb-4 text-gray-800">Trusted Mobile Notary Services Overview</h2>
            <img
              src="/images/TrustedMobileNotaryServicesOverview.png"
              alt="Trusted Mobile Notary Services Overview"
              className="w-full h-auto object-contain"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxWidth: '100%',
                margin: '0 auto',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
              }}
              onError={(e) => {
                console.error('Image failed to load:', e.currentTarget.src);
                const img = e.currentTarget;
                img.style.display = 'none';
                const parent = img.parentElement;
                if (parent) {
                  parent.innerHTML = '<div style="padding: 40px; text-align: center; background: #fee; border: 2px solid #f00; color: #c00;"><h3>Image Loading Error</h3><p>Failed to load infographic. Please check console for details.</p><p style="margin-top: 10px; font-size: 12px;">URL: /images/TrustedMobileNotaryServicesOverview.png</p></div>';
                }
              }}
            />
          </div>
        </div>
      </div>
      <Header />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <FAQSection />
      </div>
      <ContactSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GoogleReviews />
      </div>
      <Footer />
      <Chatbot />
    </div>
  )
}
