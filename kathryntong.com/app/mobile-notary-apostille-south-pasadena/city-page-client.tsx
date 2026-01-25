"use client"
import CityPage from "../mobile-notary-apostille-los-angeles-ca/city-page"
import { useTranslations } from "@/lib/use-translations"

export default function SouthPasadenaCityPageClient() {
  const t = useTranslations()
  
  const southPasadenaData = {
    cityName: t.citySouthPasadena,
    cityState: "CA",
    description: t.cityDescSouthPasadena,
    imagePath: "/images/cities/south-pasadena.jpg",
    imageAlt: "South Pasadena with mobile notary services",
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
    surroundingAreas: [t.areaHighlandPark, t.areaEagleRock],
    popularSectors: [t.sectorSP1, t.sectorSP2, t.sectorSP3, t.sectorSP4],
  }

  return <CityPage {...southPasadenaData} />
}




