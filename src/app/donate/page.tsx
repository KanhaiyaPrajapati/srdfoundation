"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { donationInfo } from "@/data/siteData";
import { FaHeart, FaHandHoldingHeart, FaEnvelope } from "react-icons/fa";

export default function DonatePage() {
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
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20 inline-block mb-6">
              Support Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              {donationInfo.title.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="gradient-text">
                {donationInfo.title.split(" ").slice(2).join(" ")}
              </span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              {donationInfo.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact of Donations */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Your Impact"
            subtitle="See how your contribution directly helps newcomer families."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationInfo.impacts.map((impact, index) => (
              <motion.div
                key={impact.amount}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-3xl font-bold gradient-text mb-3">
                  {impact.amount}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Donate */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Ways to Contribute"
            subtitle="Choose the method that works best for you."
          />
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <div className="space-y-6">
                {donationInfo.methods.map((method, index) => (
                  <motion.div
                    key={method}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-bg-tertiary/80 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center shrink-0">
                      <FaHeart className="text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-text-primary font-medium">{method}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Ways to Help */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Other Ways to Help"
            subtitle="Monetary donations aren't the only way to make a difference."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8"
            >
              <FaHandHoldingHeart className="text-accent-primary text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Volunteer Your Time
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Join our team of dedicated volunteers and make a direct impact
                in the lives of newcomer families. We have opportunities for
                mentors, tutors, event organizers, and more.
              </p>
              <Button href="/contact" variant="outline">
                Get Involved
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass-card rounded-2xl p-8"
            >
              <FaEnvelope className="text-accent-primary text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Spread the Word
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Help us reach more people by sharing our mission with your
                friends, family, and network. Follow us on social media and
                share our stories to raise awareness.
              </p>
              <Button href="/contact" variant="outline">
                Connect With Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
