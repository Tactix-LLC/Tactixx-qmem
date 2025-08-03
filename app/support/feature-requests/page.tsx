"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Lightbulb,
  Star,
  Trophy,
  ArrowLeft,
  ThumbsUp,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { FootballBackground } from "@/components/football-background";

export default function FeatureRequests() {
  const popularRequests = [
    {
      title: "Dark Mode for Mobile App",
      votes: 234,
      status: "In Development",
      category: "UI/UX",
    },
    {
      title: "Advanced Statistics Dashboard",
      votes: 189,
      status: "Under Review",
      category: "Analytics",
    },
    {
      title: "Custom League Scoring Rules",
      votes: 156,
      status: "Planned",
      category: "Leagues",
    },
    {
      title: "Player Comparison Tool",
      votes: 143,
      status: "Under Review",
      category: "Tools",
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
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-lime-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                Tactics PLC
              </span>
            </div>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Lightbulb className="w-4 h-4 mr-2" />
                Feature Requests
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                Shape the Future
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have an idea that could make Tactics PLC even better? We'd love
                to hear it! Your suggestions drive our development.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Popular Requests */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-500" />
                      Popular Requests
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {popularRequests.map((request, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                      >
                        <h4 className="font-semibold mb-2">{request.title}</h4>
                        <div className="flex items-center justify-between text-sm">
                          <Badge variant="secondary">{request.category}</Badge>
                          <div className="flex items-center space-x-2">
                            <ThumbsUp className="w-4 h-4 text-green-600" />
                            <span>{request.votes}</span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <Badge
                            className={
                              request.status === "In Development"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : request.status === "Under Review"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            }
                          >
                            {request.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Feature Request Form */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-2"
              >
                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Submit Feature Request
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Your Name
                          </label>
                          <Input
                            placeholder="John Doe"
                            className="border-green-200 dark:border-green-800"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="border-green-200 dark:border-green-800"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Category
                          </label>
                          <Select>
                            <SelectTrigger className="border-green-200 dark:border-green-800">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ui">User Interface</SelectItem>
                              <SelectItem value="gameplay">Gameplay</SelectItem>
                              <SelectItem value="analytics">
                                Analytics
                              </SelectItem>
                              <SelectItem value="social">
                                Social Features
                              </SelectItem>
                              <SelectItem value="mobile">Mobile App</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Priority
                          </label>
                          <Select>
                            <SelectTrigger className="border-green-200 dark:border-green-800">
                              <SelectValue placeholder="How important is this?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Nice to have</SelectItem>
                              <SelectItem value="medium">
                                Would be helpful
                              </SelectItem>
                              <SelectItem value="high">
                                Very important
                              </SelectItem>
                              <SelectItem value="critical">
                                Essential
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Feature Title
                        </label>
                        <Input
                          placeholder="Brief, descriptive title for your feature request"
                          className="border-green-200 dark:border-green-800"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Detailed Description
                        </label>
                        <Textarea
                          placeholder="Describe your feature idea in detail. What problem does it solve? How would it work?"
                          rows={6}
                          className="border-green-200 dark:border-green-800"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Use Case
                        </label>
                        <Textarea
                          placeholder="Describe a specific scenario where this feature would be useful..."
                          rows={4}
                          className="border-green-200 dark:border-green-800"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Additional Notes
                        </label>
                        <Textarea
                          placeholder="Any additional thoughts, similar features in other apps, or implementation ideas..."
                          rows={3}
                          className="border-green-200 dark:border-green-800"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700"
                      >
                        <Lightbulb className="w-5 h-5 mr-2" />
                        Submit Feature Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

           
          </div>
        </section>
      </div>
    </div>
  );
}
