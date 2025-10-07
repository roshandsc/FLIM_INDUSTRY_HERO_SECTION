"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdWork, MdSchool, MdStars } from "react-icons/md";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const internshipData = {
    "4 Weeks": [
      "Web Development",
      "Mobile App Development",
      "Machine Learning / AI",
      "Embedded Systems / IoT",
    ],
    "6 Weeks": [
      "Cybersecurity & Ethical Hacking",
      "Data Science & Analytics",
      "Python with Django",
      "UI/UX Design",
    ],
    "6 Months": [
      "DSA Using C++ – 6 Months Internship",
      "Cloud Computing & DevOps",
      "AI / ML Advanced Research",
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (typeof window !== "undefined") {
      const section = document.getElementById("internship-details");
      if (section) {
        window.scrollTo({ top: section.offsetTop - 50, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
      {/* ------------------------- Header Navigation ------------------------- */}
      <header className="bg-gray-900/95 text-gray-100 shadow-lg fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-700 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-shrink-0 space-x-2 w-full sm:w-auto mb-2 sm:mb-0">
            <img
              src="/Tessa_Cloud_Learn_Logo_2-removebg-preview.png"
              alt="Tessa Cloud Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-contain"
            />
            <nav className="hidden md:flex space-x-4 text-sm font-semibold text-gray-100">
              <a
                href="#internship-details"
                className="relative group hover:text-purple-400 transition-colors duration-300"
              >
                Internships
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a
                href="#courses"
                className="relative group hover:text-purple-400 transition-colors duration-300"
              >
                Courses
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a
                href="#offer"
                className="relative group hover:text-purple-400 transition-colors duration-300"
              >
                OFFER
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </nav>
          </div>
          <div className="flex items-center flex-shrink-0 space-x-2 w-full sm:w-auto">
            <div className="relative flex-grow sm:flex-grow-0">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="bg-gray-100 h-8 px-3 pr-8 rounded-full text-xs sm:text-sm w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-1.5 mr-2 text-purple-600 text-sm sm:text-base"
              >
                <FaSearch />
              </button>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs sm:text-sm font-semibold transition">
              Login
            </button>
            <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded text-xs sm:text-sm font-semibold transition">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* ----------------------------- Hero Section ----------------------------- */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center p-6 mt-24">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        >
          <source
            src="/Gemini_Generated_Image_i4dwqii4dwqii4dw.png"
            type="image/png"
          />
        </video>

        <div className="relative z-10">
          <motion.img
            src="/Tessa Cloud - Logo for Website.png"
            alt="Tessa Cloud Logo"
            className="mx-auto w-24 sm:w-32 md:w-36 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Explore Your Internship Opportunities
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Choose your internship duration and find the perfect learning path!
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {Object.keys(internshipData).map((category, i) => (
              <motion.button
                key={i}
                className="bg-red-600 hover:bg-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-all duration-300"
                onClick={() => handleCategoryClick(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category} Internships
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------------- Internship Details Section ------------------------- */}
      <section
        id="internship-details"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-black text-center"
      >
        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-6 sm:mb-8">
                {selectedCategory} Internship Opportunities
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                {internshipData[selectedCategory].map((internship, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 sm:p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {internship}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Duration: {selectedCategory}
                      <br />
                      Mode: Online / Hybrid
                    </p>
                    <button className="mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 rounded hover:bg-red-700 transition text-xs sm:text-sm">
                      View Details
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ------------------------- Training & Placement Section ------------------------- */}
      <section className="py-16 sm:py-20 bg-gray-900 text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-6 sm:mb-10">
          Training & Placement Assistance
        </h2>
        <p className="max-w-xl sm:max-w-3xl mx-auto text-gray-300 mb-8 sm:mb-10 text-sm sm:text-base">
          Get personalized guidance, resume reviews, and interview preparation
          support from industry mentors. We ensure you’re not only trained but
          also ready to take the next step in your career.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            "Resume Building",
            "Mock Interviews",
            "Soft Skills Training",
            "LinkedIn Optimization",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-4 sm:p-6 rounded-lg w-52 sm:w-64 hover:bg-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-white">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------- Footer ------------------------- */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <MdWork /> Internships
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#4weeks" className="hover:text-purple-500 transition">
                  4 Weeks
                </a>
              </li>
              <li>
                <a href="#6weeks" className="hover:text-purple-500 transition">
                  6 Weeks
                </a>
              </li>
              <li>
                <a href="#6months" className="hover:text-purple-500 transition">
                  6 Months
                </a>
              </li>
              <li>
                <a href="#all" className="hover:text-purple-500 transition">
                  All Internships
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <MdStars /> Jobs
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="#fulltime"
                  className="hover:text-purple-500 transition"
                >
                  Full Time
                </a>
              </li>
              <li>
                <a
                  href="#parttime"
                  className="hover:text-purple-500 transition"
                >
                  Part Time
                </a>
              </li>
              <li>
                <a href="#remote" className="hover:text-purple-500 transition">
                  Remote
                </a>
              </li>
              <li>
                <a href="#intern" className="hover:text-purple-500 transition">
                  Internship Jobs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <MdSchool /> Courses
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#webdev" className="hover:text-purple-500 transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#datasci" className="hover:text-purple-500 transition">
                  Data Science
                </a>
              </li>
              <li>
                <a
                  href="#cybersec"
                  className="hover:text-purple-500 transition"
                >
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#design" className="hover:text-purple-500 transition">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              About & Contact
            </h3>
            <p className="mb-4 max-w-xs text-sm sm:text-base">
              Tessa Cloud is your gateway to the best internships, jobs, and
              courses. Connect with us for personalized career guidance.
            </p>
            <div className="flex space-x-4 text-purple-600 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-purple-400 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-purple-400 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-purple-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-purple-400 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-10 text-center text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} Tessa Cloud | Internship Platform. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
}
