"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  ArrowLeft,
  Download,
  Star,
  Smartphone,
  Monitor,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FootballBackground } from "@/components/football-background";

export default function DownloadPage() {
  const platforms = [
    {
      name: "iOS",
      icon: <Smartphone className="w-12 h-12" />,
      description: "iPhone and iPad",
      version: "Version 2.1.0",
      size: "45.2 MB",
      rating: "4.9",
      reviews: "12.5K",
      features: [
        "Face ID Support",
        "Apple Watch App",
        "Siri Shortcuts",
        "iOS 15+ Required",
      ],
    },
    {
      name: "Android",
      icon: <Smartphone className="w-12 h-12" />,
      description: "Android Phones and Tablets",
      version: "Version 2.1.0",
      size: "38.7 MB",
      rating: "4.8",
      reviews: "25.3K",
      features: [
        "Material Design",
        "Android Auto",
        "Widgets",
        "Android 8+ Required",
      ],
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance on all devices",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your data is protected with bank-level security",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cross-Platform",
      description: "Seamless experience across all your devices",
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
                <Download className="w-4 h-4 mr-2" />
                Get the App
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-lime-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
                Download
                <br />
                <span className="relative">
                  Tactics PLC
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-lime-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Get the ultimate fantasy football experience on all your
                devices. Available now on iOS, Android, and Web.
              </p>
            </motion.div>

            {/* Download Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              <Card className="border-green-200 dark:border-green-800 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    100+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Total Downloads
                  </div>
                </CardContent>
              </Card>
              <Card className="border-green-200 dark:border-green-800 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-lime-600 mb-2">
                    4.9★
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Average Rating
                  </div>
                </CardContent>
              </Card>
              <Card className="border-green-200 dark:border-green-800 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Daily Active Users
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Platform Cards */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                        {platform.icon}
                      </div>
                      <CardTitle className="text-2xl">
                        {platform.name}
                      </CardTitle>
                      <p className="text-gray-600 dark:text-gray-300">
                        {platform.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">
                          {platform.version}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {platform.size}
                        </span>
                      </div>

                      <div className="flex items-center justify-center space-x-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="font-semibold">
                            {platform.rating}
                          </span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">
                          {platform.reviews} reviews
                        </div>
                      </div>

                      <div className="space-y-2">
                        {platform.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-gray-600 dark:text-gray-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className="w-full bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 mt-6"
                        size="lg"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download for {platform.name}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                  Why Choose Our App?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Built with the latest technology for the best user experience
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
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
