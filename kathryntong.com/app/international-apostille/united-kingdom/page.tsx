import type { Metadata } from "next"
import UnitedKingdomApostilleClientPage from "./united-kingdom-client-page"
import LocalBusinessSchema from "@/components/local-business-schema"
import ServiceSchema from "@/components/service-schema"
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "United Kingdom Apostille Services | U.S. Document Apostille for U.K.",
  description:
    "Professional apostille services for U.S. documents used in the United Kingdom. Hague Apostille processing, common document guidance, and nationwide mail-in service available.",
  keywords:
    "United Kingdom apostille, UK apostille, England apostille, Scotland apostille, Wales apostille, Northern Ireland apostille, Hague Convention UK, UK document legalization, UK apostille services, U.S. documents UK",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kathrynsmobilenotary.com/international-apostille/united-kingdom",
  },
}

export default function UnitedKingdomApostillePage() {
  const ukFAQs = [
    {
      question: "Do U.S. documents need an apostille for use in the United Kingdom?",
      answer: "Yes. The United Kingdom is a member of the Hague Apostille Convention. U.S. documents must have a Hague Apostille to be legally recognized in England, Scotland, Wales, or Northern Ireland."
    },
    {
      question: "Is embassy or consulate legalization required for the U.K.?",
      answer: "No. Once a document has a valid Hague Apostille, U.K. embassy or consular legalization is not required."
    },
    {
      question: "Where is the apostille issued for U.K.-bound documents?",
      answer: "California-issued or California-notarized documents are apostilled by the California Secretary of State. Federal documents, such as FBI background checks, are apostilled by the U.S. Department of State."
    },
    {
      question: "What documents commonly require an apostille for the U.K.?",
      answer: "Common documents include birth, marriage, and death certificates; divorce decrees; powers of attorney; diplomas and academic records; business documents; and FBI background checks."
    },
    {
      question: "Do documents need to be notarized before apostille?",
      answer: "Some documents must be notarized before apostille, while others, such as certified vital records, must not be notarized. Each document should be reviewed before submission."
    },
    {
      question: "How long does it take to get an apostille for the U.K.?",
      answer: "Processing times vary based on the issuing authority and service level. Regular and expedited apostille options are available."
    },
    {
      question: "Can I mail in my documents for U.K. apostille services?",
      answer: "Yes. Most U.K. apostille requests qualify for mail-in apostille services, and documents may be submitted from anywhere in the United States."
    },
    {
      question: "Do U.K. authorities require certified translations?",
      answer: "Some U.K. institutions may require certified English translations depending on the document type and purpose."
    },
    {
      question: "Can you help if my documents were issued outside California?",
      answer: "Yes. Assistance is available for out-of-state and federal documents, depending on the issuing authority and document type."
    }
  ]

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema 
        serviceName="Apostille Services for Documents Used in the United Kingdom"
        description="Professional apostille services for U.S. documents used in the United Kingdom. Hague Apostille processing, common document guidance, and nationwide mail-in service available."
        serviceType="Apostille Services"
        areaServed="Los Angeles County"
      />
      <FAQSchema faqs={ukFAQs} />
      <UnitedKingdomApostilleClientPage />
    </>
  )
}

