"use client";

import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Magnetic from "./Magnetic";

const phrases = [
  "CRAFTING UNFORGETTABLE EXPERIENCES",
  "NIGERIA'S PREMIER EVENT ARCHITECTS",
  "EXCELLENCE IN EVERY DETAIL"
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-xs font-bold uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-secondary via-white to-secondary bg-[length:200%_auto] animate-[pulse_4s_ease-in-out_infinite]">
      {`${phrases[index].substring(0, subIndex)}`}
      <span className={`inline-block w-[2px] h-3 ml-1 align-middle bg-secondary ${blink ? "opacity-100" : "opacity-0"}`}></span>
    </span>
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = clientX / (typeof window !== 'undefined' ? window.innerWidth : 1000);
    const targetY = clientY / (typeof window !== 'undefined' ? window.innerHeight : 1000);
    mouseX.set(targetX);
    mouseY.set(targetY);
  };

  const imageX = useTransform(mouseX, [0, 1], ["-3%", "3%"]);
  const imageY = useTransform(mouseY, [0, 1], ["-3%", "3%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)", scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }, // Cinematic easing
    },
  };

  // Pre-generate stable sparkles to prevent hydration mismatch
  const [sparkles, setSparkles] = useState<{id: number, size: number, x: number, y: number, duration: number, delay: number}[]>([]);
  useEffect(() => {
    setSparkles(
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 2, // Size between 2px and 6px
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative h-[100svh] min-h-[600px] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Mouse Parallax effect */}
      <div className="absolute inset-0 z-0 bg-background">
        <motion.div style={{ x: imageX, y: imageY, scale: 1.1 }} className="absolute inset-0 w-full h-full">
          <Image
            src="/gallery/wedding-setup.jpeg"
            alt="Luxury Event Setup"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
        {/* Gradients for text readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </div>

      {/* Floating Sparkles Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full bg-[#FFD700]"
            style={{
              width: sparkle.size,
              height: sparkle.size,
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              boxShadow: "0 0 15px 4px rgba(255, 215, 0, 0.8)",
            }}
            animate={{
              y: [0, -300],
              opacity: [0, 1, 0],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={itemVariants} className="inline-block h-[40px] pointer-events-auto">
            <div className="relative inline-flex items-center justify-center min-w-[300px] h-full rounded-full bg-white/5 px-6 border border-white/10 backdrop-blur-md shadow-2xl">
              <Typewriter />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1]"
            style={{ textShadow: "0 2px 12px rgba(255,255,255,0.5)" }}
          >
            Creating{" "}<span className="italic" style={{ color: "#F59E0B", textShadow: "0 2px 16px rgba(245,158,11,0.6)" }}>Memorable</span>{" "}
            <br className="hidden sm:block" />
            Moments with Excellence
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-800 leading-relaxed font-medium"
            style={{ textShadow: "0 1px 8px rgba(255,255,255,0.6)" }}
          >
            Transforming your visions into breathtaking realities. From grand weddings to exclusive corporate gatherings, we orchestrate perfection down to the last detail.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center gap-6 w-full justify-center pointer-events-auto"
          >
            <Magnetic>
              <a
                href="https://wa.me/2348109870349"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Start Planning Today
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 text-base font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 hover:border-white/50 active:scale-95 cursor-pointer"
              >
                Explore Services
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-semibold">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[2px] h-12 bg-gradient-to-b from-secondary via-secondary to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
