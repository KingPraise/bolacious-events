"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/wedding-setup.jpeg"
          alt="Luxury Event Setup"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Gradients for text readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <div className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden shadow-lg shadow-secondary/20">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-primary/80 to-secondary/40 animate-[spin_4s_linear_infinite] w-[200%] h-[200%] left-[-50%] top-[-50%]" />
              
              <span className="relative flex items-center gap-2.5 rounded-full bg-background/80 backdrop-blur-md px-5 py-2 text-sm font-medium text-white border border-white/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary shadow-[0_0_8px_rgba(201,168,76,0.8)]"></span>
                </span>
                Nigeria's Premier Event Architects
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Creating <span className="text-secondary italic">Memorable</span>{" "}
            <br className="hidden sm:block" />
            Moments with Excellence
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed"
          >
            Transforming your visions into breathtaking realities. From grand weddings to exclusive corporate gatherings, we orchestrate perfection down to the last detail.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          >
            <a
              href="https://wa.me/2348109870349"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-white shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
              Start Planning Today
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-white/50 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-0.5 h-12 bg-gradient-to-b from-secondary to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
