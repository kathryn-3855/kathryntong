"use client"
import CityPage from "./city-page"
import { useTranslations } from "@/lib/use-translations"

export default function LosAngelesCityPageClient() {
  const t = useTranslations()
  
  const losAngelesData = {
    cityName: t.cityLosAngeles,
    cityState: "CA",
    description: t.cityDescLosAngeles,
    imagePath: "/images/cities/los-angeles.jpg",
    imageAlt: "Los Angeles skyline with mobile notary services",
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
    surroundingAreas: [
      t.areaWestLosAngeles,
      t.areaCentralLosAngeles,
      t.areaKoreatown,
      t.areaMidWilshire,
      t.areaSilverlake,
      t.areaVernon,
      t.areaCommerce,
    ],
    popularSectors: [
      t.sectorLA1,
      t.sectorLA2,
      t.sectorLA3,
      t.sectorLA4,
      t.sectorLA5,
    ],
  }

  return <CityPage {...losAngelesData} />
}

