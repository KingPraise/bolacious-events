"use client";

import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiTwitter, FiFacebook, FiMail, FiPhone } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "Facebook", icon: FiFacebook, href: "https://facebook.com/profile.php?id=100078891469550" }, // Approximate or placeholder, user can update URL if needed
  { name: "Instagram", icon: FiInstagram, href: "https://instagram.com/bolacious_events_and_varieties" },
  { name: "TikTok", icon: FaTiktok, href: "https://tiktok.com/@bolacious_events" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 bg-[#1A051D] text-white pt-24 pb-12 overflow-hidden">
      {/* Background fill behind waves */}
      <div className="absolute top-0 left-0 w-full h-[80px] md:h-[120px] bg-background z-0"></div>

      {/* Silhouette layered waves */}
      <div className="absolute top-0 left-0 w-full h-[80px] md:h-[120px] overflow-hidden z-0">
        
        {/* Layer 1 - Slowest */}
        <div className="absolute bottom-0 left-0 w-[200%] h-full flex animate-wave-slow">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-secondary/20">
            <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 V120 H0 Z" />
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-secondary/20">
            <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 V120 H0 Z" />
          </svg>
        </div>

        {/* Layer 2 - Medium */}
        <div className="absolute bottom-0 left-0 w-[200%] h-full flex animate-wave-medium">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-primary/60">
            <path d="M0,70 C200,10 400,130 600,70 C800,10 1000,130 1200,70 V120 H0 Z" />
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-primary/60">
            <path d="M0,70 C200,10 400,130 600,70 C800,10 1000,130 1200,70 V120 H0 Z" />
          </svg>
        </div>

        {/* Layer 3 - Fastest (Footer Color) */}
        <div className="absolute bottom-0 left-0 w-[200%] h-full flex animate-wave-fast">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-[#1A051D]">
            <path d="M0,80 C250,140 350,20 600,80 C850,140 950,20 1200,80 V120 H0 Z" />
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full flex-shrink-0 fill-[#1A051D]">
            <path d="M0,80 C250,140 350,20 600,80 C850,140 950,20 1200,80 V120 H0 Z" />
          </svg>
        </div>

      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="Bolacious Events Logo"
                width={50}
                height={50}
                className="rounded-full border-2 border-secondary/50"
              />
              <span className="font-heading font-bold text-2xl tracking-tight">
                Bolacious
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Creating memorable moments with excellence. We turn your vision into
              reality through meticulous planning, exquisite catering, and
              professional ushering services.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-secondary hover:text-white transition-all duration-300 shadow-sm"
                    aria-label={`Visit our ${social.name}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-semibold text-lg text-secondary">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {["About Us", "Our Services", "Gallery", "FAQ"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-white/70 hover:text-secondary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-secondary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-semibold text-lg text-secondary">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {["Event Planning", "Event Styling", "Ushers", "Catering & Baking"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href="#services"
                      className="text-sm text-white/70 hover:text-secondary transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-semibold text-lg text-secondary">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <FiPhone className="text-secondary mt-1 shrink-0" size={16} />
                <a
                  href="tel:+2348109870349"
                  className="text-sm text-white/70 hover:text-secondary transition-colors"
                >
                  0810 987 0349
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="text-secondary mt-1 shrink-0" size={16} />
                <a
                  href="mailto:bolaciousevents@gmail.com"
                  className="text-sm text-white/70 hover:text-secondary transition-colors break-all"
                >
                  bolaciousevents@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348109870349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white/10 text-white border border-white/20 hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 text-sm font-medium w-full"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center md:text-left">
            &copy; {currentYear} Bolacious Events. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
