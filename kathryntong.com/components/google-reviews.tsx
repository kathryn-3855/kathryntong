"use client"

import Script from "next/script"

export default function GoogleReviews() {
  return (
    <div className="mb-8">
      <div id="ti-widget-container-042341d620001924e5261a9e078"></div>
      <Script
        src="https://cdn.trustindex.io/loader.js?042341d620001924e5261a9e078"
        strategy="lazyOnload"
        defer
        async
      />
    </div>
  )
}

