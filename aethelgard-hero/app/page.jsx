"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- Animated Sparkle Component ---
const AnimatedSparkle = ({ size = 24, color = "#F4B942" }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    animate={{ rotate: [0, 15, -15, 0], opacity: [0.7, 1, 0.7] }}
    transition={{ repeat: Infinity, duration: 2 }}
    className="inline-block mx-2"
  >
    <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12 M4.93 4.93 L7.76 7.76 M16.24 16.24 L19.07 19.07 M16.24 7.76 L19.07 4.93 M4.93 19.07 L7.76 16.24" />
  </motion.svg>
);

// --- SVG Icons ---
const FacebookIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.52 4.5 10.02 10 10.02s10-4.5 10-10.02C22 6.53 17.5 2.04 12 2.04zM13.6 19.32h-3.2v-7.24h-1.6v-2.48h1.6v-1.8c0-1.56.96-2.4 2.32-2.4h2.08v2.48h-1.28c-.76 0-.92.36-.92.9v1.84h2.2l-.28 2.48h-1.92v7.24z"></path>
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2c-3.1 0-3.5.01-4.7.07-1.2.05-2.07.27-2.8.58-.75.3-1.4.74-2.05 1.4s-1.1 1.3-1.4 2.05c-.3.73-.53 1.6-.58 2.8C2.01 8.5 2 8.9 2 12s.01 3.5.07 4.7c.05 1.2.27 2.07.58 2.8.3.75.74 1.4 1.4 2.05s1.3 1.1 2.05 1.4c.73.3 1.6.53 2.8.58 1.2.06 1.6.07 4.7.07s3.5-.01 4.7-.07c1.2-.05 2.07-.27 2.8-.58.75-.3 1.4-.74 2.05-1.4s1.1-1.3 1.4-2.05c.3-.73.53-1.6.58-2.8.06-1.2.07-1.6.07-4.7s-.01-3.5-.07-4.7c-.05-1.2-.27-2.07-.58-2.8-.3-.75-.74-1.4-1.4-2.05S19.5 3.1 18.85 2.8c-.73-.3-1.6-.53-2.8-.58C15.5 2.01 15.1 2 12 2z"></path>
  </svg>
);

const WhatsappIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.04 2C6.5 2 2 6.5 2 12.04c0 1.7.44 3.3 1.22 4.72L2 22l5.34-1.2c1.4.78 2.98 1.22 4.7 1.22h.01c5.54 0 10.04-4.5 10.04-10.04S17.58 2 12.04 2z"></path>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21.58 7.19c-.23-.86-1.1-1.54-2-1.67C17.74 5 12 5 12 5s-5.74 0-7.58.52c-.9.13-1.77.8-2 1.67C2 8.05 2 12 2 12s0 3.95.42 4.81c.23.86 1.1 1.54 2 1.67C6.26 19 12 19 12 19s5.74 0 7.58-.52c.9-.13 1.77-.8 2-1.67C22 15.95 22 12 22 12s0-3.95-.42-4.81zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z"></path>
  </svg>
);

const AethelgardLogo = ({ className }) => (
  <div className={`text-3xl ${className}`} style={{ color: "#F4B942" }}>
    AETHELGARD
  </div>
);

// --- Lore Modal Component ---
const LoreModal = ({ isOpen, onClose, lore, isLoading }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-11/12 max-w-2xl p-8 bg-[#1c1a19] border border-[#F4B942]/30 rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h2
            className="text-2xl text-center mb-4"
            style={{ color: "#F4B942" }}
          >
            Whispers of Aethelgard
          </h2>
          <div className="text-lg text-center min-h-[100px] flex items-center justify-center text-[#F1EBE5]">
            {isLoading ? (
              <div className="flex flex-col items-center">
                <svg
                  className="animate-spin h-8 w-8 text-[#F4B942]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                <p className="mt-2">Carving the legend...</p>
              </div>
            ) : (
              <p className="leading-relaxed">{lore}</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function AethelgardPage() {
  const [isLoreModalOpen, setIsLoreModalOpen] = useState(false);
  const [lore, setLore] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navLinks = [
    { name: "Grand Gateways", href: "#image-grid" },
    { name: "Floating Mandapas", href: "#image-grid" },
    { name: "Sky Temples", href: "#image-grid" },
    { name: "Magical Courtyards", href: "#trailer" },
    { name: "Living Sculptures", href: "#trailer" },
  ];

  const imageSections = [
    {
      title: "RIVER ABOVE CLOUDS",
      src: "/templates/Gemini_Generated_Image_5bqt4i5bqt4i5bqt.png",
      width: 800,
      height: 600,
    },
    {
      title: "BEACON OF AETHELGARD",
      src: "/templates/Gemini_Generated_Image_1iqm9y1iqm9y1iqm.png",
      width: 800,
      height: 600,
    },
    {
      title: "THE ASTRAL SANCTUM",
      src: "/templates/Gemini_Generated_Image_q9i30lq9i30lq9i3.png",
      width: 800,
      height: 600,
    },
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#0c0a09] text-white/90 min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-30 p-8">
        <div className="container mx-auto flex justify-between items-center">
          <AethelgardLogo />
          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#F4B942] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/hq720.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-black/70 to-transparent" />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            className="relative z-10 text-center flex flex-col items-center max-w-4xl p-4"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center"
            >
              <AnimatedSparkle />
              <span
                className="text-5xl md:text-7xl lg:text-8xl tracking-widest"
                style={{ color: "#F4B942" }}
              >
                A SAGA CARVED IN THE SKY
              </span>
              <AnimatedSparkle />
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-3xl md:text-4xl text-white/80 my-4"
            >
              Where legends take flight
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Prepare to be enchanted by Aethelgard...
            </motion.p>
          </motion.div>
        </section>

        {/* Image Grid Section */}
        <section id="image-grid" className="py-20 px-6 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {imageSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg shadow-2xl"
              >
                <Image
                  src={section.src}
                  alt={section.title}
                  width={section.width}
                  height={section.height}
                  className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <h3
                  className="absolute bottom-6 left-6 text-2xl"
                  style={{ color: "#F1EBE5" }}
                >
                  {section.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trailer Section */}
        <section id="trailer" className="py-20 px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl mb-12"
            style={{ color: "#F4B942" }}
          >
            WITNESS THE SAGA
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border-2 border-[#F4B942]/20"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/XpuYP1lBvJk?autoplay=0&mute=0&loop=1&playlist=XpuYP1lBvJk&controls=1&modestbranding=1"
              title="Aethelgard Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
          </motion.div>
        </section>
      </main>

      <LoreModal
        isOpen={isLoreModalOpen}
        onClose={() => setIsLoreModalOpen(false)}
        lore={lore}
        isLoading={isLoading}
      />
    </div>
  );
}
