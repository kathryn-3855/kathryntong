"use client"

export default function AboutPageSchema() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Kathryn's Mobile Notary & Apostille",
      "url": "https://www.kathrynsmobilenotary.com",
      "telephone": "+1-626-590-3560",
      "email": "Kathryn@KathrynTong.com",
      "description": "Certified Apostille Specialist providing accurate, mobile notary and California apostille services for individuals, businesses, and international clients.",
      "areaServed": {
        "@type": "City",
        "name": "Los Angeles County"
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
    />
  )
}

