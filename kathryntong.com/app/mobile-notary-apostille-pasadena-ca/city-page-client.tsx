"use client"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"
import { useTranslations } from "@/lib/use-translations"

export default function PasadenaCityPageClient() {
  const t = useTranslations()
  
  const pasadenaData = {
    cityName: t.cityPasadena,
    cityState: "CA",
    description: t.cityDescPasadena,
    imagePath: "/images/cities/pasadena.jpg",
    imageAlt: "Pasadena with mobile notary services",
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
    surroundingAreas: [t.areaEastPasadena, t.areaSouthPasadena, t.areaGlendale, t.areaLaCanada],
    popularSectors: [t.sectorP1, t.sectorP2, t.sectorP3, t.sectorP4],
  }

  return <CityPage {...pasadenaData} />
}

