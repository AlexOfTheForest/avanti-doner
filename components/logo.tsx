"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Logo() {
  return (
    <div className="relative">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-32 h-16">
          <Image src="/images/avanti-logo-oval.png" alt="Avanti Logo" fill className="object-contain" />
        </div>
        <div className="text-xs text-gray-400 mt-1">Inh. A. Kalmaz</div>
      </motion.div>
    </div>
  )
}
