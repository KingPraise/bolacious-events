"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: FiPhone,
      title: "Call Us",
      details: "+234 810 987 0349",
      href: "tel:+2348109870349",
    },
    {
      icon: FiMail,
      title: "Email Us",
      details: "hello@bolaciousevents.com",
      href: "mailto:hello@bolaciousevents.com",
    },
    {
      icon: FiMapPin,
      title: "Visit Us",
      details: "Lagos, Nigeria (Available Nationwide)",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-secondary"></span>
                <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
                  Get in Touch
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Ready to Plan Your Next <span className="text-primary italic">Event?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Reach out to us today to schedule a consultation. Let's discuss how we can make your dream event a reality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group bg-muted/30 p-6 rounded-2xl border border-border/50 hover:border-secondary/50 hover:bg-white dark:hover:bg-muted transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                      {info.details}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* CTA / WhatsApp Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-primary rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden text-center">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                  <FaWhatsapp className="text-[#25D366] w-12 h-12" />
                </div>
                
                <h3 className="font-heading text-3xl font-bold mb-4">Chat With Us Directly</h3>
                <p className="text-white/80 mb-8 max-w-md">
                  Skip the forms. Send us a message directly on WhatsApp for the fastest response to your event inquiries.
                </p>
                
                <a
                  href="https://wa.me/2348109870349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-8 font-semibold text-primary bg-white hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
                >
                  <span className="relative flex items-center gap-2">
                    <FaWhatsapp size={20} className="text-[#25D366]" />
                    Start Conversation
                  </span>
                </a>
                
                <p className="mt-4 text-xs text-white/50">
                  Typically replies within a few minutes
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
