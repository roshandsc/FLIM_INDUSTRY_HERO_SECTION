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
      <header className="bg-gray-900/95 text-gray-100 shadow-lg fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-700 transition-all duration-300 rounded-full">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center space-x-2">
            <img
              src="/Tessa_Cloud_Learn_Logo_2-removebg-preview.png"
              alt="Tessa Cloud Logo"
              className="w-16 sm:w-20 md:w-24 h-auto object-contain"
            />
          </div>
          <nav className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start w-full sm:w-auto gap-4 sm:gap-6 text-sm font-semibold text-gray-100">
            <a
              href="#home"
              className="relative group hover:text-purple-400 transition-colors duration-300 flex-1 text-center sm:text-left"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a
              href="#internships"
              className="relative group hover:text-purple-400 transition-colors duration-300 flex-1 text-center sm:text-left"
            >
              Internships
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a
              href="#career"
              className="relative group hover:text-purple-400 transition-colors duration-300 flex-1 text-center sm:text-left"
            >
              Career Resource
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a
              href="#about"
              className="relative group hover:text-purple-400 transition-colors duration-300 flex-1 text-center sm:text-left"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a
              href="#contact"
              className="relative group hover:text-purple-400 transition-colors duration-300 flex-1 text-center sm:text-left"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </nav>
        </div>
      </header>
      {/* ----------------------------- Hero Section ----------------------------- */}
      <section className="hero-section relative w-full h-screen flex flex-col items-center justify-start text-center overflow-hidden pt-[15vh] px-4 sm:px-6">
        {/* Background overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat filter brightness-50"
          style={{ backgroundImage: "url('/banner_img_ts.png')" }}
        ></div>

        <div className="hero-content relative z-10 flex flex-col items-center gap-6 w-full max-w-5xl">
          <motion.img
            src="/Tessa Cloud - Logo for Website.png"
            alt="Tessa Cloud Logo"
            className="mx-auto w-20 sm:w-28 md:w-36 h-auto"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.h1
            className="text-2xl sm:text-4xl md:text-6xl font-bold text-white px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Explore Your Internship Opportunities
          </motion.h1>

          <motion.p
            className="text-xs sm:text-lg md:text-xl text-gray-300 max-w-lg px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Choose your internship duration and find the perfect learning path!
          </motion.p>

          <motion.div
            className="hero-buttons flex flex-wrap justify-center gap-3 mt-4 max-w-full px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {Object.keys(internshipData).map((category, i) => (
              <motion.button
                key={i}
                className="red-button bg-red-600 hover:bg-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 min-w-[140px] sm:min-w-[160px]"
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
