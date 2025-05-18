"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Funktion für sanftes Scrollen
    const handleSmoothScroll = (e: MouseEvent) => {
      // Prüfen, ob das geklickte Element ein Link mit einem Hash ist
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (!link) return

      const href = link.getAttribute("href")

      // Nur für interne Links mit Hash (z.B. #menu, #contact)
      if (href && href.startsWith("#")) {
        e.preventDefault()

        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Sanftes Scrollen mit Animation
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Offset für die fixierte Navbar
            behavior: "smooth",
          })

          // Optional: URL aktualisieren
          history.pushState(null, "", href)
        }
      }
    }

    // Event-Listener hinzufügen
    document.addEventListener("click", handleSmoothScroll)

    // Event-Listener entfernen beim Cleanup
    return () => {
      document.removeEventListener("click", handleSmoothScroll)
    }
  }, [])

  return null
}
