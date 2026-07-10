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
    <section className="py-24 md:py-32 relative bg-[#1A051D] overflow-hidden mt-12 md:mt-20">
      
      {/* Top Background fill behind waves */}
      <div className="absolute top-0 left-0 w-full h-[60px] md:h-[80px] bg-background z-0"></div>

      {/* Top Silhouette layered waves (flowing down into Stats) */}
      <div className="absolute top-0 left-0 w-full h-[60px] md:h-[80px] overflow-hidden z-0">
        <div className="absolute bottom-0 left-0 w-[200%] h-full flex animate-wave-slow">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-secondary/20">
            <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 V120 H0 Z" />
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-secondary/20">
            <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 V120 H0 Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[200%] h-full flex animate-wave-medium">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-primary/60">
            <path d="M0,70 C200,10 400,130 600,70 C800,10 1000,130 1200,70 V120 H0 Z" />
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-primary/60">
            <path d="M0,70 C200,10 400,130 600,70 C800,10 1000,130 1200,70 V120 H0 Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[200%] h-full flex animate-wave-fast">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-[#1A051D]">
            <path d="M0,80 C250,140 350,20 600,80 C850,140 950,20 1200,80 V120 H0 Z" />
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-[#1A051D]">
            <path d="M0,80 C250,140 350,20 600,80 C850,140 950,20 1200,80 V120 H0 Z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 pt-8 pb-10">
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
      
      {/* Bottom Silhouette layered waves (flowing down into next section) */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] md:h-[80px] overflow-hidden z-0 rotate-180">
        {/* The background fill behind the inverted waves needs to be the next section's color, which is background */}
        <div className="absolute bottom-0 left-0 w-full h-[60px] md:h-[80px] bg-background z-0"></div>
        <div className="absolute bottom-0 left-0 w-[200%] h-full flex animate-wave-slow">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-secondary/20">
            <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 V120 H0 Z" />
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-secondary/20">
            <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 V120 H0 Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[200%] h-full flex animate-wave-medium">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-primary/60">
            <path d="M0,70 C200,10 400,130 600,70 C800,10 1000,130 1200,70 V120 H0 Z" />
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-primary/60">
            <path d="M0,70 C200,10 400,130 600,70 C800,10 1000,130 1200,70 V120 H0 Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[200%] h-full flex animate-wave-fast">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-[#1A051D]">
            <path d="M0,80 C250,140 350,20 600,80 C850,140 950,20 1200,80 V120 H0 Z" />
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-[#1A051D]">
            <path d="M0,80 C250,140 350,20 600,80 C850,140 950,20 1200,80 V120 H0 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
