import type { Metadata } from "next"
import AboutClientPage from "./about-client-page"
import LocalBusinessSchema from "@/components/local-business-schema"
import AboutPageSchema from "@/components/about-page-schema"

export const metadata: Metadata = {
  title: "About Kathryn - Mobile Notary Professional",
  description:
    "Learn about Kathryn's 10+ years of notary experience, credentials, and commitment to professional service excellence.",
  keywords: "about notary, notary experience, professional credentials, notary public california",
}

export default function AboutPage() {
  return (
    <>
      <LocalBusinessSchema />
      <AboutPageSchema />
      <AboutClientPage />
    </>
  )
}
