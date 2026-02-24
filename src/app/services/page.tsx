"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { services } from "@/data/siteData";

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              How We <span className="gradient-text">Help</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              Comprehensive support services designed to help newcomers
              successfully settle, integrate, and thrive in Canada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Programs & Services"
            subtitle="Each of our programs is designed with the specific needs of newcomers in mind."
          />

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 md:p-10 hover:bg-bg-tertiary/80 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                      <service.icon className="text-accent-primary text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-lg leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {service.details}
                    </p>
                  </div>
                </div>
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
              Need <span className="gradient-text">Assistance</span>?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Our team is here to help you navigate your journey in Canada.
              Reach out to us to learn more about our programs and how we can
              support you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
              <Button href="/about" variant="outline">
                Learn About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
