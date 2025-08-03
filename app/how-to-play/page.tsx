"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, ArrowLeft, Play, Users, Target, Star, Crown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FootballBackground } from "@/components/football-background"

export default function HowToPlay() {
  const gameSteps = [
    {
      step: "01",
      title: "Create Your Squad",
      description: "Build your dream team by selecting 11 players within the budget limit",
      icon: <Users className="w-8 h-8" />,
      details: [
        "Choose 1 Goalkeeper, 3-5 Defenders, 3-5 Midfielders, 1-3 Forwards",
        "Stay within the £100 million budget",
        "Maximum 3 players from any single team",
        "Select your captain (2x points) and vice-captain (1.5x points)",
      ],
    },
    {
      step: "02",
      title: "Deploy Tactics",
      description: "Set your formation and tactical approach for maximum points",
      icon: <Target className="w-8 h-8" />,
      details: [
        "Choose from 5 different formations (3-4-3, 3-5-2, 4-3-3, 4-4-2, 4-5-1)",
        "Set player positions and roles",
        "Apply tactical boosts and power-ups",
        "Plan your substitution strategy",
      ],
    },
    {
      step: "03",
      title: "Join Leagues",
      description: "Compete against friends or join public leagues for glory",
      icon: <Trophy className="w-8 h-8" />,
      details: [
        "Create private leagues with friends and family",
        "Join public leagues with thousands of players",
        "Participate in special tournaments and events",
        "Climb the global leaderboards",
      ],
    },
    {
      step: "04",
      title: "Score Points",
      description: "Earn points based on real player performances",
      icon: <Star className="w-8 h-8" />,
      details: [
        "Goals, assists, clean sheets, and saves earn points",
        "Bonus points for exceptional performances",
        "Captain doubles your points, vice-captain adds 50%",
        "Avoid yellow cards, red cards, and own goals",
      ],
    },
  ]

  const formations = [
    { name: "4-3-3", description: "Balanced attack and defense", popularity: 85 },
    { name: "3-5-2", description: "Midfield dominance", popularity: 72 },
    { name: "4-4-2", description: "Classic formation", popularity: 68 },
    { name: "3-4-3", description: "All-out attack", popularity: 45 },
    { name: "4-5-1", description: "Defensive stability", popularity: 38 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 dark:from-green-950 dark:via-lime-950 dark:to-emerald-950">
      <FootballBackground />

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-green-200 dark:border-green-800">
          <div className="container mx-auto px-4 py-6">
            <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-lime-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
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
                <Play className="w-4 h-4 mr-2" />
                Master the Game
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-lime-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
                How to Play
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
                Master the art of fantasy football with our comprehensive guide. From squad building to tactical
                deployment, become the ultimate fantasy manager.
              </p>
            </motion.div>

            {/* Game Steps */}
            <div className="space-y-16">
              {gameSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                        {step.step}
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-full flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <Card className="border-green-200 dark:border-green-800 overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Step ${step.step}: ${step.title}`}
                          alt={step.title}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Formations Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                  Choose Your Formation
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Select the tactical setup that matches your strategy
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formations.map((formation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-2">{formation.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{formation.description}</div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-gray-900 dark:text-white">
                            {formation.popularity}%
                          </div>
                          <div className="text-sm text-gray-500">Popularity</div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-green-500 to-lime-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${formation.popularity}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-20"
            >
              <Card className="border-green-200 dark:border-green-800 max-w-4xl mx-auto bg-gradient-to-r from-green-50 via-lime-50 to-emerald-50 dark:from-green-950 dark:via-lime-950 dark:to-emerald-950">
                <CardContent className="p-12">
                  <Crown className="w-16 h-16 mx-auto mb-6 text-green-600" />
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                    Ready to Become a Champion?
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Now that you know the rules, it's time to put your tactical knowledge to the test. Create your squad
                    and start your journey to fantasy football glory!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Start Playing Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950 bg-transparent"
                    >
                      <Trophy className="w-5 h-5 mr-2" />
                      View Leaderboards
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
