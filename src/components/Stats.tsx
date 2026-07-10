"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const statsData = [
  { id: 1, value: 500, suffix: "+", label: "Events Planned" },
  { id: 2, value: 5, suffix: "k+", label: "Happy Guests" },
  { id: 3, value: 50, suffix: "+", label: "Expert Staff" },
  { id: 4, value: 100, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex items-baseline justify-center gap-1">
      <span className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        {count}
      </span>
      <span className="font-heading text-2xl md:text-3xl font-bold text-secondary">
        {suffix}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 relative bg-[#1A051D] overflow-hidden">
      {/* Decorative SVG wave at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-white/10">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center text-center space-y-2 p-4"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-sm md:text-base font-medium text-white/70 uppercase tracking-widest mt-2 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative SVG wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
}
