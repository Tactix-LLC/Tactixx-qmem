"use client";

import type React from "react";

import { useState } from "react";
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
  Mail,
  Phone,
  MessageCircle,
  Trophy,
  ArrowLeft,
  Send,
  Target,
  Users,
  Zap,
  CheckCircle,
  AlertCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { FootballBackground } from "@/components/football-background";
import { IPhoneFrame } from "@/components/iphone-frame";
import { sendEmail, testSMTPConnection } from "@/lib/email-service";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [smtpStatus, setSmtpStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate form data
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.subject ||
      !formData.message.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      setIsSubmitting(false);
      return;
    }

    console.log("Form data being sent:", formData); // Debug log

    try {
      const result = await sendEmail({
        name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        email: formData.email.trim(),
        subject: formData.subject,
        message: formData.message.trim(),
        type: "contact",
      });

      console.log("Email service result:", result); // Debug log

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to send message",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error); // Debug log
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const testConnection = async () => {
    setIsTesting(true);
    setSmtpStatus(null);

    try {
      const result = await testSMTPConnection();
      setSmtpStatus({
        type: result.success ? "success" : "error",
        message: result.message,
      });
    } catch (error) {
      setSmtpStatus({
        type: "error",
        message: "Failed to test connection",
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 dark:from-green-950 dark:via-lime-950 dark:to-emerald-950 relative overflow-hidden">
      <FootballBackground />

      {/* Tactical Elements Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          className="w-full h-full"
        >
          {/* Formation Arrows */}
          <defs>
            <marker
              id="tacticalArrow"
              markerWidth="12"
              markerHeight="8"
              refX="11"
              refY="4"
              orient="auto"
            >
              <polygon
                points="0 0, 12 4, 0 8"
                fill="currentColor"
                className="text-green-600"
              />
            </marker>
          </defs>

          {/* Dynamic tactical arrows */}
          <motion.line
            x1="100"
            y1="100"
            x2="300"
            y2="200"
            stroke="currentColor"
            strokeWidth="3"
            className="text-green-600"
            markerEnd="url(#tacticalArrow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.line
            x1="900"
            y1="150"
            x2="700"
            y2="250"
            stroke="currentColor"
            strokeWidth="3"
            className="text-lime-600"
            markerEnd="url(#tacticalArrow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 0.5,
            }}
          />
          <motion.line
            x1="200"
            y1="600"
            x2="400"
            y2="500"
            stroke="currentColor"
            strokeWidth="3"
            className="text-emerald-600"
            markerEnd="url(#tacticalArrow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </svg>
      </div>

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
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                  Tactics PLC
                </span>
              </div>

              {/* SMTP Test Button (Development Only) */}
              {process.env.NODE_ENV === "development" && (
                <Button
                  onClick={testConnection}
                  disabled={isTesting}
                  variant="outline"
                  size="sm"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  {isTesting ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                      Testing...
                    </div>
                  ) : (
                    <>
                      <Settings className="w-4 h-4 mr-2" />
                      Test SMTP
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* SMTP Status */}
            {smtpStatus && (
              <div
                className={`mt-4 p-3 rounded-lg flex items-center ${
                  smtpStatus.type === "success"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}
              >
                {smtpStatus.type === "success" ? (
                  <CheckCircle className="w-5 h-5 mr-2" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2" />
                )}
                {smtpStatus.message}
              </div>
            )}
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Hero Section with Tactical Theme */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <Target className="w-4 h-4 mr-2" />
                Tactical Support Command
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-lime-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
                Execute Your
                <br />
                <span className="relative">
                  Contact Strategy
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-lime-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Deploy your message with precision. Our tactical support team is
                ready to assist you in dominating your fantasy football
                challenges.
              </p>
            </motion.div>

            {/* Tactical Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6 mb-16"
            >
              <Card className="border-green-200 dark:border-green-800 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    &lt; 2 Hours
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Average Response Time
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-green-800 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-lime-600 mb-2">
                    24/7
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Support Coverage
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-green-800 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600 mb-2">
                    98%
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Resolution Rate
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Methods - Tactical Formation */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                    Choose Your Formation
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Select your preferred tactical approach to reach our team
                  </p>
                </div>

                {/* Formation Layout */}
                <div className="relative">
                  {/* Goalkeeper - Email */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="mb-6"
                  >
                    <Card className="border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-lime-50 dark:from-green-950 dark:to-lime-950">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mr-4">
                            <Mail className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-lg">Email Command Center</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                              Primary Defense
                            </div>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          support@tacticsplc.com
                        </p>
                        <p className="text-sm text-gray-500">
                          Strategic response within 24 hours
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Midfield - Phone */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="mb-6 ml-8"
                  >
                    <Card className="border-green-200 dark:border-green-800 bg-gradient-to-r from-lime-50 to-emerald-50 dark:from-lime-950 dark:to-emerald-950">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                            <Phone className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-lg">Direct Tactical Line</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                              Midfield Control
                            </div>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          +1 (555) 123-4567
                        </p>
                        <p className="text-sm text-gray-500">
                          Live tactical support Mon-Fri, 9AM-6PM EST
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>

              {/* iPhone Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center"
              >
                <IPhoneFrame>
                  <div className="h-full bg-gradient-to-br from-green-50 to-lime-50 dark:from-green-950 dark:to-lime-950 p-4 overflow-y-auto">
                    {/* App Header */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Tactics PLC
                      </h3>
                      <p className="text-sm text-gray-600">Contact Command</p>
                    </div>

                    {/* Mobile Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Input
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            className="text-sm border-green-200 dark:border-green-800"
                            required
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            className="text-sm border-green-200 dark:border-green-800"
                            required
                          />
                        </div>
                      </div>

                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="text-sm border-green-200 dark:border-green-800"
                        required
                      />

                      <Select
                        onValueChange={(value) =>
                          handleInputChange("subject", value)
                        }
                        required
                      >
                        <SelectTrigger className="text-sm border-green-200 dark:border-green-800">
                          <SelectValue placeholder="Select Topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Account Issues">
                            Account Issues
                          </SelectItem>
                          <SelectItem value="Technical Support">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="Billing Questions">
                            Billing Questions
                          </SelectItem>
                          <SelectItem value="Feature Request">
                            Feature Request
                          </SelectItem>
                          <SelectItem value="General Inquiry">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="Partnership">
                            Partnership
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>

                      <Textarea
                        placeholder="Describe your tactical challenge..."
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        rows={4}
                        className="text-sm border-green-200 dark:border-green-800 resize-none"
                        required
                      />

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-sm"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Deploying...
                          </div>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Execute Mission
                          </>
                        )}
                      </Button>

                      {submitStatus && (
                        <div
                          className={`text-center text-sm p-3 rounded-lg flex items-center ${
                            submitStatus.type === "success"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          }`}
                        >
                          {submitStatus.type === "success" ? (
                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                          ) : (
                            <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                          )}
                          <span className="text-left">
                            {submitStatus.message}
                          </span>
                        </div>
                      )}
                    </form>

                    {/* Tactical Footer */}
                    <div className="mt-6 text-center">
                      <div className="flex justify-center space-x-4 text-xs text-gray-500">
                        <span>🏆 Secure</span>
                        <span>⚡ Fast</span>
                        <span>🎯 Precise</span>
                      </div>
                    </div>
                  </div>
                </IPhoneFrame>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
