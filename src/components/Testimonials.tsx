"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Happy Client",
    role: "Catering & Event",
    quote:
      "Only one Bolacious 🙌 Wow I am screaming..thank you for making my day. You need to hear what my friends are telling me about the food, so tasty and even my aunt that's difficult to please is here praising you and the fact that you handed over the remaining food including the meat is what really surprised my aunt.. God bless you sis",
    rating: 5,
    image: "/testimonials/review-1.jpeg",
  },
  {
    id: 2,
    name: "Niyi",
    role: "Ceremony Coordination",
    quote:
      "Hi Bolacious, I just wanted to say thanks for doing an amazing job with the ceremony. Your coordination was top-notch, and everything went off without a hitch. It was great working with you, and I'll definitely be recommending you to others in the future. Thanks again!",
    rating: 5,
    image: "/testimonials/review-2.jpeg",
  },
  {
    id: 3,
    name: "Satisfied Client",
    role: "Cake & Baking",
    quote:
      "Thanks so much for the job. Weldone 🙏 I received the cake in one piece and my daughter really loved her cake. More profitable sales Bolacious!",
    rating: 5,
    image: "/testimonials/review-3.jpeg",
  },
  {
    id: 4,
    name: "Loyal Customer",
    role: "Catering",
    quote:
      "I miss eating these cakes oooo 😊🥰 — responding to Bolacious' status: 'If your event deserves class, you already know who to call... @BolaciousEvents'",
    rating: 5,
    image: "/testimonials/review-4.jpeg",
  },
  {
    id: 5,
    name: "CEO Tiwa",
    role: "Chocolate Cake",
    quote:
      "I love it 😊😊😊😊, worth every bite 🤩",
    rating: 5,
    image: "/testimonials/review-5.jpeg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const current = testimonials[active];

  return (
    <section id="testimonials" ref={ref} className="py-24 relative overflow-hidden bg-background">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-secondary" />
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Client Love
            </span>
            <span className="w-8 h-px bg-secondary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary italic">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Real messages from real people — these are the moments that drive us to keep delivering excellence.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-muted/30 rounded-3xl border border-border/50 overflow-hidden shadow-xl">

            {/* Screenshot Side */}
            <div
              className="relative min-h-[320px] lg:min-h-[480px] cursor-zoom-in group overflow-hidden"
              onClick={() => setLightboxSrc(current.image)}
            >
              <Image
                src={current.image}
                alt={`Review from ${current.name}`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-xs bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                📸 Tap to enlarge
              </div>
            </div>

            {/* Text Side */}
            <div className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <FaQuoteLeft className="text-secondary/40 mb-4" size={40} />
                <motion.p
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-foreground/80 text-base md:text-lg leading-relaxed mb-8 italic"
                >
                  "{current.quote}"
                </motion.p>
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <FaStar key={i} className="text-secondary" size={16} />
                  ))}
                </div>
                <p className="font-heading font-bold text-foreground text-lg">{current.name}</p>
                <p className="text-muted-foreground text-sm">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-secondary w-6 h-3"
                      : "bg-border w-3 h-3 hover:bg-secondary/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-secondary hover:text-secondary hover:bg-secondary/10 transition-all"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-secondary hover:text-secondary hover:bg-secondary/10 transition-all"
                aria-label="Next testimonial"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mini preview strip */}
        <div className="mt-10 flex justify-center gap-4 overflow-x-auto pb-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                i === active ? "border-secondary scale-110 shadow-lg shadow-secondary/30" : "border-border opacity-60 hover:opacity-90"
              }`}
              aria-label={`Select review ${i + 1}`}
            >
              <Image src={t.image} alt={t.name} fill className="object-cover object-top" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <div className="relative max-w-lg w-full max-h-[90vh]">
            <Image
              src={lightboxSrc}
              alt="Review screenshot"
              width={600}
              height={900}
              className="rounded-2xl object-contain max-h-[85vh] w-full"
            />
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full text-white flex items-center justify-center text-lg hover:bg-white/40 transition-colors"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
