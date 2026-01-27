"use client"

export default function ContactPageSchema() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Kathryn's Mobile Notary & Apostille",
      "url": "https://www.kathrynsmobilenotary.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-626-590-3560",
          "contactType": "customer service",
          "areaServed": {
            "@type": "City",
            "name": "Los Angeles County"
          },
          "availableLanguage": ["English"]
        },
        {
          "@type": "ContactPoint",
          "email": "Kathryn@KathrynTong.com",
          "contactType": "customer service",
          "areaServed": {
            "@type": "City",
            "name": "Los Angeles County"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
    />
  )
}

