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
import { Bug, AlertTriangle, Trophy, ArrowLeft, Upload } from "lucide-react";
import Link from "next/link";
import { FootballBackground } from "@/components/football-background";

export default function BugReports() {
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
              <Badge className="mb-4 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                <Bug className="w-4 h-4 mr-2" />
                Bug Reports
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                Report a Bug
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Help us improve Tactics PLC by reporting any issues you
                encounter. Your feedback is invaluable.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Guidelines */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-800 dark:text-yellow-200">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Before Reporting
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-yellow-700 dark:text-yellow-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Check if the issue has already been reported</li>
                      <li>Try refreshing the page or restarting the app</li>
                      <li>Provide as much detail as possible</li>
                      <li>
                        Include screenshots or screen recordings if helpful
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Bug Report Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-2xl">Bug Report Form</CardTitle>
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
                            Bug Severity
                          </label>
                          <Select>
                            <SelectTrigger className="border-green-200 dark:border-green-800">
                              <SelectValue placeholder="Select severity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">
                                Low - Minor inconvenience
                              </SelectItem>
                              <SelectItem value="medium">
                                Medium - Affects functionality
                              </SelectItem>
                              <SelectItem value="high">
                                High - Major feature broken
                              </SelectItem>
                              <SelectItem value="critical">
                                Critical - App unusable
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
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
                              <SelectItem value="performance">
                                Performance
                              </SelectItem>
                              <SelectItem value="data">Data/Scoring</SelectItem>
                              <SelectItem value="account">
                                Account Issues
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Bug Title
                        </label>
                        <Input
                          placeholder="Brief description of the issue"
                          className="border-green-200 dark:border-green-800"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Steps to Reproduce
                        </label>
                        <Textarea
                          placeholder="1. Go to...&#10;2. Click on...&#10;3. Expected result...&#10;4. Actual result..."
                          rows={6}
                          className="border-green-200 dark:border-green-800"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Device/Browser Information
                        </label>
                        <Input
                          placeholder="e.g., iPhone 12, Safari 14.0 or Windows 10, Chrome 91.0"
                          className="border-green-200 dark:border-green-800"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Additional Information
                        </label>
                        <Textarea
                          placeholder="Any additional context, error messages, or observations..."
                          rows={4}
                          className="border-green-200 dark:border-green-800"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Attachments
                        </label>
                        <div className="border-2 border-dashed border-green-300 dark:border-green-700 rounded-lg p-6 text-center">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                          <p className="text-gray-600 dark:text-gray-300">
                            Drag and drop screenshots or files here, or click to
                            browse
                          </p>
                          <Button
                            variant="outline"
                            className="mt-2 bg-transparent"
                          >
                            Choose Files
                          </Button>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700"
                      >
                        Submit Bug Report
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
