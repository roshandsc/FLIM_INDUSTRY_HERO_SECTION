"use client";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });
// Suppress specific React hydration warning in development (e.g., Grammarly extension)
if (process.env.NODE_ENV === "development") {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes(
        "A tree hydrated but some attributes of the server rendered HTML didn't match the client properties"
      )
    ) {
      return; // ignore this specific hydration warning
    }
    originalConsoleError(...args);
  };
}
import React from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileAlt, FaComments, FaUserTie, FaLinkedin } from "react-icons/fa";
import {
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";

const HydrationSafe = ({ children }) => {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => setHydrated(true), []);
  if (!hydrated) return null;
  return children;
};

export default function TessaCloudLanding() {
  const [showAll, setShowAll] = React.useState(false);
  const [selectedInternship, setSelectedInternship] = React.useState(null);
  const [showAbout, setShowAbout] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);

  // Ref for popular categories section
  const popularCategoriesRef = React.useRef(null);

  const internships = [
    {
      title: "DSA using C++",
      iconName: "FaCode",
      duration: "6 Months",
      mode: "Online",
      color: "blue-400",
    },
    {
      title: "Web Development",
      iconName: "FaGlobe",
      duration: "4-12 weeks",
      mode: "Online",
      color: "green-400",
    },
    {
      title: "Mobile App Development",
      iconName: "FaMobileAlt",
      duration: "4-12 weeks",
      mode: "Hybrid",
      color: "purple-400",
    },
    {
      title: "Machine Learning / AI",
      iconName: "FaRobot",
      duration: "6-24 weeks",
      mode: "Hybrid",
      color: "yellow-400",
    },
    {
      title: "Data Science & Analytics",
      iconName: "FaChartLine",
      duration: "4-12 weeks",
      mode: "Online",
      color: "red-400",
    },
    {
      title: "Cybersecurity Basics",
      iconName: "FaShieldAlt",
      duration: "4-12 weeks",
      mode: "Online",
      color: "blue-500",
    },
    {
      title: "Desktop App Development",
      iconName: "FaDesktop",
      duration: "4-12 weeks",
      mode: "Hybrid",
      color: "indigo-400",
    },
    {
      title: "Software Testing & QA",
      iconName: "FaCheckCircle",
      duration: "4-12 weeks",
      mode: "Online",
      color: "green-500",
    },
    {
      title: "DevOps / Cloud Basics",
      iconName: "FaCloud",
      duration: "4-12 weeks",
      mode: "Hybrid",
      color: "teal-400",
    },
    {
      title: "Open Source Contribution",
      iconName: "FaGithub",
      duration: "4-12 weeks",
      mode: "Remote",
      color: "gray-400",
    },
    {
      title: "Game Development (Beginner)",
      iconName: "FaGamepad",
      duration: "4-12 weeks",
      mode: "Hybrid",
      color: "pink-400",
    },
    {
      title: "Full Stack Development (6 Months)",
      iconName: "FaLayerGroup",
      duration: "6 Months",
      mode: "Hybrid",
      color: "orange-400",
    },
  ];

  const trainings = [
    {
      title: "Resume Building",
      icon: <FaFileAlt className="text-2xl text-blue-400" />,
    },
    {
      title: "Mock Interviews",
      icon: <FaComments className="text-2xl text-green-400" />,
    },
    {
      title: "Soft Skills Training",
      icon: <FaUserTie className="text-2xl text-yellow-400" />,
    },
    {
      title: "LinkedIn Optimization",
      icon: <FaLinkedin className="text-2xl text-blue-500" />,
    },
  ];

  // Mobile menu toggle state
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Handler to scroll to popular categories section
  const handleScrollToPopularCategories = React.useCallback(() => {
    if (popularCategoriesRef.current) {
      popularCategoriesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  // Define rows explicitly
  const firstRow = [
    "DSA using C++",
    "Web Development",
    "Cybersecurity Basics",
    "Machine Learning / AI",
  ];
  const secondRow = [
    "Data Science & Analytics",
    "Mobile App Development",
    "Desktop App Development",
    "Full Stack Development (6 Months)",
  ];
  const remaining = [
    "Software Testing & QA",
    "DevOps / Cloud Basics",
    "Open Source Contribution",
    "Game Development (Beginner)",
  ];

  // Map titles to internship objects
  const rows = [
    firstRow.map((title) => internships.find((i) => i.title === title)),
    secondRow.map((title) => internships.find((i) => i.title === title)),
    remaining.map((title) => internships.find((i) => i.title === title)),
  ];

  const displayedInternships = showAll
    ? rows.flat()
    : rows[0].concat(rows[1].slice(0, Math.max(0, 4 - rows[0].length)));

  return (
    <>
      <Head>
        <title>Tessa Learn</title>
      </Head>
      <div className="min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-gray-800 font-inter">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/50">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Tessa Cloud Logo"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
                <span
                  className={`text-lg font-semibold text-white ml-2 ${rubik.className}`}
                >
                  Tessa Learn
                </span>
              </div>
            </div>

            <nav className="hidden md:flex gap-6 items-center text-sm">
              <a href="#" className="hover:text-red-500 transition">
                Home
              </a>
              <a
                href="#"
                className="hover:text-red-500 transition"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToPopularCategories();
                }}
              >
                Internships
              </a>
              <a
                href="https://tessacloud.com/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                Careers
              </a>
              <a
                href="#"
                onClick={() => setShowAbout(true)}
                className="hover:text-red-500 transition"
              >
                About Us
              </a>
              <a
                href="#"
                onClick={() => setShowContact(true)}
                className="hover:text-red-500 transition"
              >
                Contact Us
              </a>
            </nav>

            <div className="flex gap-4 text-gray-400 text-lg md:text-base">
              <a
                href="https://www.facebook.com/people/Tessa-Cloud/61581878499209/?mibextid=wwXIfr&rdid=HD8KRTnU03Wf9mg8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CPK8RWDva%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/its_tessa_cloud/?igsh=dzRyaHBtY2tod3hx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/tessacloud"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>

            {/* Mobile menu button and dropdown */}
            <div className="md:hidden relative">
              <button
                aria-label="toggle mobile menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-xl"
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </button>

              {mobileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-lg flex flex-col py-2">
                  <a
                    href="#"
                    className="px-4 py-2 hover:bg-gray-800 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 hover:bg-gray-800 transition"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      setTimeout(() => {
                        handleScrollToPopularCategories();
                      }, 100);
                    }}
                  >
                    Internships
                  </a>
                  <a
                    href="https://tessacloud.com/careers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 hover:bg-gray-800 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Careers
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 hover:bg-gray-800 transition"
                    onClick={() => {
                      setShowAbout(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 hover:bg-gray-800 transition"
                    onClick={() => {
                      setShowContact(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="pt-24">
          {/* About Us Popup */}
          <HydrationSafe>
            <AnimatePresence>
              {showAbout && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
                  onClick={() => setShowAbout(false)}
                >
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="bg-gradient-to-br from-gray-900 to-black text-gray-200 rounded-2xl shadow-2xl border border-gray-700 max-w-2xl w-full p-8 relative"
                  >
                    <button
                      onClick={() => setShowAbout(false)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                    >
                      ✕
                    </button>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                      About Tessa Cloud
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Tessa Cloud builds intelligent enterprise-grade software
                      applications leveraging AI to solve complex business
                      challenges efficiently. Our solutions automate workflows,
                      enhance productivity, and empower innovation. With a focus
                      on cutting-edge technology, Tessa Cloud delivers scalable
                      and secure solutions tailored to enterprise needs.
                    </p>
                    <div className="mt-4 text-sm text-gray-400 italic">
                      “Innovate. Automate. Elevate.”
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </HydrationSafe>
          {/* Contact Us Popup */}
          <HydrationSafe>
            <AnimatePresence>
              {showContact && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
                  onClick={() => setShowContact(false)}
                >
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="bg-gradient-to-br from-gray-900 to-black text-gray-200 rounded-2xl shadow-2xl border border-gray-700 max-w-md w-full p-8 relative"
                  >
                    <button
                      onClick={() => setShowContact(false)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                    >
                      ✕
                    </button>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                      Contact Tessa Cloud
                    </h3>
                    <div className="space-y-4 text-sm">
                      <p>
                        We’d love to hear from you! Reach out to us via email or
                        phone.
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@tessacloud.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          info@tessacloud.com
                        </a>
                      </p>
                      <p>
                        <strong>Phone:</strong>{" "}
                        <a
                          href="tel:+911234567890"
                          className="text-blue-400 hover:underline"
                        >
                          +91 12345 67890
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </HydrationSafe>
          {/* Hero */}
          {/* Hero */}
          <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
            <HydrationSafe>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Explore Your Internship Opportunities
                </h1>
                <p className="mt-4 text-gray-300 max-w-xl">
                  Choose your internship duration and find the perfect learning
                  path!
                </p>
                <HydrationSafe>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                  >
                    <button
                      onClick={() => handleScrollToPopularCategories()}
                      className="px-6 py-3 rounded-md text-white bg-red-600 hover:bg-red-500 shadow-lg w-full sm:w-auto"
                    >
                      View Internships
                    </button>
                    <button
                      onClick={() => setShowContact(true)}
                      className="px-6 py-3 rounded-md text-white bg-transparent border border-red-600 hover:bg-red-600/10 shadow-lg w-full sm:w-auto"
                    >
                      Contact Us
                    </button>
                  </motion.div>
                </HydrationSafe>
              </motion.div>
            </HydrationSafe>
            <HydrationSafe>
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full"
              >
                <div className="w-full h-72 md:h-96 rounded-2xl bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src="/wmremove-transformed.png"
                    alt="Hero banner"
                    className="w-full h-full object-cover rounded-2xl brightness-95"
                  />
                </div>
              </motion.div>
            </HydrationSafe>
          </section>
          {/* Internship Cards */}
          <section
            className="max-w-7xl mx-auto px-6 py-12"
            ref={popularCategoriesRef}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent tracking-wide text-center">
              Unlock Your Future | Explore Opportunities That Shape You
            </h2>
            <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
              Every great career begins with a single step. Discover internships
              designed to fuel your curiosity, challenge your creativity, and
              launch your professional journey.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {displayedInternships.map((it) => {
                const IconComponent = FaIcons[it.iconName];
                return (
                  <HydrationSafe key={it.title}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow min-h-[260px] flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {IconComponent && (
                          <IconComponent
                            className={`text-2xl ${
                              it.title === "Mobile App Development"
                                ? "text-purple-400"
                                : it.color === "blue-400"
                                ? "text-blue-400"
                                : it.color === "green-400"
                                ? "text-green-400"
                                : it.color === "yellow-400"
                                ? "text-yellow-400"
                                : it.color === "red-400"
                                ? "text-red-400"
                                : it.color === "blue-500"
                                ? "text-blue-500"
                                : it.color === "indigo-400"
                                ? "text-indigo-400"
                                : it.color === "green-500"
                                ? "text-green-500"
                                : it.color === "teal-400"
                                ? "text-teal-400"
                                : it.color === "gray-400"
                                ? "text-gray-400"
                                : it.color === "pink-400"
                                ? "text-pink-400"
                                : it.color === "orange-400"
                                ? "text-orange-400"
                                : "text-white"
                            }`}
                          />
                        )}
                        <div className="text-lg font-semibold">{it.title}</div>
                      </div>
                      <div className="text-sm text-gray-400 mt-2 flex flex-col gap-2 flex-grow">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span>{it.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mode:</span>
                          <span>{it.mode}</span>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <button
                          onClick={() => setSelectedInternship(it)}
                          className="w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-700 via-red-500 to-gray-900 text-white font-semibold shadow-[0_0_6px_rgba(255,0,85,0.2)] hover:shadow-[0_0_10px_rgba(255,0,85,0.3)] transition-all duration-300 hover:scale-105 hover:from-gray-900 hover:to-red-700"
                        >
                          <span className="tracking-wide">View Details →</span>
                        </button>
                      </div>
                    </motion.div>
                  </HydrationSafe>
                );
              })}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 rounded-md bg-gradient-to-r from-purple-600 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                {showAll ? "View Less ▲" : "View More ▼"}
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-10 bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 p-[2px] rounded-xl shadow-lg"
            >
              <div className="bg-gray-900 p-8 rounded-xl text-white relative overflow-hidden">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent tracking-wide"
                >
                  ✨ Why Choose <span className="text-white">Tessa Learn?</span>
                </motion.h3>

                <ul className="space-y-4 text-gray-300 text-sm md:text-base relative z-10">
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaChalkboardTeacher className="text-yellow-400 text-xl" />
                    <span>
                      <strong>Hands-on Learning:</strong> Work on real projects
                      from Day 1 and build an impressive portfolio employers
                      love.
                    </span>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaProjectDiagram className="text-green-400 text-xl" />
                    <span>
                      <strong>Integrated Projects:</strong> Collaborate with
                      mentors and peers on live products — the ultimate skill
                      booster.
                    </span>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaChartLine className="text-blue-400 text-xl" />
                    <span>
                      <strong>Career Growth:</strong> From internship to
                      placement — Tessa Learn bridges the gap between learning
                      and earning.
                    </span>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaLightbulb className="text-pink-400 text-xl" />
                    <span>
                      <strong>Creative Edge:</strong> Learn with purpose. Build
                      with passion. Leave your digital footprint with
                      innovation.
                    </span>
                  </motion.li>
                </ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="mt-6 text-center text-sm md:text-base italic text-gray-400"
                >
                  “Your journey to brilliance starts here — innovate, grow, and
                  make a mark with Tessa Learn.”
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                  className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-red-400 to-yellow-300 opacity-20 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                  }}
                  className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-r from-pink-500 to-blue-400 opacity-20 rounded-full blur-3xl"
                />
              </div>
            </motion.div>
          </section>

          {selectedInternship && (
            <HydrationSafe>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm overflow-y-auto p-4"
                onClick={() => setSelectedInternship(null)}
              >
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-3xl w-full shadow-2xl border border-gray-700 relative"
                >
                  <button
                    onClick={() => setSelectedInternship(null)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                  >
                    ✕
                  </button>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                    {selectedInternship.title}
                  </h3>
                  {/* Render detailed content based on selected internship */}
                  {selectedInternship.title === "DSA using C++" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 6 Months |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>C++ Refresher & Basic Data Structures:</strong>
                      </p>
                      <ul className="list-disc list-inside ml-4">
                        <li>
                          Reviewed C++ basics, variables, data types, control
                          structures
                        </li>
                        <li>
                          Implemented arrays, strings, structures, pointers
                        </li>
                        <li>Solved searching and sorting problems</li>
                      </ul>
                      <p>
                        <strong>Linked Lists, Stacks, and Queues:</strong>
                      </p>
                      <ul className="list-disc list-inside ml-4">
                        <li>
                          Implemented singly, doubly, circular linked lists
                        </li>
                        <li>
                          Built stacks and queues using array and linked lists
                        </li>
                        <li>Introduced STL containers: stack, queue, list</li>
                      </ul>
                      <p>
                        <strong>Trees and Recursion:</strong>
                      </p>
                      <ul className="list-disc list-inside ml-4">
                        <li>Implemented binary trees and BSTs</li>
                        <li>
                          Practiced traversals: inorder, preorder, postorder
                        </li>
                        <li>
                          Worked on recursive problems and LCA, height, diameter
                          calculations
                        </li>
                      </ul>
                      <p>
                        <strong>Graphs & Final Project:</strong>
                      </p>
                      <ul className="list-disc list-inside ml-4">
                        <li>
                          Graph implementation using adjacency list/matrix
                        </li>
                        <li>
                          Traversal: BFS, DFS; Algorithms: Dijkstra, Topological
                          Sorting, Cycle Detection
                        </li>
                        <li>Final project: Mini DSA console project</li>
                      </ul>
                      <p>
                        <strong>Skills Gained:</strong>
                      </p>
                      <ul className="list-disc list-inside ml-4">
                        <li>Core DSA concepts in C++</li>
                        <li>
                          Problem-solving using recursion, pointers, and dynamic
                          memory
                        </li>
                        <li>
                          Code debugging, optimization, and real-world DSA
                          challenges
                        </li>
                      </ul>
                    </div>
                  )}
                  {selectedInternship.title === "Web Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Frontend:</strong> HTML, CSS, JavaScript, React,
                        Vue
                      </p>
                      <p>
                        <strong>Backend:</strong> Node.js, Express, Django,
                        Flask
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Build a portfolio
                        website, to-do app, or blog CMS
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Mobile App Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Hybrid
                      </p>
                      <p>
                        <strong>Platforms:</strong> Android (Java/Kotlin), iOS
                        (Swift), Flutter (Dart)
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Weather app, Expense
                        tracker, Notes app
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Machine Learning / AI" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 6-24 weeks |{" "}
                        <strong>Mode:</strong> Hybrid
                      </p>
                      <p>
                        <strong>Tools:</strong> Python, Scikit-learn,
                        TensorFlow, OpenCV
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Image classifier,
                        Chatbot, Sentiment analysis
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Data Science & Analytics" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Tools:</strong> Python, Pandas, Excel, Power BI,
                        SQL
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Analyze a dataset, Sales
                        dashboard, Data visualization reports
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Cybersecurity Basics" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Topics:</strong> Network security, OWASP Top 10,
                        Ethical Hacking (Kali Linux), Web vulnerabilities
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Basic penetration
                        testing on a test website, password strength checker
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Desktop App Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Hybrid
                      </p>
                      <p>
                        <strong>Tech:</strong> Java (Swing/JavaFX), Python
                        (Tkinter/PyQt), Electron.js
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Calculator, Notepad,
                        File Organizer
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Software Testing & QA" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Types:</strong> Manual Testing, Automation
                        (Selenium, Postman)
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Create test cases for a
                        small app, automate login flow testing
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "DevOps / Cloud Basics" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Hybrid
                      </p>
                      <p>
                        <strong>Tools:</strong> Git, Docker, CI/CD, AWS, Azure,
                        Google Cloud
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Dockerize a small app,
                        set up CI with GitHub Actions
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Open Source Contribution" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Remote
                      </p>
                      <p>
                        <strong>Platforms:</strong> GitHub, GitLab
                      </p>
                      <p>
                        <strong>Skills:</strong> Git, issue tracking, pull
                        requests
                      </p>
                      <p>
                        <strong>Project Idea:</strong> Contribute documentation
                        or code to beginner-friendly repositories
                      </p>
                    </div>
                  )}
                  {selectedInternship.title ===
                    "Game Development (Beginner)" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Hybrid
                      </p>
                      <p>
                        <strong>Tools:</strong> Unity (C#), Godot, Pygame
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Simple 2D games like
                        Pong, Breakout, or Platformer
                      </p>
                    </div>
                  )}
                  {selectedInternship.title ===
                    "Full Stack Development (6 Months)" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 6 Months |{" "}
                        <strong>Mode:</strong> Hybrid
                      </p>
                      <p>
                        <strong>Frontend:</strong> HTML, CSS, JavaScript, React,
                        Vue
                      </p>
                      <p>
                        <strong>Backend:</strong> Node.js, Express, Django,
                        Flask
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Build a full-stack
                        project (Portfolio, Blog, To-do app)
                      </p>
                    </div>
                  )}
                  <div className="mt-6 text-right">
                    <button
                      onClick={() =>
                        window.open(
                          "https://forms.gle/B8RZpdtVXn5NdUjy6",
                          "_blank"
                        )
                      }
                      className="px-5 py-2.5 rounded-md bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-white font-semibold hover:scale-105 transition-transform"
                    >
                      Enroll Now
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </HydrationSafe>
          )}

          {/* Training & Placement */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold mb-6">
              Training & Placement
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainings.map((t) => (
                <HydrationSafe key={t.title}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="p-5 rounded-xl bg-gradient-to-tr from-black to-gray-900 border border-gray-700 text-center"
                  >
                    <div className="w-14 h-14 mx-auto rounded-full bg-gray-800 flex items-center justify-center mb-3">
                      {t.icon}
                    </div>
                    <div className="font-semibold">{t.title}</div>
                    <p className="text-sm text-gray-400 mt-2">
                      Practical sessions and expert mentors to boost your
                      career.
                    </p>
                  </motion.div>
                </HydrationSafe>
              ))}
            </div>
          </section>
        </main>

        {/* Contact Form Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-white bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-xl mt-12 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
          <p className="text-center text-gray-400 mb-12">
            Have ideas? Let’s talk and build something great together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                Address
              </h3>
              <p className="text-gray-300">
                #136, 4th Cross, BMV Mayanna Layout, Nagasandra Post, Bengaluru
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2 text-red-400">
                Email
              </h3>
              <p className="text-gray-300">
                <a
                  href="mailto:info@tessacloud.com"
                  className="hover:text-red-400 transition"
                >
                  info@tessacloud.com
                </a>
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none text-white"
                />
              </div>
              <input
                type="text"
                placeholder="Your Mobile Number"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none text-white"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none text-white"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-gray-900 hover:from-gray-900 hover:to-red-700 py-3 rounded-md font-semibold text-white shadow-lg hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-800 bg-black/40">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Internships</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Web Dev</li>
                <li>AI/ML</li>
                <li>Cloud</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Jobs</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Entry Level</li>
                <li>Intern to Hire</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Careers</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <a
                    href="https://tessacloud.com/careers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition"
                  >
                    Explore Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-right lg:text-right sm:text-left">
              <h3 className="font-semibold mb-2">About & Contact</h3>
              <p className="text-sm text-gray-400">info@tessacloud.com</p>
              <div className="flex justify-end sm:justify-start lg:justify-end gap-3 mt-2 text-gray-400 text-xl">
                <a
                  href="https://www.facebook.com/people/Tessa-Cloud/61581878499209/?mibextid=wwXIfr&rdid=HD8KRTnU03Wf9mg8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CPK8RWDva%2F%3Fmibextid%3DwwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/its_tessa_cloud/?igsh=dzRyaHBtY2tod3hx&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/tessacloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 py-6">
            © 2025 Tessa Cloud | Internship Platform. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
