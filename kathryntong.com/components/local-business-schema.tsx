"use client"

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Notary", "LegalService"],
    "name": "Kathryn's Mobile Notary & Apostille",
    "description": "Mobile Notary & Apostille Services - Serving Los Angeles County by appointment. No storefront location.",
    "serviceType": ["Mobile Notary & Apostille Services", "Legal Services", "Document Services"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Notary and Apostille Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Notary Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Apostille Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Document Legalization Services"
          }
        }
      ]
    },
    "telephone": "(626) 590-3560",
    "url": "https://kathrynsmobilenotary.com",
    "email": "Kathryn@KathrynTong.com",
    "areaServed": {
      "@type": "City",
      "name": "Los Angeles County"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "hoursAvailable": "By appointment only - Available 7 days a week",
    "priceRange": "$$"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}

