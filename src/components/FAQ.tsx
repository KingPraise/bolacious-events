"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of events do you plan?",
    answer: "We plan a wide variety of events including weddings, corporate galas, birthday parties, anniversaries, product launches, and private dinners. No event is too big or too small for our dedicated team.",
  },
  {
    question: "Do you travel outside your base location?",
    answer: "Yes, we are based in Nigeria but are available to travel nationwide and internationally for destination weddings and special events.",
  },
  {
    question: "How far in advance should I book your services?",
    answer: "For large scale events like weddings and corporate galas, we recommend booking 6-12 months in advance. For smaller events, 2-3 months notice is usually sufficient. However, always feel free to reach out as we occasionally have last-minute availability.",
  },
  {
    question: "Can I customize a package to suit my budget?",
    answer: "Absolutely. We understand that every client has unique needs and budgets. We offer customizable packages and will work with you to create an unforgettable event that aligns with your financial plan.",
  },
  {
    question: "Do you provide ushering and catering as standalone services?",
    answer: "Yes! While we offer comprehensive event planning, you can also hire our professional ushers or catering services independently for your event.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-secondary"></span>
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Answers
            </span>
            <span className="w-8 h-px bg-secondary"></span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-background p-6 md:p-8 rounded-2xl shadow-sm border border-border/50"
        >
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 last:border-0 py-2">
                <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:text-primary hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="https://wa.me/2348109870349"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-3 font-medium transition-colors"
          >
            Contact our support team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
