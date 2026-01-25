"use client"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"
import { useTranslations } from "@/lib/use-translations"

export default function SanMarinoCityPageClient() {
  const t = useTranslations()
  
  const sanMarinoData = {
    cityName: t.citySanMarino,
    cityState: "CA",
    description: t.cityDescSanMarino,
    imagePath: "/images/cities/san-marino.jpg",
    imageAlt: "San Marino with mobile notary services",
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
    surroundingAreas: [t.areaAlhambra, t.areaMontereyPark],
    popularSectors: [t.sectorSM2_1, t.sectorSM2_2, t.sectorSM2_3, t.sectorSM2_4],
  }

  return <CityPage {...sanMarinoData} />
}




