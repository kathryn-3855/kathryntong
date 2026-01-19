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
        // Ensure widget is visible on mobile
        if (widget) {
          const widgetElement = widget as HTMLElement
          widgetElement.style.display = 'block'
          widgetElement.style.visibility = 'visible'
          widgetElement.style.width = '100%'
          widgetElement.style.maxWidth = '100%'
        }
      }
    }

    // Check periodically after script loads
    const interval = setInterval(checkAndMoveWidget, 500)
    setTimeout(() => clearInterval(interval), 10000) // Stop checking after 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className="mb-2 w-full overflow-x-auto" 
      id="google-reviews-wrapper" 
      style={{ 
        position: 'relative', 
        minHeight: '200px',
        display: 'block',
        visibility: 'visible',
        width: '100%',
        maxWidth: '100%'
      }}
    >
      <div 
        id="ti-widget-container-042341d620001924e5261a9e078" 
        style={{ 
          position: 'relative', 
          width: '100%',
          maxWidth: '100%',
          display: 'block',
          visibility: 'visible',
          overflow: 'visible'
        }}
      ></div>
      <Script
        id="trustindex-loader"
        src="https://cdn.trustindex.io/loader.js?042341d620001924e5261a9e078"
        strategy="lazyOnload"
        onLoad={() => {
          // Force widget to stay in container and ensure mobile visibility
          setTimeout(() => {
            const container = document.getElementById('ti-widget-container-042341d620001924e5261a9e078')
            const wrapper = document.getElementById('google-reviews-wrapper')
            if (container && wrapper) {
              const widgets = wrapper.querySelectorAll('[data-ti-widget-id], .ti-widget')
              widgets.forEach(widget => {
                if (widget.parentElement !== container) {
                  container.appendChild(widget)
                }
                // Ensure mobile visibility
                const widgetElement = widget as HTMLElement
                widgetElement.style.display = 'block'
                widgetElement.style.visibility = 'visible'
                widgetElement.style.width = '100%'
                widgetElement.style.maxWidth = '100%'
                // Remove any mobile-hiding styles
                widgetElement.classList.remove('hidden')
                widgetElement.style.setProperty('display', 'block', 'important')
              })
              // Also check for any TrustIndex iframes
              const iframes = container.querySelectorAll('iframe')
              iframes.forEach(iframe => {
                iframe.style.width = '100%'
                iframe.style.maxWidth = '100%'
                iframe.style.display = 'block'
              })
            }
          }, 1000)
        }}
      />
    </div>
  )
}

