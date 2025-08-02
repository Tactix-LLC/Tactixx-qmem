"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Trophy, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FootballBackground } from "@/components/football-background"

export default function PrivacyPolicy() {
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

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Shield className="w-4 h-4 mr-2" />
                Privacy Policy
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                Your Privacy Matters
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Last updated: January 1, 2024
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>1. Information We Collect</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <h4>Personal Information</h4>
                    <p>When you create an account with Tactics PLC, we collect:</p>
                    <ul>
                      <li>Name and email address</li>
                      <li>Username and password</li>
                      <li>Profile information you choose to provide</li>
                      <li>Payment information for premium features</li>
                    </ul>

                    <h4>Usage Information</h4>
                    <p>We automatically collect information about how you use our service:</p>
                    <ul>
                      <li>Game statistics and performance data</li>
                      <li>Device information and IP address</li>
                      <li>App usage patterns and preferences</li>
                      <li>Communication with other users (in accordance with our terms)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>2. How We Use Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>We use your information to:</p>
                    <ul>
                      <li>Provide and improve our fantasy football services</li>
                      <li>Calculate scores and maintain league standings</li>
                      <li>Send important updates about your account and games</li>
                      <li>Provide customer support</li>
                      <li>Prevent fraud and ensure fair play</li>
                      <li>Analyze usage patterns to improve our platform</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>3. Information Sharing</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>
                      We do not sell your personal information. We may share information in these limited circumstances:
                    </p>
                    <ul>
                      <li>
                        <strong>With other players:</strong> Your username, team name, and game statistics are visible
                        to other players in your leagues
                      </li>
                      <li>
                        <strong>Service providers:</strong> We work with trusted third parties who help us operate our
                        platform
                      </li>
                      <li>
                        <strong>Legal requirements:</strong> When required by law or to protect our rights and users
                      </li>
                      <li>
                        <strong>Business transfers:</strong> In the event of a merger or acquisition
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>4. Data Security</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>We implement industry-standard security measures to protect your information:</p>
                    <ul>
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security audits and updates</li>
                      <li>Limited access to personal information by employees</li>
                      <li>Secure payment processing through certified providers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>5. Your Rights</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>You have the right to:</p>
                    <ul>
                      <li>Access and update your personal information</li>
                      <li>Delete your account and associated data</li>
                      <li>Opt out of marketing communications</li>
                      <li>Request a copy of your data</li>
                      <li>Object to certain processing of your information</li>
                    </ul>
                    <p>To exercise these rights, contact us at privacy@tacticsplc.com</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>6. Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>If you have questions about this Privacy Policy, please contact us:</p>
                    <ul>
                      <li>Email: privacy@tacticsplc.com</li>
                      <li>Address: 123 Fantasy Lane, Sports City, SC 12345</li>
                      <li>Phone: +1 (555) 123-4567</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
