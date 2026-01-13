"use client"
import { useTranslations } from "@/lib/use-translations"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"

export default function AboutClientPage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/kathryn.webp" alt="Kathryn's professional portrait" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{t.aboutTitle}</h1>
              <p className="text-base text-foreground mb-2 leading-relaxed">
                With more than 10 years' hands-on experience as a licensed Mobile Notary Public and Certified Apostille Agent, I am known for a detail-oriented, value-added approach that goes beyond basic notarization - anticipating issues, verifying requirements, and ensuring documents are executed correctly the first time.
              </p>
              <p className="text-base text-foreground mb-2 leading-relaxed">
                Over the years, I have worked extensively with attorneys, corporate executives, business owners, mortgage lenders, individuals, and government agencies on high stakes matters where precision, compliance, and confidentiality are essential, many of whom rely on my expertise, reliability, and ability to handle sensitive documents with professionalism and care.
              </p>
              <p className="text-base text-foreground leading-relaxed">
                My professional background in Project Management and Commercial Real Estate provides a strong foundation for navigating complicated local, international documents, and regulatory requirements. This multidisciplinary experience allows me to communicate effectively with different clients and manage time-sensitive transactions with accuracy and efficiency.
              </p>
            </div>
          </div>

          {/* Why Choose Kathryn */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t.aboutWhyChoose}</h2>
            
            {/* Niche & Expertise */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Niche & Expertise</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Specialized in Mobile Notary Assignments and Apostille Services for Lawyers, Corporate Executives, and High-Profile individuals, handling complicated international contracts to sensitive estate documents, ensuring absolute discretion, privacy and confidentiality.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    With over 10 years of professional notary and apostille experience, we have the skills and expertise to notarize a broad variety of personal, business and legal documents in a timely, securely and accurate manner.
                  </p>
                </div>
              </div>
            </div>

            {/* Customers Experience */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Customers Experience</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Value-Added Notary & Apostille Services: Our Services are Faster, Friendlier, with more Streamlined processes and Tailor-Made solutions to each client's needs.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Reliability & Availability: Hunting for a reliable mobile notary sometimes can be a bit of challenge for many law firms and businesses. We endeavor to provide consistent & dependable service and we always answer client's phone calls / texts / emails.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Convenience - Mobile Notary & Apostille Services At Your Doorstep : Having a mobile notary ensures that your firm can conduct business at any place and at any time, which will significantly increase productivity. We provide easy scheduling with same-day, evening, after-hours, and weekend appointments at your or your clients' location, 7 days a week.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.aboutReadyTitle}</h2>
            <p className="text-lg text-foreground mb-4">
              Email, <a href="tel:+16265903560" className="text-primary hover:underline">Call or Text (626) 590-3560</a> to schedule an appointment, 7 days a week.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
