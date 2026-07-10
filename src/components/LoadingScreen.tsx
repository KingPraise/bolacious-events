"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogoClosing, setIsLogoClosing] = useState(false);
  const [isBackgroundOpening, setIsBackgroundOpening] = useState(false);

  useEffect(() => {
    // The loading sequence:
    // 0ms - 1500ms: Logo unfolds and stays open, pulsing slightly.
    // 1500ms: Logo starts folding back (closing).
    // 1800ms: Background splits and opens up.
    // 2500ms: Entire loading screen unmounts.

    const closeLogoTimer = setTimeout(() => {
      setIsLogoClosing(true);
    }, 1500);

    const openBgTimer = setTimeout(() => {
      setIsBackgroundOpening(true);
    }, 1800);

    const unmountTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(closeLogoTimer);
      clearTimeout(openBgTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Top Background Door */}
          <motion.div
            initial={{ y: 0 }}
            animate={isBackgroundOpening ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 bottom-1/2 bg-[#1A051D] z-[-1] border-b border-secondary/20"
          />
          
          {/* Bottom Background Door */}
          <motion.div
            initial={{ y: 0 }}
            animate={isBackgroundOpening ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-1/2 left-0 right-0 bottom-0 bg-[#1A051D] z-[-1] border-t border-secondary/20"
          />
          
          {/* Logo Container for 3D Transform */}
          <div className="relative z-10" style={{ perspective: "1000px" }}>
            <motion.div
              // "Opening" unfolds from 90deg X-axis.
              // "Closing" folds back to -90deg X-axis.
              initial={{ rotateX: 90, scale: 0.5, opacity: 0 }}
              animate={
                isLogoClosing 
                  ? { rotateX: -90, scale: 0, opacity: 0 }
                  : { rotateX: 0, scale: 1, opacity: 1 }
              }
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut",
              }}
              className="relative w-32 h-32 md:w-40 md:h-40"
            >
              <Image
                src="/images/logo.jpeg"
                alt="Bolacious Events Loading"
                fill
                priority
                className="object-cover rounded-full shadow-[0_0_40px_rgba(201,168,76,0.3)]"
              />
              
              {/* Optional glowing pulse ring around the logo while it is open */}
              {!isLogoClosing && (
                <motion.div
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: [0, 0.5, 0], scale: [1, 1.2, 1.4] }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border-2 border-secondary"
                />
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
