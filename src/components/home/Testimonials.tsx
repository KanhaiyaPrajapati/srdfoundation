"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/siteData";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What People Say"
          subtitle="Hear from the individuals and families whose lives have been touched by our work."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-primary to-accent-orange flex items-center justify-center shrink-0 shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {getInitials(testimonials[current].name)}
                    </span>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">
                      {testimonials[current].name}
                    </p>
                    <p className="text-accent-primary text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary text-lg leading-relaxed italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-accent-primary w-8"
                    : "bg-border hover:bg-text-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
