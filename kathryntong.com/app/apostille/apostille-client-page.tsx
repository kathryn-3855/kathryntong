"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, Globe, Building2, Users, Lock, AlertCircle } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

export default function ApostilleClientPage() {
  const t = useTranslations()

  const serviceCategories = [
    {
      icon: FileText,
      title: t.personalDocumentsCategory,
      description: t.commonlyNeededPersonal,
      documents: [
        t.docBirthCertificates,
        t.docMarriageCertificates,
        t.docDeathCertificates,
        t.docDivorceDecrees,
        t.docMedicalRecords,
        t.docAffidavits,
        t.docPowerOfAttorney,
        t.docAdoptionPapers,
      ],
    },
    {
      icon: Building2,
      title: t.businessDocumentsCategory,
      description: t.commonlyNeededBusiness,
      documents: [
        t.docArticlesOfIncorporation,
        t.docCertificateOfFormation,
        t.docCorporateResolutions,
        t.docContractsAgreements,
        t.docCertificatesOfGoodStanding,
        t.docTrademarksPatentAssignments,
      ],
    },
    {
      icon: Globe,
      title: t.academicDocumentsCategory,
      description: t.commonlyNeededAcademic,
      documents: [
        t.docDiplomas,
        t.docTranscripts,
        t.docDegreeCertificates,
        t.docTEFLCertificates,
      ],
    },
    {
      icon: Lock,
      title: t.federalDocumentsCategory,
      description: t.mustBeCertifiedCopies,
      documents: [
        t.docBackgroundChecks,
        t.docCourtOrders,
        t.docSocialSecurityAdmin,
        t.docUSPTODocuments,
        t.docDOJDocuments,
        t.docCertificatesOfNaturalization,
        t.docIRSDocuments,
        t.docFDACertificates,
        t.docCRBA,
        t.docUSDOSDocuments,
        t.docCertificateToForeignCountry,
      ],
    },
  ]

  const serviceTypes = [
    {
      icon: Globe,
      title: t.apostilleCertification,
      description: t.internationalDocumentAuthentication,
      details: [
        t.authenticatesDocuments,
        t.validInCountries,
        t.certifiedBySecretary,
        t.includesOfficialCertification,
        t.standardTwoFour,
        t.expeditedSameDay,
      ],
    },
    {
      icon: Users,
      title: t.legalizationServices,
      description: t.fullLegalDocumentProcessing,
      details: [
        t.multiStepAuthentication,
        t.secretaryOfState,
        t.embassyConsulateCoordination,
        t.documentTranslationSupport,
        t.internationalDeliveryOptions,
        t.expertGuidanceEntire,
      ],
    },
    {
      icon: AlertCircle,
      title: t.federalAuthentication,
      description: t.authenticationFederalGovernment,
      details: [
        t.fourToEightWeeksDepending,
        t.requiresAuthenticationState,
        t.specializedHandlingFBI,
        t.noNotarizationRequired,
        t.expertGuidanceDocument,
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.apostilleAndLegalizationServices}
            </h1>
            <p className="text-xl text-foreground/90 max-w-2xl mx-auto">{t.comprehensiveDocumentAuthentication}</p>
          </div>

          {/* Service Types Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">{t.ourServices}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {serviceTypes.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="border border-foreground/30 rounded-lg p-8 bg-foreground/10 hover:bg-foreground/20 transition"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-foreground/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                        <p className="text-sm text-foreground/80">{service.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                          <p className="text-foreground text-sm">{detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Document Categories Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">{t.mostCommonDocuments}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {serviceCategories.map((category) => {
                const Icon = category.icon
                return (
                  <div key={category.title} className="border border-foreground/30 rounded-lg p-8 bg-foreground/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-foreground/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                        <p className="text-sm text-foreground/80">{category.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {category.documents.map((doc) => (
                        <li key={doc} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                          <p className="text-sm text-foreground">{doc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
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
