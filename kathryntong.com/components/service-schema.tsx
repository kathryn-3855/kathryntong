"use client"

interface ServiceSchemaProps {
  serviceName: string
  description: string
  serviceType?: string
  areaServed?: string | string[]
}

export default function ServiceSchema({ 
  serviceName, 
  description,
  serviceType,
  areaServed
}: ServiceSchemaProps) {
  // Handle areaServed - can be string, array, or default to Los Angeles County
  let areaServedValue: any = {
    "@type": "City",
    "name": areaServed || "Los Angeles County"
  }
  
  // If areaServed is an array, create multiple areaServed entries
  if (Array.isArray(areaServed)) {
    areaServedValue = areaServed.map(area => ({
      "@type": "City",
      "name": area
    }))
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Kathryn's Mobile Notary & Apostille",
      "telephone": "+1-626-590-3560",
      "url": "https://www.kathrynsmobilenotary.com",
      "email": "Kathryn@KathrynTong.com"
    },
    "areaServed": areaServedValue,
    "serviceType": serviceType || serviceName,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.kathrynsmobilenotary.com",
      "servicePhone": "+1-626-590-3560"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  )
}

