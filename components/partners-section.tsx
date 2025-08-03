"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PartnersScroll } from "./partners-scroll";
import { Zap, Globe, Trophy, Star, Users, Target } from "lucide-react";

export function PartnersSection() {
  const stats = [
    {
      icon: <Globe className="w-8 h-8" />,
      number: "50+",
      label: "Global Partners",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "20+",
      label: "League Partners",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "100+",
      label: "Club Partners",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "15+",
      label: "Tech Partners",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const partnershipTypes = [
    {
      title: "Official League Partners",
      description:
        "Exclusive partnerships with major football leagues worldwide",
      icon: <Trophy className="w-12 h-12" />,
      gradient: "from-yellow-500 to-orange-500",
      features: [
        "Real-time data access",
        "Official player statistics",
        "Exclusive content",
      ],
    },
    {
      title: "Broadcasting Partners",
      description: "Media partnerships for comprehensive coverage and analysis",
      icon: <Globe className="w-12 h-12" />,
      gradient: "from-blue-500 to-purple-500",
      features: [
        "Live match coverage",
        "Expert analysis",
        "Exclusive interviews",
      ],
    },
    {
      title: "Technology Partners",
      description:
        "Cutting-edge technology integrations for enhanced user experience",
      icon: <Target className="w-12 h-12" />,
      gradient: "from-green-500 to-teal-500",
      features: [
        "AI-powered insights",
        "Advanced analytics",
        "Real-time updates",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <Zap className="w-4 h-4 mr-2" />
            Trusted Partners
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-lime-600 to-emerald-600 bg-clip-text text-transparent">
            Powered by the
            <br />
            <span className="relative">
              Best in Football
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-lime-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We collaborate with the world's leading football organizations,
            broadcasters, and technology companies to deliver the ultimate
            fantasy football experience.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Partners */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-20"
      >
        <PartnersScroll />
      </motion.div>

      <div className="container mx-auto px-4"></div>
    </section>
  );
}
