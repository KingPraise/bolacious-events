"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const features = [
  "Meticulous Event Planning",
  "Exquisite Catering & Baking",
  "Professional Ushering",
  "Unforgettable Experiences",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gallery/ushers-team.jpeg"
                alt="Bolacious Events Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-6 right-6 bg-white rounded-xl p-4 shadow-xl flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-secondary font-bold text-xl">5+</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">Years of</p>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Excellence</p>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative border */}
            <div className="absolute -inset-4 border-2 border-secondary/30 rounded-3xl -z-10 hidden md:block translate-x-4 translate-y-4" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-secondary"></span>
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Crafting <span className="text-primary">Extraordinary</span> Moments
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Bolacious Events, we believe that every celebration should be a masterpiece. We are a premier event management company based in Nigeria, dedicated to turning your dreams into spectacular realities.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Whether you're planning an intimate gathering, a grand wedding, or a corporate gala, our team brings unparalleled creativity, precision, and passion to every project. From conceptualization to execution, we handle every detail so you can simply enjoy your moment.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="text-secondary shrink-0" size={20} />
                  <span className="font-medium text-foreground/80">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6">
              <Image
                src="/images/logo-alt.jpeg"
                alt="Bolacious Events Signature"
                width={120}
                height={40}
                className="opacity-80 mix-blend-multiply dark:mix-blend-lighten"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
