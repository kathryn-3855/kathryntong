"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ApostilleClientPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Apostille & Embassy Legalization
            </h1>
          </div>

          {/* Apostille Specialist Section */}
          <div className="mb-20">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-8 mb-8">
              <p className="text-foreground text-base leading-relaxed mb-6">
                You need an Apostille Specialist because they simplify the complex, time-consuming process of getting your documents (like birth certs, diplomas, or business contracts) certified for use in foreign countries, ensuring they meet specific international standards to avoid costly rejections, especially for big life events like studying abroad, international adoption, or global business. They act as experts, managing the paperwork and submissions to government offices (like the Secretary of State and Department of State) so you don't have to.
              </p>
              
              <div className="mt-8 mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Key Reasons to Use an Apostille Specialist:</h3>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Expertise & Efficiency:</strong> We know the exact requirements of different countries and government agencies, preventing errors and delays.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Stress Reduction:</strong> We handle running around, form-filling, and submission, saving you significant time and frustration.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Risk Mitigation:</strong> We ensure documents are formatted correctly and meet legal standards, reducing the chance of rejection by foreign authorities.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Handles Various Documents:</strong> We specialize in personal (birth/marriage certs, diplomas), educational, and business (contracts, incorporation) documents.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Follow up on the entire process from beginning to end,</strong> making sure that your documents are ready within the specified timeframe.</p>
                  </li>
                </ul>
              </div>

              <div className="mt-8 mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Common Scenarios Requiring an Apostille:</h3>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Personal:</strong> Studying abroad, international adoption, marriage abroad, immigration, or settling foreign estates.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Business:</strong> Expanding operations, hiring international staff, or conducting cross-border legal matters.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm"><strong>Legal:</strong> Using Powers of Attorney or court documents in another country.</p>
                  </li>
                </ul>
              </div>

              <p className="text-foreground text-base leading-relaxed mt-6">
                In essence, an Apostille Specialist is your guide through the bureaucratic maze, turning a potentially frustrating ordeal into a smooth, compliant process.
              </p>
            </div>
          </div>

          {/* When Do You Need Embassy Legalization Section */}
          <div className="mb-20">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">When Do You Need Embassy Legalization (Apostille vs Legalization)?</h2>
              
              <p className="text-foreground text-base leading-relaxed mb-6">
                Many people confuse Apostille certification with Embassy Legalization, but they serve different purposes:
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-3">• Apostille Certification</h3>
                <p className="text-foreground text-sm leading-relaxed mb-4">
                  This is a streamlined authentication process used for countries that are members of the Hague Apostille Convention <a href="https://www.hcch.net/en/instruments/conventions/specialised-sections/apostille" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">https://www.hcch.net/en/instruments/conventions/specialised-sections/apostille</a>. An apostille for documents certifies the validity of a signature or seal, making the document legally recognized in over 180 countries without further embassy verification.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-3">• Embassy Legalization</h3>
                <p className="text-foreground text-sm leading-relaxed mb-4">
                  For countries not part of the Hague Convention, additional verification is required. This process involves multiple steps, including notarization, state apostille, U.S. Dept of State authentication, and embassy legalization.
                </p>
              </div>

              <p className="text-foreground text-base leading-relaxed">
                Understanding whether you need apostille certification or full embassy legalization depends on the country where your document will be used.
              </p>
            </div>
          </div>

          {/* Embassy Legalization Specialist Section */}
          <div className="mb-20">
            <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-8 mb-8">
              <p className="text-foreground text-base leading-relaxed mb-6">
                We are experts in navigating this complex, multi-step process of authenticating documents (like birth certs, diplomas, commercial agreements) for foreign countries, saving you immense time, stress, and costly errors by handling intricate procedures with embassies/consulates, ensuring compliance with specific country rules, and preventing rejections for international business, study, or immigration.
              </p>
              
              <div className="mt-8 mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Key Reasons to Use an Embassy Legalization Specialist:</h3>
                <ol className="space-y-3 ml-4 list-decimal">
                  <li className="flex items-start gap-3">
                    <span className="text-foreground text-sm mt-2 flex-shrink-0">1.</span>
                    <p className="text-foreground text-sm"><strong>Complexity & Expertise:</strong> The process involves different agencies (state, federal, embassy/consulate) with varying, country-specific rules, which specialists know inside-out, unlike the average person.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground text-sm mt-2 flex-shrink-0">2.</span>
                    <p className="text-foreground text-sm"><strong>Time Savings:</strong> We handle long waits, multiple trips, and coordination, preventing delays that could derail your plans (e.g., missing a job start date).</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground text-sm mt-2 flex-shrink-0">3.</span>
                    <p className="text-foreground text-sm"><strong>Error Prevention:</strong> One mistake can lead to rejection and starting over; specialists ensure documents are prepared, notarized, and authenticated correctly the first time.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground text-sm mt-2 flex-shrink-0">4.</span>
                    <p className="text-foreground text-sm"><strong>Logistical Management:</strong> We manage secure shipping and liaison with agencies, especially for non-Hague Convention countries requiring embassy seals, saving you travel and stress.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground text-sm mt-2 flex-shrink-0">5.</span>
                    <p className="text-foreground text-sm"><strong>Document Types:</strong> We handle everything from birth/marriage certificates for residency to educational degrees for study, and corporate documents for business.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground text-sm mt-2 flex-shrink-0">6.</span>
                    <p className="text-foreground text-sm"><strong>Specific Country Needs:</strong> For non-Apostille countries (like Vietnam, Qatar, Egypt, UAE), embassy legalization is mandatory, and our specialists know these intricate steps.</p>
                  </li>
                </ol>
              </div>

              <p className="text-foreground text-base leading-relaxed mt-6">
                In short, an Embassy Legalization Specialist makes the daunting, bureaucracy-heavy task of getting foreign documents accepted smooth, fast, and reliable, allowing you to focus on your move, studies, or business.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Need Help with Apostille or Legalization?</h2>
            <p className="mb-6 max-w-2xl mx-auto text-white">Contact us for expert guidance on your document authentication needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16265903560"
                className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition"
              >
                Call: 626.590.3560
              </a>
              <a
                href="mailto:Kathryn@CAMobileApostille.com"
                className="inline-block border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
