"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    name: "Premier League",
    logo: "/placeholder.svg?height=80&width=200&text=Premier League",
    description: "Official Fantasy Partner",
    color: "from-purple-600 to-pink-600",
  },
  {
    name: "ESPN",
    logo: "/placeholder.svg?height=80&width=200&text=ESPN",
    description: "Media Partner",
    color: "from-red-600 to-orange-600",
  },
  {
    name: "Sky Sports",
    logo: "/placeholder.svg?height=80&width=200&text=Sky Sports",
    description: "Broadcasting Partner",
    color: "from-blue-600 to-cyan-600",
  },
  {
    name: "FIFA",
    logo: "/placeholder.svg?height=80&width=200&text=FIFA",
    description: "Official Gaming Partner",
    color: "from-green-600 to-emerald-600",
  },
  {
    name: "Manchester United",
    logo: "/placeholder.svg?height=80&width=200&text=Man United",
    description: "Club Partner",
    color: "from-red-700 to-red-500",
  },
  {
    name: "Real Madrid",
    logo: "/placeholder.svg?height=80&width=200&text=Real Madrid",
    description: "Club Partner",
    color: "from-white to-gray-200",
  },
  {
    name: "Barcelona",
    logo: "/placeholder.svg?height=80&width=200&text=Barcelona",
    description: "Club Partner",
    color: "from-blue-800 to-red-600",
  },
  {
    name: "Bayern Munich",
    logo: "/placeholder.svg?height=80&width=200&text=Bayern Munich",
    description: "Club Partner",
    color: "from-red-600 to-blue-800",
  },
  {
    name: "Nike",
    logo: "/placeholder.svg?height=80&width=200&text=Nike",
    description: "Equipment Partner",
    color: "from-gray-900 to-gray-700",
  },
  {
    name: "Adidas",
    logo: "/placeholder.svg?height=80&width=200&text=Adidas",
    description: "Equipment Partner",
    color: "from-gray-800 to-blue-900",
  },
  {
    name: "Puma",
    logo: "/placeholder.svg?height=80&width=200&text=Puma",
    description: "Equipment Partner",
    color: "from-yellow-500 to-orange-600",
  },
  {
    name: "EA Sports",
    logo: "/placeholder.svg?height=80&width=200&text=EA Sports",
    description: "Gaming Partner",
    color: "from-blue-600 to-purple-600",
  },
]

// Duplicate the array to create seamless infinite scroll
const duplicatedPartners = [...partners, ...partners, ...partners]

export function PartnersScroll() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      {/* Gradient Overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-10" />

      {/* Infinite Scrolling Container */}
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -2400], // Adjust based on total width
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 60, // Slower for better readability
            ease: "linear",
          },
        }}
        style={{ width: "fit-content" }}
      >
        {duplicatedPartners.map((partner, index) => (
          <motion.div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 group cursor-pointer"
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className="relative w-48 h-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                initial={{ scale: 0, rotate: 45 }}
                whileHover={{ scale: 1.5, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                <div className="relative mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />

                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${partner.color} rounded-lg blur-lg opacity-0 group-hover:opacity-30 -z-10`}
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <motion.p
                  className="text-xs text-gray-500 dark:text-gray-400 text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {partner.description}
                </motion.p>
              </div>

              {/* Corner Accent */}
              <motion.div
                className={`absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{
                  borderTopColor: partner.color.includes("white") ? "#22c55e" : "#84cc16",
                }}
                initial={{ scale: 0, rotate: -45 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
