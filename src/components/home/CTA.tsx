"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-bg-primary to-accent-orange/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-orange/8 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Ready to Make a{" "}
            <span className="gradient-text">Difference</span>?
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Whether you want to volunteer, donate, or simply learn more about
            our work, we&apos;d love to hear from you. Together, we can build
            stronger communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/donate" variant="primary">
              Donate Now
            </Button>
            <Button href="/contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
