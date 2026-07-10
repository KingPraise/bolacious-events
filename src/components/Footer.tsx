"use client";

import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiTwitter, FiFacebook, FiMail, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "Instagram", icon: FiInstagram, href: "#" },
  { name: "Twitter", icon: FiTwitter, href: "#" },
  { name: "Facebook", icon: FiFacebook, href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 bg-[#1A051D] text-white pt-24 pb-12 overflow-hidden">
      {/* Silhouette layered waves */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 transform -translate-y-[99%]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px] md:h-[120px]"
        >
          <path
            d="M0,0 V46.29 c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            className="fill-secondary/20"
          ></path>
          <path
            d="M0,0 V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V120H0Z"
            className="fill-primary/60"
          ></path>
          <path
            d="M0,0 V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V120H0Z"
            className="fill-[#1A051D]"
          ></path>
        </svg>
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
                  +234 810 987 0349
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="text-secondary mt-1 shrink-0" size={16} />
                <a
                  href="mailto:hello@bolaciousevents.com"
                  className="text-sm text-white/70 hover:text-secondary transition-colors"
                >
                  hello@bolaciousevents.com
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
