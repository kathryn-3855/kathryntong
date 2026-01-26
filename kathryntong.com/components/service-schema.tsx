"use client"

interface ServiceSchemaProps {
  serviceName: string
  description: string
  serviceType?: string
}

export default function ServiceSchema({ 
  serviceName, 
  description,
  serviceType 
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Kathryn's Mobile Notary & Apostille",
      "telephone": "(626) 590-3560",
      "url": "https://kathrynsmobilenotary.com",
      "email": "Kathryn@KathrynTong.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Los Angeles County"
    },
    "serviceType": serviceType || serviceName,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://kathrynsmobilenotary.com",
      "servicePhone": "(626) 590-3560"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  )
}

