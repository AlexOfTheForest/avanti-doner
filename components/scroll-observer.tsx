"use client"

import { useEffect } from "react"

export function ScrollObserver() {
  useEffect(() => {
    // Funktion zum Überprüfen, ob ein Element im Viewport ist
    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect()
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.7 && rect.bottom >= 0
    }

    // Funktion zum Markieren des aktiven Navigationspunkts
    const setActiveNavItem = () => {
      const sections = document.querySelectorAll("section[id]")
      const navItems = document.querySelectorAll("nav a")

      let currentSection = ""

      sections.forEach((section) => {
        if (isElementInViewport(section)) {
          section.classList.add("visible")
          currentSection = section.getAttribute("id") || ""
        }
      })

      navItems.forEach((item) => {
        const href = item.getAttribute("href")
        if (href && href === `#${currentSection}`) {
          item.classList.add("nav-active")
        } else {
          item.classList.remove("nav-active")
        }
      })
    }

    // Initial alle sichtbaren Sektionen markieren
    const initVisibleSections = () => {
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        if (isElementInViewport(section)) {
          section.classList.add("visible")
        }
      })

      // Home-Sektion immer sichtbar machen
      const homeSection = document.getElementById("home")
      if (homeSection) {
        homeSection.classList.add("visible")
      }

      setActiveNavItem()
    }

    // Event-Listener für Scroll-Events
    window.addEventListener("scroll", setActiveNavItem)

    // Initial ausführen
    initVisibleSections()

    // Cleanup
    return () => {
      window.removeEventListener("scroll", setActiveNavItem)
    }
  }, [])

  return null
}
