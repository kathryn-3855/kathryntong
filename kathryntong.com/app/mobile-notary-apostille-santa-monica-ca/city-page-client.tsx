"use client"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"
import { useTranslations } from "@/lib/use-translations"

export default function SantaMonicaCityPageClient() {
  const t = useTranslations()
  
  const santaMonicaData = {
    cityName: t.citySantaMonica,
    cityState: "CA",
    description: t.cityDescSantaMonica,
    imagePath: "/images/cities/santa-monica.jpg",
    imageAlt: "Santa Monica with mobile notary services",
    services: [
      t.serviceMobileNotary,
      t.serviceStateFederalApostille,
      t.serviceEmbassyLegalization,
      t.servicePowerOfAttorney,
      t.serviceTrustWillHealthcare,
      t.serviceInternationalBusinessEducation,
      t.serviceSameDayExpedited,
    ],
    benefits: [],
    surroundingAreas: [t.areaPacificPalisades, t.areaVenice],
    popularSectors: [t.sectorSM1, t.sectorSM2, t.sectorSM3, t.sectorSM4],
  }

  return <CityPage {...santaMonicaData} />
}




