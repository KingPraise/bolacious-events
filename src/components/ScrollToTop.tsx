"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Force scroll to top on page load/refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    window.scrollTo(0, 0);
    
    // Fallback for mobile browsers and Next.js router
    const timeout1 = setTimeout(() => window.scrollTo(0, 0), 50);
    const timeout2 = setTimeout(() => window.scrollTo(0, 0), 200);

    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-7 right-[5.5rem] md:bottom-7 md:right-[6.5rem] z-50 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/40 transition-shadow hover:shadow-xl outline-none"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
