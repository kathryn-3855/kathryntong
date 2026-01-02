"use client"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"
import { useTranslations } from "@/lib/use-translations"

export default function CulverCityCityPageClient() {
  const t = useTranslations()
  
  const culverCityData = {
    cityName: t.cityCulverCity,
    cityState: "CA",
    description: t.cityDescCulverCity,
    imagePath: "/images/cities/culver-city.jpg",
    imageAlt: "Culver City with mobile notary services",
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
    surroundingAreas: [t.areaMarVista, t.areaMarinaDelRey],
    popularSectors: [t.sectorCC1, t.sectorCC2, t.sectorCC3],
  }

  return <CityPage {...culverCityData} />
}

