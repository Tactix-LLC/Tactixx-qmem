"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  ArrowLeft,
  Target,
  Users,
  Zap,
  Shield,
  Brain,
  BarChart3,
  Globe,
  Smartphone,
  Crown,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FootballBackground } from "@/components/football-background";

export default function Features() {
  const mainFeatures = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Analytics",
      description:
        "Advanced machine learning algorithms analyze player performance, injury risks, and optimal team selections.",
      benefits: [
        "Predictive player scoring",
        "Injury risk assessment",
        "Form analysis",
        "Optimal captain suggestions",
      ],
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Advanced Tactics Engine",
      description:
        "Deploy sophisticated tactical strategies with our revolutionary formation and positioning system.",
      benefits: [
        "5 tactical formations",
        "Custom player roles",
        "Dynamic positioning",
        "Tactical power-ups",
      ],
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Real-Time Analytics",
      description:
        "Live match tracking with detailed statistics, heat maps, and performance insights.",
      benefits: [
        "Live score updates",
        "Player heat maps",
        "Performance metrics",
        "Comparative analysis",
      ],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Social Leagues",
      description:
        "Create and join leagues with friends, family, or compete in massive public tournaments.",
      benefits: [
        "Private leagues",
        "Public competitions",
        "Tournament modes",
        "Social features",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Platform",
      description: "Bank-level security for your data",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Leagues",
      description: "Compete with players worldwide",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First",
      description: "Perfect experience on any device",
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Premium Rewards",
      description: "Exclusive prizes and recognition",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Expert Insights",
      description: "Professional analysis and tips",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 dark:from-green-950 dark:via-lime-950 dark:to-emerald-950">
      <FootballBackground />

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-green-200 dark:border-green-800">
          <div className="container mx-auto px-4 py-6">
            <Link
              href="/"
              className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                Tactics PLC
              </span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <Target className="w-4 h-4 mr-2" />
                Revolutionary Features
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-lime-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
                Next-Level
                <br />
                <span className="relative">
                  Fantasy Football
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-lime-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Experience fantasy football like never before with cutting-edge
                features designed to give you the ultimate competitive
                advantage.
              </p>
            </motion.div>

            {/* Main Features */}
            <div className="space-y-20">
              {mainFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-lime-500 rounded-2xl flex items-center justify-center text-white mr-6">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                      {feature.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="border-green-200 dark:border-green-800 overflow-hidden shadow-2xl">
                        <CardContent className="p-0">
                          <Image
                            src={`/ai.svg`}
                            alt={feature.title}
                            width={600}
                            height={400}
                            className="w-full h-80 object-cover"
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                  Everything You Need to Win
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Comprehensive features designed for the modern fantasy manager
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {additionalFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 h-full">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
