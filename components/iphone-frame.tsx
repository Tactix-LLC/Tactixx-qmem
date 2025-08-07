"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface IPhoneFrameProps {
  children: ReactNode
  className?: string
}

export function IPhoneFrame({ children, className = "" }: IPhoneFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative mx-auto ${className}`}
      style={{ width: "220px", height: "440px" }}
    >
      {/* iPhone Frame */}
      <div className="relative w-full h-full">
        {/* Outer Frame */}
        <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
          {/* Screen Bezel */}
          <div className="absolute inset-2 bg-black rounded-[2.5rem] p-2">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-10"></div>

            {/* Screen */}
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-green-500 to-lime-500 flex items-center justify-between px-6 text-white text-sm font-medium z-20">
                <span>9:41</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 border border-white rounded-sm">
                    <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                  </div>
                  <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Content Area */}
              <div className="pt-12 h-full overflow-hidden">{children}</div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute left-0 top-20 w-1 h-8 bg-gray-700 rounded-r-sm"></div>
        <div className="absolute left-0 top-32 w-1 h-12 bg-gray-700 rounded-r-sm"></div>
        <div className="absolute left-0 top-48 w-1 h-12 bg-gray-700 rounded-r-sm"></div>
        <div className="absolute right-0 top-32 w-1 h-16 bg-gray-700 rounded-l-sm"></div>
      </div>
    </motion.div>
  )
}
