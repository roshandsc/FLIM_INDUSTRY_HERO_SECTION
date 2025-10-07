"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TessaCloudLanding() {
  const internships = [
    { title: "Web Development", duration: "4-12 weeks", mode: "Online" },
    { title: "AI / ML", duration: "6-24 weeks", mode: "Hybrid" },
    { title: "Cybersecurity", duration: "6-24 weeks", mode: "Online" },
    { title: "Cloud Engineering", duration: "4-24 weeks", mode: "Hybrid" },
  ];

  const trainings = [
    "Resume Building",
    "Mock Interviews",
    "Soft Skills Training",
    "LinkedIn Optimization",
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-gray-800 font-inter">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-tr from-purple-600 to-red-500 rounded-lg flex items-center justify-center text-sm font-semibold">
                TC
              </div>
              <div className="hidden md:block">
                <div className="text-lg font-semibold">
                  Tessa Cloud<span className="text-red-500"> |</span>{" "}
                  <span className="text-gray-300 text-sm">Learn</span>
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#" className="hover:text-red-500 transition">
              Home
            </a>
            <a href="#" className="hover:text-red-500 transition">
              Internships
            </a>
            <a href="#" className="hover:text-red-500 transition">
              Career Resource
            </a>
            <a href="#" className="hover:text-red-500 transition">
              About Us
            </a>
            <a href="#" className="hover:text-red-500 transition">
              Contact Us
            </a>
          </nav>

          <div className="md:hidden">
            <button aria-label="open menu" className="p-2">
              ☰
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
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

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <button className="px-6 py-3 rounded-md text-white bg-red-600 hover:bg-red-500 shadow-lg w-full sm:w-auto">
                4 Weeks Internships
              </button>
              <button className="px-6 py-3 rounded-md text-white bg-red-600 hover:bg-red-500 shadow-lg w-full sm:w-auto">
                6 Weeks Internships
              </button>
              <button className="px-6 py-3 rounded-md text-white bg-red-600 hover:bg-red-500 shadow-lg w-full sm:w-auto">
                6 Months Internships
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="w-full h-56 md:h-72 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center overflow-hidden">
              <img
                src="/banner_img_ts.png"
                alt="Hero banner"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </section>

        {/* Internship Cards */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">Popular Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {internships.map((it) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={it.title}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-lg font-semibold">{it.title}</div>
                <div className="text-sm text-gray-400 mt-2">
                  Duration: {it.duration}
                </div>
                <div className="text-sm text-gray-400">Mode: {it.mode}</div>
                <button className="mt-4 px-4 py-2 bg-transparent border border-red-600 text-red-400 rounded-md hover:bg-red-600/10">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Training & Placement */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">Training & Placement</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainings.map((t) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={t}
                className="p-5 rounded-xl bg-gradient-to-tr from-black to-gray-900 border border-gray-700 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gray-800 flex items-center justify-center mb-3">
                  🎯
                </div>
                <div className="font-semibold">{t}</div>
                <p className="text-sm text-gray-400 mt-2">
                  Practical sessions and expert mentors to boost your career.
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

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
            <h3 className="font-semibold mb-3">Courses</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Certifications</li>
              <li>Short Courses</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">About & Contact</h3>
            <p className="text-sm text-gray-400">contact@tessacloud.learn</p>
            <div className="flex gap-3 mt-4 text-gray-400">
              {["F", "T", "L", "I"].map((x) => (
                <div
                  key={x}
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 py-6">
          © 2025 Tessa Cloud | Internship Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
