"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/Button";
import { stats, impactStories } from "@/data/siteData";

export default function ImpactPage() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/20 inline-block mb-6">
              Our Impact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Making a Real{" "}
              <span className="gradient-text">Difference</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              See how our programs and services are transforming lives and
              building stronger communities across Canada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Impact by the Numbers"
            subtitle="Our growing impact across Canadian communities."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-6">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Indicators */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Program Milestones"
            subtitle="Tracking our progress towards creating lasting change."
          />
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { label: "Settlement Goal (3,000 families)", progress: 83 },
              { label: "Volunteer Network Growth", progress: 75 },
              { label: "Community Program Expansion", progress: 70 },
              { label: "Annual Fundraising Target", progress: 65 },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-text-primary font-medium">
                    {item.label}
                  </span>
                  <span className="text-accent-primary">{item.progress}%</span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="h-full bg-gradient-to-r from-accent-primary to-accent-orange rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Success Stories"
            subtitle="Real stories of transformation and hope from our community."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-secondary/10 flex items-center justify-center mb-4">
                  <span className="text-accent-secondary text-lg font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {story.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {story.story}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Help Us Grow Our{" "}
              <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Your support directly contributes to our mission of helping
              newcomers thrive in Canada.
            </p>
            <Button href="/donate" variant="primary">
              Support Our Work
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
