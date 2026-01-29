"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleReviews from "@/components/google-reviews"
import { CheckCircle, Phone, Mail, ArrowRight, Globe } from "lucide-react"
import Link from "next/link"

export default function InternationalApostilleClientPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              International Apostille & Document Legalization Services
            </h1>
          </div>

          {/* Introduction Section */}
          <div className="mb-6">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Documents intended for use outside the United States must meet the legal requirements of the destination country. Apostille and legalization rules vary by country, and using the wrong process can result in document rejection, delays, or costly resubmissions.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-3">
                Some countries, such as Taiwan, require document authentication rather than a Hague Apostille.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                Kathryn's Mobile Notary & Apostille provides international apostille and document legalization coordination for personal, academic, immigration, and business documents used abroad. We assist clients throughout Los Angeles County and nationwide via secure mail-in service.
              </p>
            </div>
          </div>

          {/* Hague vs. Non-Hague Countries Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Hague vs. Non-Hague Countries — Why It Matters
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                The first and most important step is determining whether your destination country is a member of the Hague Apostille Convention.
              </p>
              
              <div className="mb-3">
                <h3 className="text-xl font-bold text-foreground mb-2">Hague Apostille Countries</h3>
                <ul className="space-y-1.5 mb-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span className="text-foreground text-base">Accept a standard apostille issued by a U.S. Secretary of State or federal authority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span className="text-foreground text-base">No embassy or consulate legalization required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span className="text-foreground text-base">Generally faster and more streamlined</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Non-Hague Countries</h3>
                <ul className="space-y-1.5 mb-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span className="text-foreground text-base">Do not accept standard apostilles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <div>
                      <span className="text-foreground text-base">Require a multi-step legalization process, which may include:</span>
                      <ul className="ml-5 mt-1.5 space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">o</span>
                          <span className="text-foreground text-base">State or federal authentication</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">o</span>
                          <span className="text-foreground text-base">Additional government certification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">o</span>
                          <span className="text-foreground text-base">Embassy or consulate legalization</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-foreground text-base leading-relaxed font-semibold">
                Applying the wrong process can invalidate your documents. We verify the correct procedure before submission.
              </p>
            </div>
          </div>

          {/* Why Country-Specific Rules Are Critical Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Why Country-Specific Rules Are Critical
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Each country has its own requirements regarding:
              </p>
              <ul className="space-y-1.5 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Accepted document types</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Original vs. certified copy rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Notarization requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Translation requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Validity periods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Mail-in eligibility</span>
                </li>
              </ul>
              <p className="text-foreground text-base leading-relaxed">
                For this reason, we provide country-specific guidance for high-volume destinations to ensure accuracy and compliance.
              </p>
            </div>
          </div>

          {/* Popular Destination Countries Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Popular Destination Countries We Frequently Handle
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                The following countries represent the highest volume of apostille and legalization requests from U.S. clients, particularly in California. Each destination has its own dedicated page with detailed requirements. For other countries' specific requirements, please call or email us for questions and details.
              </p>
              
              <div className="space-y-3">
                <Link href="/international-apostille/china" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">China</h3>
                  <p className="text-foreground text-base">
                    Hague Apostille Convention member (as of November 2023). Apostille only for eligible documents.
                  </p>
                </Link>

                <Link href="/international-apostille/taiwan" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">Taiwan</h3>
                  <p className="text-foreground text-base">
                    Non-Hague destination with document-specific authentication rules depending on use.
                  </p>
                </Link>

                <Link href="/international-apostille/hong-kong" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">Hong Kong</h3>
                  <p className="text-foreground text-base">
                    Hague Apostille Convention member. Apostille only; no embassy legalization required.
                  </p>
                </Link>

                <Link href="/international-apostille/mexico" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">Mexico</h3>
                  <p className="text-foreground text-base">
                    Hague member. Apostille only for most civil, academic, and legal documents.
                  </p>
                </Link>

                <Link href="/international-apostille/south-korea" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">South Korea</h3>
                  <p className="text-foreground text-base">
                    Hague member. Commonly requested for employment, education, and background checks.
                  </p>
                </Link>

                <Link href="/international-apostille/philippines" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">Philippines</h3>
                  <p className="text-foreground text-base">
                    Hague member. Apostille only for immigration, family, and citizenship-related documents.
                  </p>
                </Link>

                <Link href="/international-apostille/japan" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">Japan</h3>
                  <p className="text-foreground text-base">
                    Hague member. Apostille only for personal, academic, and business documents.
                  </p>
                </Link>

                <Link href="/international-apostille/saudi-arabia" className="block border-l-4 border-primary pl-3 hover:bg-foreground/5 transition rounded-r">
                  <h3 className="text-lg font-bold text-foreground mb-1">Saudi Arabia</h3>
                  <p className="text-foreground text-base">
                    Hague member. Apostille only for personal, academic, and business documents.
                  </p>
                </Link>
              </div>

              <p className="text-foreground text-base mt-3 flex items-center gap-2">
                <span>👉</span>
                <span>Please select your destination country from the dropdown menu for detailed instructions.</span>
              </p>
            </div>
          </div>

          {/* Common International Document Types Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Common International Document Types
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                We regularly assist with apostille or legalization for:
              </p>
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
                  <span className="text-foreground text-base">Academic diplomas and transcripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Corporate and business documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span className="text-foreground text-base">Immigration and residency paperwork</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mail-In Apostille & Legalization Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Mail-In Apostille & Legalization Available
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <p className="text-foreground text-base leading-relaxed mb-3">
                Many international documents can be processed through our Mail-In Apostille Service, depending on document type and issuing authority.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-3">
                We confirm eligibility before you send documents to avoid delays or rejection.
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                <Link 
                  href="/apostille"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  👉 Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/apostille/mail-in-apostille-services"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  👉 Mail-In Apostille Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Why Clients Choose Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Why Clients Choose Kathryn's Mobile Notary & Apostille
            </h2>
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Certified Apostille Specialist (California)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Experience with Hague and non-Hague countries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">High-volume handling of China, Taiwan, and Hong Kong documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Mobile and mail-in convenience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-base">Clear communication and error prevention</span>
                </li>
              </ul>
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

          {/* Important Notice Section */}
          <div className="mb-6">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Important Notice
              </h2>
              <p className="text-foreground text-base leading-relaxed">
                International requirements change periodically. Final acceptance is determined by the receiving authority in the destination country. We provide guidance based on current requirements and best practices.
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
                Contact us today for expert international apostille and legalization services.
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

