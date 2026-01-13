"use client"

import Script from "next/script"
import { useEffect } from "react"

export default function GoogleReviews() {
  useEffect(() => {
    // Ensure the widget stays in the container after script loads
    const checkAndMoveWidget = () => {
      const container = document.getElementById('ti-widget-container-042341d620001924e5261a9e078')
      if (container) {
        const widget = document.querySelector('[data-ti-widget-id]') || document.querySelector('.ti-widget')
        if (widget && widget.parentElement !== container) {
          container.appendChild(widget)
        }
      }
    }

    // Check periodically after script loads
    const interval = setInterval(checkAndMoveWidget, 500)
    setTimeout(() => clearInterval(interval), 10000) // Stop checking after 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mb-8 w-full" id="google-reviews-wrapper" style={{ position: 'relative', minHeight: '200px' }}>
      <div id="ti-widget-container-042341d620001924e5261a9e078" style={{ position: 'relative', width: '100%' }}></div>
      <Script
        id="trustindex-loader"
        src="https://cdn.trustindex.io/loader.js?042341d620001924e5261a9e078"
        strategy="lazyOnload"
        onLoad={() => {
          // Force widget to stay in container
          setTimeout(() => {
            const container = document.getElementById('ti-widget-container-042341d620001924e5261a9e078')
            const wrapper = document.getElementById('google-reviews-wrapper')
            if (container && wrapper) {
              const widgets = wrapper.querySelectorAll('[data-ti-widget-id], .ti-widget')
              widgets.forEach(widget => {
                if (widget.parentElement !== container) {
                  container.appendChild(widget)
                }
              })
            }
          }, 1000)
        }}
      />
    </div>
  )
}

