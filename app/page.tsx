"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
  Clock,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FootballBackground } from "@/components/football-background";
import { PartnersSection } from "@/components/partners-section";
import { IPhoneFrame } from "@/components/iphone-frame";
import { sendEmail, testSMTPConnection } from "@/lib/email-service";

export default function FantasyFootballWebsite() {
  const [activeTab, setActiveTab] = useState(0);
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Email Playbook",
      subtitle: "Hail Mary Pass",
      contact: (
        <a
          href="mailto:support@tacticsplc.com"
          className="hover:text-green-500 transition-colors duration-200"
        >
          support@tacticsplc.com
        </a>
      ),
      details: "Instant play execution within 10 hours",
      buttonText: "Launch Email",
      buttonAction: () =>
        (window.location.href = "mailto:support@tacticsplc.com"),
      gradient: "from-green-500 to-lime-400",
      textColor: "text-green-600",
    },
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Direct Blitz Line",
      subtitle: "Quick Snap",
      contact: (
        <a
          href="tel:+15551234567"
          className="hover:text-green-500 transition-colors duration-200"
        >
          +1 (555) 123-4567
        </a>
      ),
      details: "Live play-calling Mon-Sat, 7AM-9PM EST",
      buttonText: "Call the Play",
      buttonAction: () => (window.location.href = "tel:+15551234567"),
      gradient: "from-lime-400 to-emerald-500",
      textColor: "text-emerald-600",
    },
  ];
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
  const HowToPlay = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };

    const cardVariants = {
      rest: { scale: 1, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
      hover: {
        scale: 1.03,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 },
      },
      tap: { scale: 0.98 },
    };

    return (
      <section
        id="how-to-play"
        className="py-16 sm:py-20 bg-transparent dark:from-green-950 dark:to-lime-950 relative overflow-hidden"
        ref={ref}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Getting Started
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
              Master the Game
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn how to dominate your fantasy league with our comprehensive
              step-by-step guide
            </p>
          </motion.div>

          {/* Cosmic Soccer Pitch Background */}
          <div className="relative max-w-7xl mx-auto">
            {/* Pitch Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4ade80_0%,transparent_70%)] opacity-5 animate-pulse"></div>
            {/* Particle Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.span
                className="absolute w-2 h-2 bg-green-400 rounded-full top-10 left-10"
                animate={{ y: [0, -8, 0], opacity: [1, 0.4, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                className="absolute w-3 h-3 bg-lime-400 rounded-full top-20 right-20"
                animate={{ y: [0, -12, 0], opacity: [1, 0.4, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.span
                className="absolute w-2 h-2 bg-green-500 rounded-full bottom-10 left-1/3"
                animate={{ y: [0, -10, 0], opacity: [1, 0.4, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

            {/* Steps as Interactive Cards */}
            <motion.div
              className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
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
                  zone: "Goal Area",
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
                  zone: "Defense Line",
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
                  zone: "Midfield",
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
                  zone: "Attack Line",
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
                  zone: "Opponent's Goal",
                },
              ].map((instruction, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  animate="rest"
                  custom={cardVariants}
                >
                  <Card
                    className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300"
                    role="article"
                    aria-labelledby={`step-title-${index}`}
                  >
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full z-10">
                      {instruction.zone}
                    </div>
                    <CardHeader className="pt-8 pb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                        {instruction.step}
                      </div>
                      <CardTitle
                        id={`step-title-${index}`}
                        className="text-lg sm:text-xl lg:text-2xl text-center text-gray-900 dark:text-white"
                      >
                        {instruction.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base text-center">
                        {instruction.description}
                      </p>
                      <ul className="space-y-2">
                        {instruction.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start gap-2"
                          >
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Summary Cards */}
          <motion.div
            className="max-w-7xl mx-auto mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
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
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                animate="rest"
                custom={cardVariants}
              >
                <Card
                  className="text-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300"
                  role="article"
                  aria-labelledby={`summary-title-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                      {step.step}
                    </div>
                    <CardTitle
                      id={`summary-title-${index}`}
                      className="text-lg sm:text-xl lg:text-2xl mb-3 text-gray-900 dark:text-white"
                    >
                      {step.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };
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
      <HowToPlay />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-28 bg-gradient-to-b from-gray-100 to-green-100/80 dark:from-gray-900 dark:to-green-900/80 backdrop-blur-lg relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          {/* Tactical Elements Overlay - Game-like HUD */}
          <div className="absolute inset-0 z-0 opacity-20 dark:opacity-15 pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1200 800"
              className="w-full h-full"
            >
              <defs>
                <marker
                  id="tacticalArrow"
                  markerWidth="16"
                  markerHeight="12"
                  refX="14"
                  refY="6"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 16 6, 0 12"
                    fill="currentColor"
                    className="text-green-400 drop-shadow-glow"
                  />
                </marker>
              </defs>
              <motion.circle
                cx="150"
                cy="150"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                className="text-green-400"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
              <motion.line
                x1="150"
                y1="150"
                x2="400"
                y2="250"
                stroke="currentColor"
                strokeWidth="5"
                className="text-green-400"
                markerEnd="url(#tacticalArrow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <motion.line
                x1="850"
                y1="200"
                x2="600"
                y2="300"
                stroke="currentColor"
                strokeWidth="5"
                className="text-lime-400"
                markerEnd="url(#tacticalArrow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2.3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.7,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx="300"
                cy="600"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                className="text-emerald-400"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                transition={{
                  duration: 1.8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: 1.2,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Contact Hero - Gamified Mission Brief */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-24"
            >
              <Badge className="mb-6 bg-green-500/80 text-white dark:bg-green-700/80 dark:text-green-100 font-semibold py-3 px-6 rounded-full shadow-lg animate-pulse">
                <Target className="w-6 h-6 mr-3" />
                Mission: Contact Command
              </Badge>
              <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-lime-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-md">
                Launch Your Game Plan
              </h2>
              <p className="text-2xl text-gray-700 dark:text-gray-100 max-w-4xl mx-auto">
                Lock in your strategy and connect with our elite squad to crush
                your fantasy football challenges like a pro!
              </p>
            </motion.div>

            {/* Tactical Stats - Scoreboard Style */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="grid md:grid-cols-3 gap-10 mb-24"
            >
              <Card className="border-green-300/50 dark:border-green-700/50 text-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-r from-green-500 to-lime-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Clock className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-4xl font-bold text-green-600 mb-3 animate-bounce">
                    30 Mins
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-200">
                    Blitz Response Time
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-300/50 dark:border-green-700/50 text-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-4xl font-bold text-lime-600 mb-3 animate-bounce">
                    24/7
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-200">
                    All-Play Coverage
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-300/50 dark:border-green-700/50 text-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-10">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Trophy className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-4xl font-bold text-emerald-600 mb-3 animate-bounce">
                    100%
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-200">
                    Victory Rate
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              {/* Contact Methods - Tactical Playbook Carousel */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="space-y-10"
              >
                <div className="text-center mb-12">
                  <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-400 bg-clip-text text-transparent drop-shadow-md">
                    Select Your Play
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-100">
                    Slide through the playbook to choose your winning contact
                    strategy!
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  <Card className="border-green-300/50 dark:border-green-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl">
                    <CardHeader>
                      <div className="flex justify-between mb-6">
                        <motion.button
                          className="px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-white shadow-lg"
                          whileHover={{
                            scale: 1.1,
                            boxShadow: "0 0 15px rgba(0, 255, 0, 0.5)",
                          }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            setActiveTab((prev) =>
                              prev === 0 ? contactMethods.length - 1 : prev - 1
                            )
                          }
                        >
                          Previous Play
                        </motion.button>
                        <motion.button
                          className="px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-lime-400 to-emerald-500 text-white shadow-lg"
                          whileHover={{
                            scale: 1.1,
                            boxShadow: "0 0 15px rgba(0, 255, 0, 0.5)",
                          }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            setActiveTab((prev) =>
                              prev === contactMethods.length - 1 ? 0 : prev + 1
                            )
                          }
                        >
                          Next Play
                        </motion.button>
                      </div>
                    </CardHeader>
                    <CardContent className="min-h-[200px] flex items-center justify-center">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="w-full text-center"
                      >
                        <div className="flex items-center justify-center mb-4">
                          <motion.div
                            className={`w-16 h-16 bg-gradient-to-r ${contactMethods[activeTab].gradient} rounded-full flex items-center justify-center shadow-lg`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {contactMethods[activeTab].icon}
                          </motion.div>
                          <div className="ml-6">
                            <h4
                              className={`text-2xl font-semibold ${contactMethods[activeTab].textColor}`}
                            >
                              {contactMethods[activeTab].title}
                            </h4>
                            <p className="text-base text-gray-600 dark:text-gray-300">
                              {contactMethods[activeTab].subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-xl text-gray-600 dark:text-gray-100 mb-3">
                          {contactMethods[activeTab].contact}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          {contactMethods[activeTab].details}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200"
                          onClick={contactMethods[activeTab].buttonAction}
                        >
                          {contactMethods[activeTab].buttonText}
                        </motion.button>
                      </motion.div>
                    </CardContent>
                  </Card>
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
