"use client"

export default function FAQSection() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6">
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="text-foreground text-base">
                  <strong>What is an apostille?</strong> An apostille is a government certification that authenticates a document for use in a foreign country that is a member of the Hague Apostille Convention.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="text-foreground text-base">
                  <strong>When do I need an apostille?</strong> You need an apostille when a foreign government, school, or institution requires proof that your U.S. document is legitimate.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="text-foreground text-base">
                  <strong>How long does an apostille take in California?</strong> Processing time varies. Same-day and expedited apostille services are available for eligible documents.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="text-foreground text-base">
                  <strong>Can you apostille immigration documents?</strong> Yes. We routinely assist with apostilles for immigration, dual citizenship, and overseas residency applications.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="text-foreground text-base">
                  <strong>Do you provide mobile notary services?</strong> Yes. We are a mobile notary and travel to your location throughout Los Angeles.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="text-foreground text-base">
                  <strong>Do you speak Chinese?</strong> Yes. Chinese-language assistance is available, and WeChat communication is supported.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
