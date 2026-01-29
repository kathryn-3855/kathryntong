"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import Breadcrumb from "@/components/breadcrumb"
import { Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/lib/use-translations"

export default function GlendaleCityPageClient() {
  const t = useTranslations()
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/services" },
            { label: "Glendale" }
          ]} />
          {/* Hero Section */}
          <div className="mb-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Glendale Mobile Notary & Apostille Services
                </h1>
                
                <div className="space-y-3 mb-3">
                  <p className="text-foreground text-base leading-relaxed">
                    Kathryn's Mobile Notary & Apostille provides professional <Link href="/mobile-notary-apostille-los-angeles-ca" className="text-primary hover:underline font-semibold">mobile notary and apostille services</Link> in Glendale, serving individuals, families, and businesses by appointment. Mobile service is available throughout Glendale for clients who need documents notarized accurately and efficiently.
                  </p>
                  <p className="text-foreground text-base leading-relaxed">
                    We specialize in California <Link href="/apostille" className="text-primary hover:underline font-semibold">apostille services</Link>, including same-day and <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:underline font-semibold">mail-in apostille processing</Link> for birth certificates, FBI background checks, powers of attorney, affidavits, and other official documents. Each request is reviewed carefully to ensure compliance before submission.
                  </p>
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/cities/glendale.jpg"
                  alt="Glendale with mobile notary services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Apostille Services for International Use Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Apostille Services for International Use
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Glendale clients frequently require documents for use outside the United States. We assist with <Link href="/international-apostille" className="text-primary hover:underline font-semibold">international apostille and document authentication services</Link> for both Hague and non-Hague countries, including China, Taiwan, Hong Kong, Mexico, South Korea, the Philippines, Japan, and more...
              </p>
              <p className="text-foreground text-base leading-relaxed">
                <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:underline font-semibold">Mail-in apostille service</Link> is available nationwide, making the process convenient even when in-person service is not required.
              </p>
            </div>
          </div>

          {/* Services Offered Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Services Offered
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Same-Day Apostille</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Mail-In Apostille Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">International Apostille & Legalization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Mobile Notary Services</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Appointment-Based Mobile Service Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Appointment-Based Mobile Service
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <p className="text-foreground text-base leading-relaxed mb-3">
                All services are provided by appointment only. Mobile notary service is available throughout Glendale, and <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:underline font-semibold">mail-in options</Link> are available for apostille processing depending on document type and destination country.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                For additional service areas, visit our <Link href="/mobile-notary-apostille-los-angeles-ca" className="text-primary hover:underline font-semibold">Los Angeles Mobile Notary & Apostille Services</Link> page.
              </p>
            </div>
          </div>

          {/* International Services Paragraph */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <p className="text-foreground text-base leading-relaxed">
                In addition to local services, we also assist clients with <Link href="/international-apostille" className="text-primary hover:text-primary/80 font-semibold underline">international apostille and document authentication services</Link> for documents used in <Link href="/international-apostille/china" className="text-primary hover:text-primary/80 font-semibold underline">China</Link>, <Link href="/international-apostille/taiwan" className="text-primary hover:text-primary/80 font-semibold underline">Taiwan</Link>, <Link href="/international-apostille/hong-kong" className="text-primary hover:text-primary/80 font-semibold underline">Hong Kong</Link>, <Link href="/international-apostille/mexico" className="text-primary hover:text-primary/80 font-semibold underline">Mexico</Link>, <Link href="/international-apostille/philippines" className="text-primary hover:text-primary/80 font-semibold underline">the Philippines</Link>, <Link href="/international-apostille/south-korea" className="text-primary hover:text-primary/80 font-semibold underline">South Korea</Link>, <Link href="/international-apostille/japan" className="text-primary hover:text-primary/80 font-semibold underline">Japan</Link>, <Link href="/international-apostille/saudi-arabia" className="text-primary hover:text-primary/80 font-semibold underline">Saudi Arabia</Link>, and more. Our experience includes preparing U.S. documents for international use across multiple regions, including Asia and the Middle East, with country-specific requirements carefully followed.
              </p>
            </div>
          </div>

          {/* Additional International Contextual Link */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed">
                We also assist clients with documents used internationally, including <Link href="/international-apostille/japan" className="text-primary hover:text-primary/80 font-semibold underline">apostille services for Japan</Link> and <Link href="/international-apostille/saudi-arabia" className="text-primary hover:text-primary/80 font-semibold underline">Saudi Arabia</Link>, and more.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              FAQ: Apostille & International Document Authentication
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      Q: What is the difference between an apostille and document legalization?
                    </p>
                    <p className="text-foreground text-base">
                      A: An apostille is a form of document authentication used for countries that are members of the Hague Apostille Convention. Document legalization is required for countries that are not members of the Hague Convention and involves additional processing through the appropriate embassy or consulate after state or federal certification.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      Q: When do I need an apostille for my documents?
                    </p>
                    <p className="text-foreground text-base">
                      A: You need an apostille when a document issued in the United States is intended for use in a foreign country that is a member of the Hague Apostille Convention. Common examples include birth certificates, marriage certificates, diplomas, powers of attorney, and corporate documents.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      Q: Can U.S. documents be used internationally without an apostille or legalization?
                    </p>
                    <p className="text-foreground text-base">
                      A: No. Most foreign governments require U.S. documents to be authenticated through an apostille or legalization process before they are accepted for legal, educational, immigration, or business purposes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      Q: Do apostille requirements vary by country?
                    </p>
                    <p className="text-foreground text-base">
                      A: Yes. Apostille and legalization requirements are country-specific. Each country has its own rules regarding document types, translations, notarization standards, and whether an apostille or full legalization is required. Using incorrect processing can result in document rejection.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      Q: Are apostille services the same as notary services?
                    </p>
                    <p className="text-foreground text-base">
                      A: No. Notarization is often only one step in the apostille or legalization process. Apostille services involve document authentication by a state or federal authority and, in some cases, additional embassy or consulate processing.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      Q: Can I obtain an apostille by mail if I am not located in Los Angeles?
                    </p>
                    <p className="text-foreground text-base">
                      A: Yes. Mail-in apostille services are available for clients throughout California and across the United States, depending on the issuing authority and document type.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-base font-semibold mb-1">
                      Q: Do you assist with both Hague and non-Hague countries?
                    </p>
                    <p className="text-foreground text-base">
                      A: Yes. We assist with apostille services for Hague Convention countries and document legalization for non-Hague countries, including countries in Asia, the Middle East, Europe, and Latin America.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Contact
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-base">
                    Phone / Text: <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">(626) 590-3560</a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-base">
                    Email: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-foreground text-base font-semibold">WeChat:</span>
                  <span className="text-foreground text-base">USANotaryApostille</span>
                </div>
              </div>
            </div>
            <p className="text-foreground text-sm mt-4 italic">
              Mobile Service Disclaimer: Appointment required.
            </p>
          </div>

          {/* Internal Links Section */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-5">
              <h3 className="text-xl font-bold text-foreground mb-3">Internal Links</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/apostille" className="text-primary hover:underline font-semibold">
                  Apostille Services
                </Link>
                <span className="text-foreground">|</span>
                <Link href="/apostille/mail-in-apostille-services" className="text-primary hover:underline font-semibold">
                  Mail-In Apostille Services
                </Link>
                <span className="text-foreground">|</span>
                <Link href="/international-apostille" className="text-primary hover:underline font-semibold">
                  International Apostille Services
                </Link>
                <span className="text-foreground">|</span>
                <Link href="/mobile-notary-apostille-los-angeles-ca" className="text-primary hover:underline font-semibold">
                  Los Angeles Mobile Notary & Apostille Services
                </Link>
              </div>
            </div>
          </div>

          {/* Google Reviews */}
          <GoogleReviews />

          {/* CTA Section */}
          <div className="bg-white py-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">{t.readyToStart}</h2>
            <p className="text-base lg:text-lg text-foreground/90">
              {t.callOrTextLabel} <a href="tel:+16265903560" className="text-primary hover:underline font-semibold">(626) 590-3560</a>, 7 days a week or email to: <a href="mailto:Kathryn@KathrynTong.com" className="text-primary hover:underline font-semibold">Kathryn@KathrynTong.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

