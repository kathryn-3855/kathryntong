"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, Building2 } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

export default function ApostilleClientPage() {
  const t = useTranslations()

  // Page content updated with new structure and content


  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.apostilleAndLegalizationServices}
            </h1>
            <div className="text-lg text-foreground/90 max-w-4xl mx-auto leading-relaxed">
              {t.apostilleIntroParagraph.split('\n').map((line, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Document Categories Section */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">{t.mostCommonDocuments}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Documents */}
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-foreground/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{t.personalDocumentsCategory}</h3>
                    <p className="text-sm text-foreground/80">{t.commonlyNeededPersonal}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {[
                    t.docBirthCertificates,
                    t.docMarriageCertificates,
                    t.docDeathCertificates,
                    t.docDivorceDecrees,
                    t.docMedicalRecords,
                    t.docAffidavits,
                    t.docPowerOfAttorney,
                    t.docAdoptionPapers,
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-sm text-foreground">{doc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Documents */}
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-foreground/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{t.businessDocumentsCategory}</h3>
                    <p className="text-sm text-foreground/80 mb-3">{t.commonlyNeededBusiness}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {[
                    t.docArticlesOfIncorporation,
                    t.docCertificateOfFormation,
                    t.docCertificatesOfGoodStanding,
                    t.docCorporateResolutions,
                    t.docContractsAgreements,
                    t.docTrademarksPatentAssignments,
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-sm text-foreground">{doc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Apostille Certification & Legalization Services Section */}
          <div className="mb-10">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Apostille Certification */}
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-4">{t.apostilleCertificationTitle}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm">{t.apostilleCertificationPoint1}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm">{t.apostilleCertificationPoint2}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm">{t.apostilleCertificationPoint3}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm">{t.apostilleCertificationPoint4}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm">{t.apostilleCertificationPoint5}</p>
                  </li>
                </ul>
              </div>

              {/* Legalization Services */}
              <div className="border border-foreground/30 rounded-lg p-6 bg-foreground/10">
                <h3 className="text-xl font-bold text-foreground mb-2">{t.legalizationServicesTitle}</h3>
                <p className="text-sm text-foreground/80 mb-4">{t.legalizationServicesSubtitle}</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm">{t.legalizationServicesPoint1}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm">{t.legalizationServicesPoint2}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm">{t.legalizationServicesPoint3}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm">{t.legalizationServicesPoint4}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <p className="text-foreground text-sm">{t.legalizationServicesPoint5}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-foreground/20 border border-foreground/30 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">{t.importantKeyPoints}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">{t.keyPointNotarization}</h4>
                <p className="text-foreground/90">{t.notarizationKeyPoint}</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">{t.keyPointCertifiedCopies}</h4>
                <p className="text-foreground/90">{t.certifiedCopiesKeyPoint}</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">{t.keyPointFederalDocuments}</h4>
                <p className="text-foreground/90">{t.federalDocumentsKeyPoint}</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">{t.keyPointDocumentRequirements}</h4>
                <p className="text-foreground/90">{t.documentRequirementsKeyPoint}</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">{t.unsureAboutDocument}</h2>
            <p className="mb-6 max-w-2xl mx-auto text-white">{t.bilingualStaff}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16265903560"
                className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition"
              >
                {t.callNumber}
              </a>
              <a
                href="mailto:Kathryn@CAMobileApostille.com"
                className="inline-block border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition"
              >
                {t.emailUs}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
