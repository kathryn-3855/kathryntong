"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import Breadcrumb from "@/components/breadcrumb"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function MontereyParkCityPageClient() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/services" },
            { label: "Monterey Park" }
          ]} />

          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Monterey Park Mobile Notary & Apostille Services
            </h1>
          </div>

          {/* Introduction Section */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed">
                Kathryn's Mobile Notary & Apostille provides professional mobile notary and apostille services in Monterey Park, California, serving residents, families, and businesses with documents requiring domestic and international certification. Mobile service is available by appointment to ensure accuracy, privacy, and convenience.
              </p>
            </div>
          </div>

          {/* Apostille Services in Monterey Park Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Apostille Services in Monterey Park
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                We specialize in preparing U.S. documents for official use, including:
              </p>
              <ul className="space-y-1.5 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">California birth, marriage, and death certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Power of attorney and notarized statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">FBI background checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Academic and corporate documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Same-day and expedited apostille requests</span>
                </li>
              </ul>
              <p className="text-foreground text-base leading-relaxed">
                Both Hague Apostille and non-Hague document authentication requirements are handled based on the destination country.
              </p>
            </div>
          </div>

          {/* International Document Services Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              International Document Services
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed">
                In addition to local services, we also assist clients with <Link href="/international-apostille" className="text-primary hover:text-primary/80 font-semibold underline">international apostille and document authentication services</Link> for documents used in <Link href="/international-apostille/china" className="text-primary hover:text-primary/80 font-semibold underline">China</Link>, <Link href="/international-apostille/taiwan" className="text-primary hover:text-primary/80 font-semibold underline">Taiwan</Link>, <Link href="/international-apostille/hong-kong" className="text-primary hover:text-primary/80 font-semibold underline">Hong Kong</Link>, <Link href="/international-apostille/japan" className="text-primary hover:text-primary/80 font-semibold underline">Japan</Link>, <Link href="/international-apostille/mexico" className="text-primary hover:text-primary/80 font-semibold underline">Mexico</Link>, <Link href="/international-apostille/philippines" className="text-primary hover:text-primary/80 font-semibold underline">the Philippines</Link>, <Link href="/international-apostille/south-korea" className="text-primary hover:text-primary/80 font-semibold underline">South Korea</Link>, and more. Our experience includes preparing U.S. documents for international use across Asia and other regions, with country-specific requirements carefully followed.
              </p>
            </div>
          </div>

          {/* Mail-In Apostille Services Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Mail-In Apostille Services
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed">
                For clients outside Monterey Park or those submitting federal or international documents, <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:text-primary/80 font-semibold underline">Mail-In Apostille Services</Link> are available nationwide.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Frequently Asked Questions – Monterey Park
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Do you provide mobile notary services in Monterey Park?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Yes. Mobile notary services are available in Monterey Park by appointment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Can you handle apostilles for documents used outside the U.S.?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Yes. We assist with both Hague Apostille and non-Hague document authentication for international use.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Is same-day apostille service available in Monterey Park?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Same-day or expedited service may be available for certain California documents, depending on eligibility.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: How quickly can I get an apostille completed in Los Angeles County?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Processing time depends on the document type, issuing authority, and destination country. Same-day service may be available for qualifying documents, while mail-in processing is commonly used for federal and international requests.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Q: Do you serve Chinese and Taiwanese clients in Monterey Park?
                </h3>
                <p className="text-foreground text-base leading-relaxed">
                  A: Yes. Monterey Park has a large international community, and we regularly assist clients with U.S. documents for use in China, Taiwan, Japan, South Korea, and other countries. Services are appointment-only.
                </p>
              </div>
            </div>
          </div>

          {/* Service Disclaimer */}
          <div className="mb-6">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <p className="text-foreground text-sm italic text-foreground/80">
                All services are provided by appointment only. Acceptance of apostilled or authenticated documents is determined by the receiving authority.
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mb-6">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Ready to Get Started?
              </h2>
              <p className="text-foreground text-base mb-2">
                Contact us today for expert mobile notary and apostille services in Monterey Park.
              </p>
              <p className="text-foreground text-base font-semibold mb-2">
                We're open 7 Days per Week, 8:30 am - 8:30 pm.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href="tel:+16265903560" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>626-590-3560</span>
                </a>
                <a 
                  href="mailto:Kathryn@KathrynTong.com" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  <span>Kathryn@KathrynTong.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* Final CTA Section */}
          <div className="bg-white py-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">Ready to Start?</h2>
            <p className="text-base lg:text-lg text-foreground/90">
              Call or text <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">626-590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
