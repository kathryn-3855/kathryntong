"use client"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"
import { useTranslations } from "@/lib/use-translations"

export default function BeverlyHillsCityPageClient() {
  const t = useTranslations()
  
  const beverlyHillsData = {
    cityName: t.cityBeverlyHills,
    cityState: "CA",
    description: t.cityDescBeverlyHills,
    imagePath: "/images/cities/beverly-hills.jpg",
    imageAlt: "Beverly Hills with mobile notary services",
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
    surroundingAreas: [t.areaBelAir, t.areaBrentwood, t.areaBeverlyCrest],
    popularSectors: [t.sectorBH1, t.sectorBH2, t.sectorBH3, t.sectorBH4, t.sectorBH5],
  }

  return <CityPage {...beverlyHillsData} />
}




