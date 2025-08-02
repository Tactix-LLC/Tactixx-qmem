"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Trophy, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FootballBackground } from "@/components/football-background"

export default function TermsOfService() {
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
                <FileText className="w-4 h-4 mr-2" />
                Terms of Service
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                Terms of Service
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
                    <CardTitle>1. Acceptance of Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>
                      By accessing and using Tactics PLC, you accept and agree to be bound by the terms and provision of
                      this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                    <p>These terms apply to all visitors, users, and others who access or use the service.</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>2. Description of Service</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>Tactics PLC is a fantasy football platform that allows users to:</p>
                    <ul>
                      <li>Create and manage fantasy football teams</li>
                      <li>Participate in leagues and competitions</li>
                      <li>Track player statistics and performance</li>
                      <li>Compete with other users for prizes and recognition</li>
                    </ul>
                    <p>We reserve the right to modify or discontinue the service at any time without notice.</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>3. User Accounts</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>
                      When you create an account with us, you must provide information that is accurate, complete, and
                      current at all times. You are responsible for:
                    </p>
                    <ul>
                      <li>Safeguarding the password and all activities under your account</li>
                      <li>Notifying us immediately of any unauthorized use</li>
                      <li>Ensuring your account information remains up to date</li>
                    </ul>
                    <p>
                      We reserve the right to refuse service, terminate accounts, or cancel orders at our sole
                      discretion.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>4. Fair Play and Conduct</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>
                      Users must adhere to fair play principles and maintain respectful conduct. Prohibited activities
                      include:
                    </p>
                    <ul>
                      <li>Using multiple accounts to gain unfair advantages</li>
                      <li>Sharing account information with other users</li>
                      <li>Attempting to manipulate game results or statistics</li>
                      <li>Harassment, abuse, or inappropriate communication</li>
                      <li>Using automated tools or bots</li>
                    </ul>
                    <p>Violations may result in account suspension or termination.</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>5. Intellectual Property</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>
                      The service and its original content, features, and functionality are and will remain the
                      exclusive property of Tactics PLC and its licensors. The service is protected by copyright,
                      trademark, and other laws.
                    </p>
                    <p>
                      You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                      perform, republish, download, store, or transmit any of the material on our service.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>6. Privacy Policy</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>
                      Your privacy is important to us. Please review our Privacy Policy, which also governs your use of
                      the service, to understand our practices.
                    </p>
                    <p>
                      By using our service, you agree to the collection and use of information in accordance with our
                      Privacy Policy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>7. Limitation of Liability</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>
                      In no event shall Tactics PLC, nor its directors, employees, partners, agents, suppliers, or
                      affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                      including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                      resulting from your use of the service.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>8. Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>If you have any questions about these Terms of Service, please contact us:</p>
                    <ul>
                      <li>Email: legal@tacticsplc.com</li>
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
