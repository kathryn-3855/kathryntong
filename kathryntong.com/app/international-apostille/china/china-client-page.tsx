"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ChinaApostilleClientPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Apostille Services for China (Mainland China)
            </h1>
          </div>

          {/* Introduction Section */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                As of November 2023, Mainland China is a member of the Hague Apostille Convention. Most U.S. public and properly notarized documents intended for use in China now require a standard apostille, rather than embassy or consulate legalization.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                Kathryn's Mobile Notary & Apostille assists clients nationwide with correctly preparing U.S. documents for use in Mainland China under the updated Hague Apostille framework.
              </p>
            </div>
          </div>

          {/* China Apostille Requirements Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              China Apostille Requirements
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2">
                  <span className="text-foreground text-base font-semibold">Hague Status:</span>
                  <span className="text-foreground text-base">✅ Hague Apostille Convention Member</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-foreground text-base font-semibold">Required Process:</span>
                  <span className="text-foreground text-base">Apostille only (for eligible documents)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-foreground text-base font-semibold">Embassy or Consulate Legalization:</span>
                  <span className="text-foreground text-base">Not required for Hague-accepted documents</span>
                </div>
              </div>
              <p className="text-foreground text-base leading-relaxed">
                The issuing authority (California Secretary of State or U.S. Department of State) depends on the document type.
              </p>
            </div>
          </div>

          {/* Common Documents Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Common Documents Used in China
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Birth certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Marriage certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Divorce decrees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">FBI background checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Power of Attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Corporate and business documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Academic diplomas and transcripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Immigration and family-related documents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Important Practical Considerations Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Important Practical Considerations
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">
                    <strong>Local acceptance may vary:</strong> While apostilles are accepted nationally, individual institutions in China may request additional supporting documentation or certified Chinese translations.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">
                    Translations are commonly required by the receiving authority.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">
                    <strong>Proper document preparation is critical:</strong> Incorrect notarization or submission to the wrong issuing authority can still result in rejection.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">
                    We review document eligibility before submission to ensure the apostille is issued correctly.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mail-In Apostille Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Mail-In Apostille for China
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Many China-bound documents qualify for our Mail-In Apostille Service, depending on document type and issuing authority.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/apostille"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/apostille/mail-in-apostille-services"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  Mail-In Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Note Section */}
          <div className="mb-6">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-2">
                <strong>Note:</strong> Mainland China joined the Hague Apostille Convention in 2023. Apostille requirements now apply to eligible documents.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                <strong>中文提示：</strong>中国已于 2023 年加入《海牙认证公约》。大多数美国文件现可办理海牙认证，但具体接受要求以文件使用单位为准，通常需要中文翻译。
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
                Contact us today for expert China apostille services.
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
                  <span>(626) 590-3560</span>
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
              Call or text <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">(626) 590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

