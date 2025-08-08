"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Mail,
  Phone,
  Send,
  Settings,
  AlertCircle,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FootballBackground } from "@/components/football-background";
import { PartnersSection } from "@/components/partners-section";
import { IPhoneFrame } from "@/components/iphone-frame";
import { sendEmail, testSMTPConnection } from "@/lib/email-service";

export default function FantasyFootballWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
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
  function LiveStatsSVG() {
    return (
      <svg
        viewBox="0 0 360 780"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="28"
          ry="28"
          fill="url(#bg1)"
        />
        <defs>
          <linearGradient id="bg1" x1="0" x2="1">
            <stop offset="0" stopColor="#f6fff0" />
            <stop offset="1" stopColor="#eefcf2" />
          </linearGradient>
        </defs>

        {/* header */}
        <rect
          x="16"
          y="18"
          width="328"
          height="52"
          rx="12"
          fill="#0f172a"
          opacity="0.08"
        />
        <circle cx="40" cy="44" r="8" fill="#10b981" />
        <rect
          x="64"
          y="34"
          width="200"
          height="6"
          rx="3"
          fill="#0f172a"
          opacity="0.12"
        />

        {/* big score */}
        <text x="28" y="110" fontSize="34" fontWeight="700" fill="#0f172a">
          2
        </text>
        <text x="76" y="110" fontSize="20" fill="#6b7280">
          {" "}
          -{" "}
        </text>
        <text x="100" y="110" fontSize="34" fontWeight="700" fill="#0f172a">
          1
        </text>
        <text x="28" y="140" fontSize="12" fill="#6b7280">
          HT • 45'
        </text>

        {/* small live spark */}
        <rect x="240" y="86" width="80" height="28" rx="8" fill="#ffedd5" />
        <text x="252" y="106" fontSize="12" fontWeight="600" fill="#b45309">
          LIVE
        </text>

        {/* line graph */}
        <g transform="translate(20,180)">
          <rect width="320" height="160" rx="12" fill="#fff" opacity="0.7" />
          <polyline
            points="12,120 48,84 96,100 144,56 192,76 240,32 288,48"
            fill="none"
            stroke="#059669"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* x ticks */}
          <g fill="#94a3b8" fontSize="10">
            <text x="12" y="145">
              10'
            </text>
            <text x="96" y="145">
              20'
            </text>
            <text x="192" y="145">
              35'
            </text>
            <text x="288" y="145">
              45'
            </text>
          </g>
        </g>

        {/* small stat chips */}
        <g transform="translate(20,360)">
          <rect
            x="0"
            y="0"
            width="102"
            height="72"
            rx="10"
            fill="#000"
            opacity="0.05"
          />
          <text x="12" y="24" fontSize="12" fill="#065f46">
            Shots
          </text>
          <text x="12" y="50" fontSize="20" fontWeight="700" fill="#0f172a">
            8
          </text>

          <rect
            x="122"
            y="0"
            width="102"
            height="72"
            rx="10"
            fill="#000"
            opacity="0.05"
          />
          <text x="134" y="24" fontSize="12" fill="#065f46">
            Poss%
          </text>
          <text x="134" y="50" fontSize="20" fontWeight="700" fill="#0f172a">
            62%
          </text>

          <rect
            x="244"
            y="0"
            width="76"
            height="72"
            rx="10"
            fill="#000"
            opacity="0.05"
          />
          <text x="256" y="24" fontSize="12" fill="#065f46">
            Fouls
          </text>
          <text x="256" y="50" fontSize="20" fontWeight="700" fill="#0f172a">
            3
          </text>
        </g>

        {/* footer nav */}
        <g transform="translate(0,720)">
          <rect
            x="28"
            y="0"
            width="304"
            height="44"
            rx="12"
            fill="#0f172a"
            opacity="0.06"
          />
          <circle cx="64" cy="22" r="8" fill="#10b981" />
          <circle cx="128" cy="22" r="6" fill="#94a3b8" />
          <circle cx="192" cy="22" r="6" fill="#94a3b8" />
          <circle cx="256" cy="22" r="6" fill="#94a3b8" />
        </g>
      </svg>
    );
  }

  function LeagueRankingsSVG() {
    return (
      <svg
        viewBox="0 0 360 780"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="28"
          ry="28"
          fill="url(#bg2)"
        />
        <defs>
          <linearGradient id="bg2" x1="0" x2="1">
            <stop offset="0" stopColor="#f0fdfa" />
            <stop offset="1" stopColor="#ecfdf5" />
          </linearGradient>
        </defs>

        <text x="24" y="48" fontSize="16" fontWeight="700" fill="#065f46">
          League Rankings
        </text>

        {/* list rows */}
        <g transform="translate(24,78)">
          {[1, 2, 3, 4, 5].map((n, i) => (
            <g key={i} transform={`translate(0, ${i * 64})`}>
              <rect x="0" y="0" width="312" height="52" rx="10" fill="#fff" />
              <text x="14" y="34" fontSize="18" fontWeight="700" fill="#0f172a">
                {i + 1}
              </text>
              <circle cx="58" cy="26" r="14" fill="#fde68a" />
              <text x="86" y="34" fontSize="14" fill="#0f172a">
                Team {i + 1}
              </text>
              <text x="240" y="34" fontSize="14" fill="#6b7280">
                {20 - i * 3} pts
              </text>
            </g>
          ))}
        </g>

        {/* mini sparkline per team */}
        <g transform="translate(24,420)">
          <text x="0" y="0" fontSize="12" fill="#6b7280">
            Form
          </text>
          <g transform="translate(0,12)">
            {[0, 1, 2, 3, 4].map((r, idx) => (
              <rect
                key={idx}
                x={idx * 24}
                y={Math.abs(12 - idx * 6)}
                width="12"
                height={12 + idx * 4}
                rx="2"
                fill={idx % 2 ? "#34d399" : "#bbf7d0"}
              />
            ))}
          </g>
        </g>
      </svg>
    );
  }

  function TeamManagementSVG() {
    return (
      <svg
        viewBox="0 0 360 780"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="28"
          ry="28"
          fill="url(#bg3)"
        />
        <defs>
          <linearGradient id="bg3" x1="0" x2="1">
            <stop offset="0" stopColor="#f7f7ff" />
            <stop offset="1" stopColor="#f0f4ff" />
          </linearGradient>
        </defs>

        <text x="24" y="48" fontSize="16" fontWeight="700" fill="#1e293b">
          Team
        </text>

        {/* roster avatars */}
        <g transform="translate(24,86)">
          {["A", "B", "C", "D", "E"].map((l, i) => (
            <g key={i} transform={`translate(0, ${i * 56})`}>
              <circle cx="26" cy="16" r="18" fill="#c7d2fe" />
              <text x="20" y="22" fontSize="14" fontWeight="700" fill="#3730a3">
                {l}
              </text>
              <text x="64" y="22" fontSize="14" fill="#0f172a">
                Player {i + 1}
              </text>
              <rect
                x="260"
                y="6"
                width="50"
                height="20"
                rx="8"
                fill={i === 0 ? "#34d399" : "#e5e7eb"}
              />
              <text
                x="274"
                y="20"
                fontSize="11"
                fill={i === 0 ? "#064e3b" : "#6b7280"}
                textAnchor="middle"
              >
                {i === 0 ? "C" : "BEN"}
              </text>
            </g>
          ))}
        </g>

        {/* tactics mini */}
        <g transform="translate(24,380)">
          <rect x="0" y="0" width="312" height="140" rx="12" fill="#fff" />
          <text x="12" y="22" fontSize="14" fill="#0f172a">
            Tactics Board
          </text>

          {/* mini pitch */}
          <rect x="24" y="36" width="264" height="84" rx="8" fill="#ecfeff" />
          <circle cx="70" cy="78" r="8" fill="#60a5fa" />
          <circle cx="120" cy="52" r="8" fill="#60a5fa" />
          <circle cx="200" cy="36" r="8" fill="#60a5fa" />
          <circle cx="250" cy="76" r="8" fill="#60a5fa" />
        </g>
      </svg>
    );
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

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

    try {
      const result = await sendEmail({
        name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        email: formData.email.trim(),
        subject: formData.subject,
        message: formData.message.trim(),
        type: "contact",
      });

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

  // Mock league leader data
  const leagueLeaders = [
    {
      rank: 1,
      name: "Alex Thunder",
      successor: "J. Martinez",
      points: 1450,
      winningStreak: true,
    },
    {
      rank: 2,
      name: "Sam Strike",
      successor: "R. Gomez",
      points: 1320,
      winningStreak: false,
    },
    {
      rank: 3,
      name: "Liam Vortex",
      successor: "K. Patel",
      points: 1285,
      winningStreak: true,
    },
  ];

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
          <div className="flex items-center justify-around">
            {/* Brand Logo / Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center space-x-2"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="text-2xl font-bold text-green-600 dark:text-green-300 tracking-tight bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent"
              >
                Tactix<span className="align-super text-xs ml-1">™</span>
              </motion.span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", href: "#home" },
                { name: "Features", href: "#features" },
                { name: "Download", href: "#download" },
                { name: "Contact", href: "#contact" },
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
                { name: "Features", href: "#features" },
                { name: "Download", href: "#download" },
                { name: "Contact", href: "#contact" },
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
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-first lg:order-first flex flex-col items-center"
            >
              <div className="relative flex items-center justify-center space-x-[-40px]">
                {[
                  { Component: LiveStatsSVG, key: "live" },
                  { Component: LeagueRankingsSVG, key: "rank" },
                  { Component: TeamManagementSVG, key: "team" },
                ].map((item, index) => {
                  const visibleClasses = index === 0 ? "" : "hidden lg:block";
                  // sizing: mobile shows a single bigger frame; lg shows three smaller frames fanned
                  const sizeClasses =
                    "max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] xl:max-w-[340px] w-full";
                  return (
                    <motion.div
                      key={item.key}
                      initial={{
                        rotate: (index - 1) * 15,
                        x: (index - 1) * 50,
                        scale: index === 0 ? 1.03 : 0.98,
                      }}
                      animate={{ rotate: (index - 1) * 15, x: 0, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{ originX: 0.5, originY: 0.5 }}
                      className={`${visibleClasses} ${sizeClasses} z-${10 + index}`}
                    >
                      <IPhoneFrame>
                        <div className="h-full w-full overflow-hidden rounded-2xl">
                          {/* Render the SVG mockup */}
                          <item.Component />
                        </div>
                      </IPhoneFrame>
                    </motion.div>
                  );
                })}
              </div>
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
                className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white leading-tight"
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
                className="text-xl text-green-600 mb-8 max-w-lg"
              >
                Experience the ultimate fantasy football platform with advanced
                tactics, real-time analytics, and competitive gameplay that puts
                you in control.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-col items-center lg:items-start space-y-6 mt-12"
              >
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <motion.a
                      href="https://www.apple.com/app-store/"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block group"
                    >
                      <div className="bg-black hover:bg-gray-800 transition-colors duration-300 rounded-xl px-4 py-2 flex items-center space-x-2 shadow-lg hover:shadow-xl">
                        <svg
                          className="w-6 h-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-gray-300 leading-tight">
                            Download on the
                          </div>
                          <div className="text-sm font-semibold text-white leading-tight">
                            App Store
                          </div>
                        </div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://play.google.com/store"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block group"
                    >
                      <div className="bg-black hover:bg-gray-800 transition-colors duration-300 rounded-xl px-4 py-2 flex items-center space-x-2 shadow-lg hover:shadow-xl">
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
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
                          <div className="text-sm font-semibold text-white leading-tight">
                            Google Play
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  </div>
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
      <section
        id="features"
        className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
      >
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

      {/* How to Play Section */}
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
              <div className="relative bg-gray-800 rounded-t-xl p-2 shadow-2xl">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden min-h-[500px]">
                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <div className="flex-1 bg-white dark:bg-gray-700 rounded px-3 py-1 text-sm text-gray-600 dark:text-gray-300">
                        tacticsplc.com/how-to-play
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-8">
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

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          {/* Tactical Elements Overlay */}
          <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1200 800"
              className="w-full h-full"
            >
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
            {/* Contact Hero */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <Target className="w-4 h-4 mr-2" />
                Tactical Support Command
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-lime-600 to-emerald-600 bg-clip-text text-transparent">
                Execute Your Contact Strategy
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Deploy your message with precision. Our tactical support team is
                ready to assist you in dominating your fantasy football
                challenges.
              </p>
            </motion.div>

            {/* Tactical Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6 mb-16"
            >
              <Card className="border-green-200 dark:border-green-800 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
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

           

            <div className=" max-w-7xl mx-auto">
              {/* Contact Methods - Tactical Formation */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 flex flex-col justify-between items-center"
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                    Choose Your Formation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Select your preferred tactical approach to reach our team
                  </p>
                </div>

                <div className="relative">
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
                Available on iOS and Android. Start your fantasy football
                journey now!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="https://www.apple.com/app-store/"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block group"
              >
                <div className="bg-black hover:bg-gray-800 transition-colors duration-300 rounded-xl px-6 py-3 flex items-center space-x-3 shadow-lg hover:shadow-xl">
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

              <motion.a
                href="https://play.google.com/store"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block group"
              >
                <div className="bg-black hover:bg-gray-800 transition-colors duration-300 rounded-xl px-6 py-3 flex items-center space-x-3 shadow-lg hover:shadow-xl">
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
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            <div className="min-w-[200px]">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">Tactics PLC</span>
              </div>
              <p className="text-gray-400">
                The ultimate fantasy football platform for tactical masterminds.
              </p>
            </div>

            <div className="min-w-[150px]">
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
            <p>&copy; Tactics PLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
