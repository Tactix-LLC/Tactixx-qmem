"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  Play,
  Download,
  Star,
  Users,
  Trophy,
  Target,
  Smartphone,
  Moon,
  Sun,
  ChevronDown,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FootballBackground } from "@/components/football-background";
import { PartnersSection } from "@/components/partners-section";

export default function FantasyFootballWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 dark:from-green-950 dark:via-lime-950 dark:to-emerald-950">
      <FootballBackground />
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-green-200 dark:border-green-800"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                Tactics™
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", href: "#home" },
                { name: "Features", href: "/features" },
                { name: "Download", href: "/download" },
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-4"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              {[
                { name: "Home", href: "#home" },
                { name: "Features", href: "/features" },
                { name: "Download", href: "/download" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Football Stadium Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-lime-900/60 to-emerald-900/80" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-first lg:order-first"
            >
              {/* Phone Mockup with Real Screenshot */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div
                  className="relative mx-auto"
                  style={{ width: "300px", height: "600px" }}
                >
                  {/* Phone Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
                    <div className="absolute inset-2 bg-black rounded-[2.5rem] p-2">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
                      <div className="w-full h-full rounded-[2rem] overflow-hidden">
                        <Image
                          src="/kuas.jpg"
                          alt="Tactix App Interface"
                          width={300}
                          height={600}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-last lg:order-last"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
              >
                Master Your
                <br />
                <span className="relative bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Fantasy Game
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-200 mb-8 max-w-lg"
              >
                Experience the ultimate fantasy football platform with advanced
                tactics, real-time analytics, and competitive gameplay that puts
                you in control.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center justify-center lg:justify-start space-x-8 mt-12"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-lime-400">20+</div>
                  <div className="text-sm text-gray-300">Active Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">4.9</div>
                  <div className="text-sm text-gray-300">App Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">50+</div>
                  <div className="text-sm text-gray-300">Daily Matches</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Why Choose Tactics PLC
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience fantasy football like never before with our
              cutting-edge platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Advanced Tactics",
                description:
                  "Deploy sophisticated strategies with our AI-powered recommendation engine",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Live Competitions",
                description:
                  "Join millions of players in real-time tournaments and leagues",
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Massive Rewards",
                description:
                  "Win big with our weekly prizes and seasonal championships",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
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
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* How to Play Section with Text Instructions */}
      <section
        id="how-to-play"
        className="py-20 bg-transparent backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Getting Started
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
              Master the Game
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn how to dominate your fantasy league with our comprehensive
              step-by-step guide
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mb-16"
            >
              {/* MacBook Pro Frame with Text Instructions */}
              <div className="relative bg-gray-800 rounded-t-xl p-2 shadow-2xl">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden min-h-[500px]">
                  {/* Browser-like interface with step-by-step instructions */}
                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <div className="flex-1 bg-white dark:bg-gray-700 rounded px-3 py-1 text-sm text-gray-600 dark:text-gray-300">
                        tacticsplc.com/how-to-play
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-8">
                    {/* Step-by-step instructions */}
                    {[
                      {
                        step: "01",
                        title: "Create Your Account",
                        description:
                          "Sign up with your email or social media account to get started",
                        details: [
                          "Choose a unique username that represents your tactical style",
                          "Verify your email address to secure your account",
                          "Complete your profile with your favorite team and position preferences",
                          "Set up your notification preferences for match updates",
                        ],
                      },
                      {
                        step: "02",
                        title: "Build Your Dream Team",
                        description:
                          "Select 11 players within the £100 million budget constraint",
                        details: [
                          "Choose 1 Goalkeeper, 3-5 Defenders, 3-5 Midfielders, 1-3 Forwards",
                          "Stay within the £100 million budget limit",
                          "Maximum 3 players from any single team",
                          "Consider player form, fixtures, and injury status",
                        ],
                      },
                      {
                        step: "03",
                        title: "Set Your Formation & Captain",
                        description:
                          "Deploy tactical formations and select your captain for double points",
                        details: [
                          "Choose from 5 formations: 3-4-3, 3-5-2, 4-3-3, 4-4-2, 4-5-1",
                          "Select your captain (2x points) and vice-captain (1.5x points if captain doesn't play)",
                          "Arrange your starting XI and bench players strategically",
                          "Use tactical boosts and power-ups when available",
                        ],
                      },
                      {
                        step: "04",
                        title: "Join Leagues & Compete",
                        description:
                          "Enter leagues with friends or compete in global tournaments",
                        details: [
                          "Create private leagues with friends, family, or colleagues",
                          "Join public leagues to compete with players worldwide",
                          "Participate in special tournaments and seasonal events",
                          "Track your progress on global and league leaderboards",
                        ],
                      },
                      {
                        step: "05",
                        title: "Manage Your Team Weekly",
                        description:
                          "Make transfers, adjust tactics, and optimize your squad each gameweek",
                        details: [
                          "Make up to 1 free transfer per gameweek (additional transfers cost 4 points)",
                          "Use your Wildcard to make unlimited free transfers twice per season",
                          "Monitor player prices and make strategic transfers to gain team value",
                          "Set your lineup before each gameweek deadline",
                        ],
                      },
                    ].map((instruction, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex gap-6"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {instruction.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                            {instruction.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                            {instruction.description}
                          </p>
                          <ul className="space-y-2">
                            {instruction.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detailIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: detailIndex * 0.1,
                                }}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300">
                                  {detail}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gray-300 dark:bg-gray-700 h-4 rounded-b-xl"></div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Build Your Team",
                  description:
                    "Select players within budget constraints and create your ultimate fantasy squad",
                },
                {
                  step: "02",
                  title: "Deploy Tactics",
                  description:
                    "Use our advanced tactical system to optimize formations and player positions",
                },
                {
                  step: "03",
                  title: "Compete & Win",
                  description:
                    "Join leagues, track performance, and climb the leaderboards for massive rewards",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Download Now
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                Get Tactics App Today!
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                Available on all platforms. Start your fantasy football journey
                now!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              {/* Custom App Store Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block group"
              >
                <div className="bg-black hover:bg-gray-800 transition-colors duration-300 rounded-xl px-6 py-3 flex items-center space-x-3 shadow-lg hover:shadow-xl">
                  {/* Apple Logo SVG */}
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-300 leading-tight">
                      Download on the
                    </div>
                    <div className="text-lg font-semibold text-white leading-tight">
                      App Store
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Custom Google Play Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block group"
              >
                <div className="bg-black hover:bg-gray-800 transition-colors duration-300 rounded-xl px-6 py-3 flex items-center space-x-3 shadow-lg hover:shadow-xl">
                  {/* Google Play Logo SVG */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient
                        id="playGradient1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#00D4FF" />
                        <stop offset="100%" stopColor="#0099CC" />
                      </linearGradient>
                      <linearGradient
                        id="playGradient2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#FFD500" />
                        <stop offset="100%" stopColor="#FF9500" />
                      </linearGradient>
                      <linearGradient
                        id="playGradient3"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#FF4444" />
                        <stop offset="100%" stopColor="#CC0000" />
                      </linearGradient>
                      <linearGradient
                        id="playGradient4"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#00E676" />
                        <stop offset="100%" stopColor="#00C853" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"
                      fill="url(#playGradient1)"
                    />
                    <path
                      d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"
                      fill="url(#playGradient2)"
                    />
                    <path
                      d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"
                      fill="url(#playGradient3)"
                    />
                    <path
                      d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                      fill="url(#playGradient4)"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-300 leading-tight">
                      GET IT ON
                    </div>
                    <div className="text-lg font-semibold text-white leading-tight">
                      Google Play
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex items-center justify-center space-x-8"
            >
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-600 dark:text-gray-300">
                  4.9/5 Rating
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-green-600" />
                <span className="text-gray-600 dark:text-gray-300">
                  100+ Downloads
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-green-600" />
                <span className="text-gray-600 dark:text-gray-300">
                  iOS & Android
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/95 backdrop-blur-sm text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">Tactics PLC</span>
              </div>
              <p className="text-gray-400">
                The ultimate fantasy football platform for tactical masterminds.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/support/contact"
                    className="hover:text-green-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/support/bug-reports"
                    className="hover:text-green-400 transition-colors"
                  >
                    Bug Reports
                  </a>
                </li>
                <li>
                  <a
                    href="/support/feature-requests"
                    className="hover:text-green-400 transition-colors"
                  >
                    Feature Requests
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/legal/privacy-policy"
                    className="hover:text-green-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/legal/terms-of-service"
                    className="hover:text-green-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/legal/cookie-policy"
                    className="hover:text-green-400 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/legal/gdpr"
                    className="hover:text-green-400 transition-colors"
                  >
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy;Tactics PLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
