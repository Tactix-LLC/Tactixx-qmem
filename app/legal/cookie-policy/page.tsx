"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cookie, Trophy, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FootballBackground } from "@/components/football-background";

export default function CookiePolicy() {
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
              <Badge className="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                <Cookie className="w-4 h-4 mr-2" />
                Cookie Policy
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                Cookie Policy
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
                    <CardTitle>What Are Cookies?</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>
                      Cookies are small text files that are placed on your
                      computer or mobile device when you visit our website. They
                      are widely used to make websites work more efficiently and
                      provide information to website owners.
                    </p>
                    <p>
                      Tactics PLC uses cookies to enhance your experience,
                      analyze site usage, and assist in our marketing efforts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>Types of Cookies We Use</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <h4>Essential Cookies</h4>
                    <p>
                      These cookies are necessary for the website to function
                      properly. They enable core functionality such as:
                    </p>
                    <ul>
                      <li>User authentication and account management</li>
                      <li>Security features and fraud prevention</li>
                      <li>Shopping cart and payment processing</li>
                      <li>Website navigation and basic functionality</li>
                    </ul>

                    <h4>Performance Cookies</h4>
                    <p>
                      These cookies help us understand how visitors interact
                      with our website by collecting anonymous information:
                    </p>
                    <ul>
                      <li>Page views and user journeys</li>
                      <li>Time spent on different pages</li>
                      <li>Error messages and loading times</li>
                      <li>Popular content and features</li>
                    </ul>

                    <h4>Functionality Cookies</h4>
                    <p>
                      These cookies remember your preferences and choices to
                      provide a personalized experience:
                    </p>
                    <ul>
                      <li>Language and region preferences</li>
                      <li>Theme settings (dark/light mode)</li>
                      <li>Customized dashboard layouts</li>
                      <li>Notification preferences</li>
                    </ul>

                    <h4>Marketing Cookies</h4>
                    <p>
                      These cookies track your browsing habits to show you
                      relevant advertisements:
                    </p>
                    <ul>
                      <li>Targeted advertising based on interests</li>
                      <li>Social media integration</li>
                      <li>Campaign effectiveness measurement</li>
                      <li>Cross-platform user tracking</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>Third-Party Cookies</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>
                      We work with trusted third-party services that may place
                      cookies on your device:
                    </p>
                    <ul>
                      <li>
                        <strong>Google Analytics:</strong> For website analytics
                        and performance monitoring
                      </li>
                      <li>
                        <strong>Facebook Pixel:</strong> For advertising and
                        conversion tracking
                      </li>
                      <li>
                        <strong>Stripe:</strong> For secure payment processing
                      </li>
                      <li>
                        <strong>Intercom:</strong> For customer support and live
                        chat
                      </li>
                    </ul>
                    <p>
                      These third parties have their own privacy policies and
                      cookie practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>Managing Your Cookie Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>You have several options for managing cookies:</p>

                    <h4>Browser Settings</h4>
                    <p>
                      Most web browsers allow you to control cookies through
                      their settings:
                    </p>
                    <ul>
                      <li>Block all cookies</li>
                      <li>Block third-party cookies only</li>
                      <li>Delete existing cookies</li>
                      <li>Receive notifications when cookies are set</li>
                    </ul>

                    <h4>Cookie Consent Manager</h4>
                    <p>
                      When you first visit our website, you'll see a cookie
                      consent banner where you can:
                    </p>
                    <ul>
                      <li>Accept all cookies</li>
                      <li>Reject non-essential cookies</li>
                      <li>Customize your preferences by cookie type</li>
                      <li>Change your preferences at any time</li>
                    </ul>

                    <h4>Opt-Out Links</h4>
                    <p>
                      For specific third-party services, you can opt out
                      directly:
                    </p>
                    <ul>
                      <li>
                        Google Analytics:{" "}
                        <a
                          href="https://tools.google.com/dlpage/gaoptout"
                          className="text-green-600 hover:text-green-700"
                        >
                          Google Analytics Opt-out
                        </a>
                      </li>
                      <li>
                        Facebook:{" "}
                        <a
                          href="https://www.facebook.com/settings?tab=ads"
                          className="text-green-600 hover:text-green-700"
                        >
                          Facebook Ad Preferences
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>Impact of Disabling Cookies</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>
                      While you can disable cookies, please note that this may
                      affect your experience:
                    </p>
                    <ul>
                      <li>Some features may not work properly</li>
                      <li>You may need to re-enter information frequently</li>
                      <li>Personalization features will be limited</li>
                      <li>We won't be able to remember your preferences</li>
                    </ul>
                    <p>
                      Essential cookies cannot be disabled as they are necessary
                      for the website to function.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent className="prose dark:prose-invert max-w-none">
                    <p>
                      If you have questions about our use of cookies, please
                      contact us:
                    </p>
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
  );
}
