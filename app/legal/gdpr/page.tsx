"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Download, Trash2, Edit, Eye, Trophy, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FootballBackground } from "@/components/football-background"

export default function GDPR() {
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
                GDPR Compliance
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                Your Data Rights
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Under the General Data Protection Regulation (GDPR), you have specific rights regarding your personal
                data.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              >
                <Card className="border-green-200 dark:border-green-800 text-center">
                  <CardContent className="p-6">
                    <Eye className="w-12 h-12 mx-auto mb-4 text-green-600" />
                    <h3 className="font-semibold mb-2">Access Your Data</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Request a copy of all personal data we hold about you
                    </p>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700"
                    >
                      Request Data
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800 text-center">
                  <CardContent className="p-6">
                    <Edit className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="font-semibold mb-2">Update Information</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Correct or update your personal information
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      Update Data
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800 text-center">
                  <CardContent className="p-6">
                    <Download className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                    <h3 className="font-semibold mb-2">Export Data</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Download your data in a portable format
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                    >
                      Export Data
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800 text-center">
                  <CardContent className="p-6">
                    <Trash2 className="w-12 h-12 mx-auto mb-4 text-red-600" />
                    <h3 className="font-semibold mb-2">Delete Account</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Permanently delete your account and data
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                    >
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Detailed Rights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>Your GDPR Rights</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4>Right to Information</h4>
                        <p>
                          You have the right to know what personal data we collect, how we use it, and who we share it
                          with.
                        </p>

                        <h4>Right of Access</h4>
                        <p>You can request a copy of all personal data we hold about you, free of charge.</p>

                        <h4>Right to Rectification</h4>
                        <p>You can ask us to correct any inaccurate or incomplete personal data.</p>

                        <h4>Right to Erasure</h4>
                        <p>You can request deletion of your personal data under certain circumstances.</p>
                      </div>
                      <div>
                        <h4>Right to Restrict Processing</h4>
                        <p>You can ask us to limit how we use your personal data in specific situations.</p>

                        <h4>Right to Data Portability</h4>
                        <p>You can request your data in a structured, machine-readable format.</p>

                        <h4>Right to Object</h4>
                        <p>You can object to certain types of processing, including direct marketing.</p>

                        <h4>Rights Related to Automated Decision Making</h4>
                        <p>You have rights regarding automated processing and profiling.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>How to Exercise Your Rights</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>To exercise any of your GDPR rights, you can:</p>
                    <ul>
                      <li>
                        <strong>Email us:</strong> Send a request to gdpr@tacticsplc.com
                      </li>
                      <li>
                        <strong>Use our online form:</strong> Fill out our data request form
                      </li>
                      <li>
                        <strong>Contact support:</strong> Reach out through our support channels
                      </li>
                      <li>
                        <strong>Mail us:</strong> Send a written request to our address
                      </li>
                    </ul>

                    <h4>What We Need From You</h4>
                    <p>To process your request, we may need:</p>
                    <ul>
                      <li>Proof of identity to protect your privacy</li>
                      <li>Specific details about your request</li>
                      <li>Account information to locate your data</li>
                    </ul>

                    <h4>Response Time</h4>
                    <p>
                      We will respond to your request within <strong>30 days</strong>. In complex cases, we may extend
                      this by an additional 60 days and will inform you of any delay.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>Data Processing Lawful Basis</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>We process your personal data based on the following lawful bases:</p>
                    <ul>
                      <li>
                        <strong>Contract:</strong> To provide our fantasy football services
                      </li>
                      <li>
                        <strong>Legitimate Interest:</strong> To improve our platform and prevent fraud
                      </li>
                      <li>
                        <strong>Consent:</strong> For marketing communications and optional features
                      </li>
                      <li>
                        <strong>Legal Obligation:</strong> To comply with applicable laws and regulations
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>Complaints and Supervisory Authority</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>
                      If you believe we have not handled your personal data properly, you have the right to lodge a
                      complaint with a supervisory authority.
                    </p>

                    <p>
                      In the EU, you can contact your local data protection authority. If you're in the UK, you can
                      contact the Information Commissioner's Office (ICO).
                    </p>

                    <p>We encourage you to contact us first so we can try to resolve any concerns directly.</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>Contact Our Data Protection Officer</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>For any questions about data protection or to exercise your rights:</p>
                    <ul>
                      <li>
                        <strong>Email:</strong> dpo@tacticsplc.com
                      </li>
                      <li>
                        <strong>Address:</strong> Data Protection Officer, Tactics PLC, 123 Fantasy Lane, Sports City,
                        SC 12345
                      </li>
                      <li>
                        <strong>Phone:</strong> +1 (555) 123-4567
                      </li>
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
