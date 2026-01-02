"use client"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"
import { useTranslations } from "@/lib/use-translations"

export default function ArcadiaCityPageClient() {
  const t = useTranslations()
  
  const arcadiaData = {
    cityName: t.cityArcadia,
    cityState: "CA",
    description: t.cityDescArcadia,
    imagePath: "/images/cities/arcadia.jpg",
    imageAlt: "Arcadia with mobile notary services",
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
    surroundingAreas: [t.areaTempleCity, t.areaSanGabriel, t.areaRosemead, t.areaMonrovia],
    popularSectors: [t.sectorA1, t.sectorA2, t.sectorA3, t.sectorA4, t.sectorA5],
  }

  return <CityPage {...arcadiaData} />
}

