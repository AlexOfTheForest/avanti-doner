"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Nur positive Bewertungen (4-5 Sterne)
const reviews = [
  {
    name: "Michael S.",
    stars: 5,
    text: "Sehr leckere Pizza und Döner! Das Essen ist immer frisch und die Lieferung schnell. Einer der besten in Leer.",
  },
  {
    name: "Laura K.",
    stars: 5,
    text: "Viele Leute erwähnen, dass sie hier guten Döner, gut zubereitete Pizza und schmackhafte döne Kebab bestellen können.",
  },
  {
    name: "Thomas B.",
    stars: 5,
    text: "Meine Lieblingspizzeria in Leer! Die Pizza ist immer perfekt und der Service ist freundlich und schnell.",
  },
  {
    name: "Sarah M.",
    stars: 4,
    text: "Gute Auswahl an Gerichten und faire Preise. Die Lieferung war pünktlich und das Essen noch heiß.",
  },
  {
    name: "Jan H.",
    stars: 5,
    text: "Tolle türkische Spezialitäten und die besten Döner in der Umgebung. Sehr zu empfehlen!",
  },
]

export function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Wechselt die Bewertung alle 5 Sekunden
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-zinc-800 p-6 rounded-lg h-[180px] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-600 flex items-center justify-center text-lg font-bold shrink-0">
              {reviews[currentIndex].name.charAt(0)}
            </div>
            <div>
              <div className="font-bold">{reviews[currentIndex].name}</div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < reviews[currentIndex].stars ? "text-yellow-400" : "text-zinc-500"} fill-current`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 text-sm">{reviews[currentIndex].text}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
        {reviews.map((_, index) => (
          <div key={index} className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-zinc-500"}`} />
        ))}
      </div>
    </div>
  )
}
