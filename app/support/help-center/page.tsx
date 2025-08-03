"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  HelpCircle,
  Book,
  MessageCircle,
  Video,
  Trophy,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { FootballBackground } from "@/components/football-background";

export default function HelpCenter() {
  const categories = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Getting Started",
      description:
        "Learn the basics of fantasy football and how to create your first team",
      articles: 12,
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Game Rules",
      description: "Understand scoring, transfers, and league regulations",
      articles: 8,
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Account & Settings",
      description: "Manage your profile, notifications, and privacy settings",
      articles: 15,
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Tactics & Strategy",
      description: "Advanced tips and strategies to dominate your leagues",
      articles: 20,
    },
  ];

  const popularArticles = [
    "How to create your first fantasy team",
    "Understanding the scoring system",
    "Making transfers and using wildcards",
    "Setting up private leagues with friends",
    "Using the captain and vice-captain system",
    "Managing your budget effectively",
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
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help Center
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                How can we help you?
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Find answers to your questions and get the most out of Tactics
                PLC
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for help articles..."
                  className="pl-12 py-6 text-lg border-green-200 dark:border-green-800 focus:border-green-500"
                />
              </div>
            </motion.div>

            {/* Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        {category.icon}
                      </div>
                      <CardTitle className="text-xl">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {category.description}
                      </p>
                      <Badge variant="secondary">
                        {category.articles} articles
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Popular Articles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Popular Articles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {popularArticles.map((article, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-green-50 dark:bg-green-950 hover:bg-green-100 dark:hover:bg-green-900 transition-colors cursor-pointer"
                      >
                        <p className="text-gray-700 dark:text-gray-300">
                          {article}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-16"
            >
              <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to
                help.
              </p>
              <Link href="/support/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
