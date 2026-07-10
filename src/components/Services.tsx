"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FiCalendar, FiStar, FiUsers, FiCoffee } from "react-icons/fi";

const services = [
  {
    id: "planning",
    title: "Event Planning",
    description: "Comprehensive end-to-end event management. We handle logistics, vendor coordination, and timelines so you can relax.",
    icon: FiCalendar,
    image: "/gallery/wedding-setup.jpeg",
  },
  {
    id: "styling",
    title: "Event Styling",
    description: "Transforming ordinary spaces into breathtaking venues. Custom decor, floral arrangements, and thematic designs.",
    icon: FiStar,
    image: "/gallery/event-decor.jpeg",
  },
  {
    id: "ushers",
    title: "Professional Ushers",
    description: "Elegant, trained, and courteous hostesses to welcome your guests and ensure smooth flow during your event.",
    icon: FiUsers,
    image: "/gallery/ushers-1.jpeg",
  },
  {
    id: "catering",
    title: "Catering & Baking",
    description: "Delectable culinary experiences featuring small chops, signature cakes, and full-course meals for your guests.",
    icon: FiCoffee,
    image: "/gallery/catering-1.jpeg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-secondary"></span>
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Our Expertise
            </span>
            <span className="w-8 h-px bg-secondary"></span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Services Tailored for You
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We offer a comprehensive suite of event services designed to meet your specific needs and exceed your expectations.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
              >
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Floating Icon */}
                  <div className="absolute -bottom-6 right-6 z-20 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-8">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <a
                    href="https://wa.me/2348109870349"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors"
                  >
                    Inquire Now
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
                
                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 rounded-2xl pointer-events-none transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
