"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  FaArrowRight,
  FaHome,
  FaHandsHelping,
  FaHeart,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.12, ease: "easeOut" as const },
  }),
};

const pathways = [
  {
    icon: FaHome,
    title: "I'm a Newcomer",
    description: "Settlement support, language classes, and community resources.",
    href: "/services",
  },
  {
    icon: FaHandsHelping,
    title: "I Want to Volunteer",
    description: "Join 150+ volunteers making a difference in newcomer lives.",
    href: "/about",
  },
  {
    icon: FaHeart,
    title: "I Want to Donate",
    description: "Your contribution directly supports families building new lives.",
    href: "/donate",
  },
];

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-bg-primary" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(94,158,53,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 70%, rgba(232,118,43,0.05) 0%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-accent-primary/8 text-accent-primary border border-accent-primary/15">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
              Empowering Newcomers Since 2012
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-text-primary leading-[1.08] tracking-tight"
          >
            Helping Newcomers
            <br />
            <span className="gradient-text">Build a Home</span> in Canada
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            SRD Foundation provides settlement services, language training,
            employment support, and community programs to help immigrant
            families thrive across Canada.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/services" variant="primary">
              Explore Our Services
              <FaArrowRight className="ml-2 text-xs" />
            </Button>
            <Button href="/donate" variant="outline">
              Support Our Mission
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-16 pt-10 border-t border-border"
          >
            <div className="flex items-center justify-center gap-6 sm:gap-12 md:gap-16">
              {[
                { value: "2,500+", label: "Families Helped" },
                { value: "150+", label: "Active Volunteers" },
                { value: "12", label: "Years of Service" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 sm:gap-12 md:gap-16">
                  {i > 0 && (
                    <div className="w-px h-10 bg-border" />
                  )}
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-text-muted text-xs sm:text-sm mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pathway Cards */}
      <section className="relative z-10 pb-20 bg-bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {pathways.map((path, i) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: "easeOut" as const,
                }}
              >
                <Link
                  href={path.href}
                  className="block glass-card rounded-2xl p-6 group hover:bg-bg-tertiary/80 transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-primary/15 transition-colors">
                    <path.icon className="text-accent-primary" />
                  </div>
                  <h3 className="text-text-primary font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">
                    {path.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-accent-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <FaArrowRight className="text-[10px]" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
