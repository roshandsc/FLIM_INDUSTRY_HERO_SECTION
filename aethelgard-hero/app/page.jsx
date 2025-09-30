"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Animated Sparkle Component ---
const AnimatedSparkle = () => (
  <motion.div
    animate={{ rotate: 360, scale: [1, 1.1, 1, 0.9, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    className="hidden md:block" // Hide on small screens to prevent layout issues
  >
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.844 8.156L20 10L13.844 11.844L12 18L10.156 11.844L4 10L10.156 8.156L12 2Z"
        stroke="#F4B942"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
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
    <path d="M12 2c-3.1 0-3.5.01-4.7.07-1.2.05-2.07.27-2.8.58-.75.3-1.4.74-2.05 1.4s-1.1 1.3-1.4 2.05c-.3.73-.53 1.6-.58 2.8C2.01 8.5 2 8.9 2 12s.01 3.5.07 4.7c.05 1.2.27 2.07.58 2.8.3.75.74 1.4 1.4 2.05s1.3 1.1 2.05 1.4c.73.3 1.6.53 2.8.58 1.2.06 1.6.07 4.7.07s3.5-.01 4.7-.07c1.2-.05 2.07-.27 2.8-.58.75-.3 1.4-.74-2.05-1.4s1.1-1.3 1.4-2.05c.3-.73.53-1.6.58-2.8.06-1.2.07-1.6.07-4.7s-.01-3.5-.07-4.7c-.05-1.2-.27-2.07-.58-2.8-.3-.75-.74-1.4-1.4-2.05S19.5 3.1 18.85 2.8c-.73-.3-1.6-.53-2.8-.58C15.5 2.01 15.1 2 12 2zm0 1.8c3.04 0 3.4.01 4.6.07 1.1.05 1.7.25 2.1.4.5.23.85.58 1.2 1.2s.98.7 1.2 1.2c.15.4.35 1 .4 2.1.06 1.2.07 1.56.07 4.6s-.01 3.4-.07 4.6c-.05 1.1-.25 1.7-.4 2.1-.23.5-.58.85-1.2 1.2s-.7.98-1.2 1.2c-.4.15-1 .35-2.1.4-1.2.06-1.56.07-4.6.07s-3.4-.01-4.6-.07c-1.1-.05-1.7-.25-2.1-.4-.5-.23-.85-.58-1.2-1.2s-.98-.7-1.2-1.2c-.15-.4-.35-1-.4-2.1-.06-1.2-.07-1.56-.07-4.6s.01-3.4.07-4.6c.05-1.1.25-1.7.4-2.1.23-.5.58-.85 1.2-1.2s.7-.98 1.2-1.2c.4-.15 1-.35 2.1-.4 1.2-.06 1.56-.07 4.6-.07zM12 7.2c-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8 4.8-2.15 4.8-4.8-2.15-4.8-4.8-4.8zm0 7.8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm4.65-8.25c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1z"></path>
  </svg>
);
const WhatsappIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.04 2C6.5 2 2 6.5 2 12.04c0 1.7.44 3.3 1.22 4.72L2 22l5.34-1.2c1.4.78 2.98 1.22 4.7 1.22h.01c5.54 0 10.04-4.5 10.04-10.04S17.58 2 12.04 2zm4.8 11.88c-.28.5-1.5 1.4-2.04 1.4-.54 0-1-.22-2.8-1.04-1.8-.82-2.96-2.92-2.96-2.92-.1-.18-.1-.36-.1-.54 0-.18.1-.36.22-.48l.42-.48c.18-.18.42-.22.66-.04l.42.3c.24.18.36.42.3.66l-.22.42c-.06.12-.04.24 0 .36l.48.54c.54.6 1.2 1.34 1.34 1.48s.22.24.3.24c.06 0 .18 0 .24-.06l.54-.36c.18-.12.42-.12.6 0l.9.96c.18.2.22.48.1.72l-.3.42z"></path>
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
  <div
    className={`font-cinzel text-2xl md:text-3xl ${className}`}
    style={{ color: "#F4B942" }}
  >
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
          className="relative w-11/12 max-w-2xl p-6 md:p-8 bg-[#1c1a19] border border-[#F4B942]/30 rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h2
            className="font-cinzel text-xl md:text-2xl text-center mb-4"
            style={{ color: "#F4B942" }}
          >
            Whispers of Aethelgard
          </h2>
          <div className="font-garamond text-base md:text-lg text-center min-h-[100px] flex items-center justify-center text-[#F1EBE5]">
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
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <p className="mt-2">Carving the legend...</p>
              </div>
            ) : (
              <p className="leading-relaxed">{lore}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 text-[#F1EBE5]/50 hover:text-[#F1EBE5] transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// --- Main Page Component ---
export default function AethelgardPage() {
  const [isLoreModalOpen, setIsLoreModalOpen] = useState(false);
  const [lore, setLore] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    },
    {
      title: "BEACON OF AETHELGARD",
      src: "/templates/Gemini_Generated_Image_1iqm9y1iqm9y1iqm.png",
    },
    {
      title: "THE ASTRAL SANCTUM",
      src: "/templates/Gemini_Generated_Image_q9i30lq9i30lq9i3.png",
    },
  ];

  const handleGenerateLore = async () => {
    setIsLoreModalOpen(true);
    setIsLoading(true);
    setLore("");
    const randomTopic =
      navLinks[Math.floor(Math.random() * navLinks.length)].name;
    const systemPrompt = `You are a master storyteller for a fantasy epic named Aethelgard. Your tone is poetic, ancient, and full of wonder. Your world is inspired by fantastical, magical Indian architecture.`;
    const userQuery = `Generate a short, evocative piece of lore (2-3 sentences) about "${randomTopic}".`;
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userQuery }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
        }),
      });
      if (!response.ok) throw new Error(`API error: ${response.statusText}`);
      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) setLore(text);
      else throw new Error("No content received from API.");
    } catch (error) {
      console.error("Failed to generate lore:", error);
      setLore(
        "The ancient whispers are silent for now. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <style jsx="true" global="true">{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Italianno&family=EB+Garamond:wght@400;700&family=Lato:wght@700&display=swap");
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: #0c0a09;
        }
        .font-cinzel {
          font-family: "Cinzel Decorative", serif;
        }
        .font-italianno {
          font-family: "Italianno", cursive;
        }
        .font-garamond {
          font-family: "EB Garamond", serif;
        }
        .font-lato {
          font-family: "Lato", sans-serif;
        }
        .ken-burns {
          animation: ken-burns-animation 40s infinite ease-in-out alternate;
        }
        @keyframes ken-burns-animation {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.1) translate(-2%, 2%);
          }
        }
      `}</style>

      <div className="bg-[#0c0a09] text-white/90 min-h-screen">
        <header
          className={`fixed top-0 left-0 right-0 z-40 p-4 md:p-6 transition-all duration-300 ${
            isScrolled
              ? "bg-[#0c0a09]/80 backdrop-blur-sm shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center">
            <AethelgardLogo />
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 font-lato text-sm uppercase tracking-wider">
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
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-6 h-6 hover:text-[#F4B942] transition-colors duration-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6 hover:text-[#F4B942] transition-colors duration-300" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
              >
                <WhatsappIcon className="w-6 h-6 hover:text-[#F4B942] transition-colors duration-300" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <YoutubeIcon className="w-6 h-6 hover:text-[#F4B942] transition-colors duration-300" />
              </a>
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="z-50 relative"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-30 pt-24 p-6 bg-[#0c0a09]/95 backdrop-blur-sm"
            >
              <nav className="flex flex-col items-center text-center gap-8 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-lato text-xl uppercase tracking-wider hover:text-[#F4B942] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex items-center gap-6 mt-8">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-8 h-8 hover:text-[#F4B942] transition-colors duration-300" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-8 h-8 hover:text-[#F4B942] transition-colors duration-300" />
                  </a>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Whatsapp"
                  >
                    <WhatsappIcon className="w-8 h-8 hover:text-[#F4B942] transition-colors duration-300" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Youtube"
                  >
                    <YoutubeIcon className="w-8 h-8 hover:text-[#F4B942] transition-colors duration-300" />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          {/* Hero Section */}
          <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img
                src="/templates/Gemini_Generated_Image_i7x5uwi7x5uwi7x5.png"
                alt="Aethelgard Hero Background"
                className="w-full h-full object-cover ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-black/70 to-transparent" />
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
              className="relative z-10 text-center flex flex-col items-center max-w-5xl p-4"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-2 md:gap-8"
              >
                <AnimatedSparkle />
                <h1
                  className="font-cinzel text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest"
                  style={{ color: "#F4B942" }}
                >
                  A SAGA CARVED IN THE SKY
                </h1>
                <AnimatedSparkle />
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="font-italianno text-2xl sm:text-3xl md:text-4xl text-white/80 my-4"
              >
                Where legends take flight
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="font-garamond text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed px-4 sm:px-0"
              >
                Prepare to be enchanted by Aethelgard, a fantastical
                architectural concept that re-imagines the grandeur of ancient
                Indian temples with a breathtaking, cinematic twist. This isn't
                just stone and mortar; it's a living, breathing realm where
                colossal spires pierce the clouds, and entire structures appear
                to float, imbued with a magical essence that brings every detail
                to life.
              </motion.p>
              <motion.div variants={itemVariants}>
                <button
                  onClick={handleGenerateLore}
                  className="font-lato uppercase tracking-wider text-sm font-bold border-2 rounded-sm transition-all duration-300 px-8 py-3 md:px-10 md:py-4 bg-transparent hover:bg-[#F4B942] hover:text-black flex items-center"
                  style={{ borderColor: "#F4B942", color: "#F4B942" }}
                >
                  <span className="mr-2 text-lg">✨</span> EXPLORE THE REALM
                </button>
              </motion.div>
            </motion.div>
          </section>

          {/* Image Grid Section */}
          <section
            id="image-grid"
            className="py-16 md:py-20 px-4 md:px-6 container mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {imageSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative h-96 overflow-hidden rounded-lg shadow-2xl"
                >
                  <img
                    src={section.src}
                    alt={section.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <h3
                    className="font-cinzel absolute bottom-6 left-6 text-xl md:text-2xl"
                    style={{ color: "#F1EBE5" }}
                  >
                    {section.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Trailer Section */}
          <section
            id="trailer"
            className="py-16 md:py-20 px-4 md:px-6 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-cinzel text-3xl md:text-4xl lg:text-6xl mb-10 md:mb-12"
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

        <footer className="mt-20 border-t border-white/10">
          <div className="container mx-auto p-6 md:p-8 flex flex-col md:flex-row justify-between items-center text-center">
            <AethelgardLogo className="mb-6 md:mb-0" />
            <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 font-lato text-sm uppercase tracking-wider mb-6 md:mb-0">
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
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-6 h-6 hover:text-[#F4B942] transition-colors duration-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6 hover:text-[#F4B942] transition-colors duration-300" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
              >
                <WhatsappIcon className="w-6 h-6 hover:text-[#F4B942] transition-colors duration-300" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <YoutubeIcon className="w-6 h-6 hover:text-[#F4B942] transition-colors duration-300" />
              </a>
            </div>
          </div>
        </footer>
        <LoreModal
          isOpen={isLoreModalOpen}
          onClose={() => setIsLoreModalOpen(false)}
          lore={lore}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
