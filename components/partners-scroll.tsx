"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Ethiopian Soccer Community",
    logo: "/ball.jpg",
    description: "Official Fantasy Partner",
    color: "from-purple-600 to-pink-600",
  },
  {
    name: "Qmem Cloud",
    logo: "/cloud.jpg",
    description: "Cloud Partner",
    color: "from-blue-600 to-cyan-600",
  },
  {
    name: "Football Analytics Hub",
    logo: "/ana.jpg",
    description: "Data Analytics Partner",
    color: "from-green-600 to-emerald-600",
  },
  {
    name: "Global Sports Network",
    logo: "/news.jpg",
    description: "Broadcasting Partner",
    color: "from-yellow-600 to-orange-600",
  },
];

// Duplicate the array to create seamless infinite scroll
const duplicatedPartners = [...partners, ...partners, ...partners];

export function PartnersScroll() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      {/* Gradient Overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-10" />

      {/* Infinite Scrolling Container */}
      <motion.div
        className="flex space-x-12 justify-center" // Increased spacing and centered
        animate={{
          x: [0, -3200], // Adjusted for larger cards (64 * 12 cards + spacing)
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 60, // Kept for smooth scrolling
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
            <div className="relative w-64 h-36 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
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
              <div className="relative z-10 h-full flex flex-col items-center bg-transparent justify-center p-4">
                {/* Partner Name (Always Visible, Centered) */}
                <motion.h3
                  className="text-base font-semibold text-gray-800 dark:text-gray-200 text-center absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 w-full px-4"
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {partner.name}
                </motion.h3>

                {/* Logo and Description (Visible on Hover) */}
                <motion.div
                  className="flex flex-col items-center justify-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8, y: 10 }}
                  whileHover={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative mb-2">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={320} // Increased for better visibility
                      height={48}
                      className="object-contain rounded-lg filter group-hover:brightness-110 transition-all duration-300"
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
                    className="text-sm text-gray-500 dark:text-gray-400 text-center font-medium"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {partner.description}
                  </motion.p>
                </motion.div>
              </div>

              {/* Corner Accent */}
              <motion.div
                className={`absolute top-0 right-0 w-0 h-0 border-l-[24px] border-l-transparent border-t-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{
                  borderTopColor: partner.color.includes("white")
                    ? "#22c55e"
                    : "#84cc16",
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
  );
}
