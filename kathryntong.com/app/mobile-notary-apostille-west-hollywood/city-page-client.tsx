"use client"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"
import { useTranslations } from "@/lib/use-translations"

export default function WestHollywoodCityPageClient() {
  const t = useTranslations()
  
  const westHollywoodData = {
    cityName: t.cityWestHollywood,
    cityState: "CA",
    description: t.cityDescWestHollywood,
    imagePath: "/images/cities/west-hollywood.jpg",
    imageAlt: "West Hollywood with mobile notary services",
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
    surroundingAreas: [t.areaHollywood, t.areaHollywoodHillsWest, t.areaEastHollywood, t.areaStudioCity],
    popularSectors: [t.sectorWH1, t.sectorWH2, t.sectorWH3],
  }

  return <CityPage {...westHollywoodData} />
}

