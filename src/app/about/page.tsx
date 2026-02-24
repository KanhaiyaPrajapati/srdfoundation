"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { values, teamMembers } from "@/data/siteData";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Mission Hero */}
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Our <span className="gradient-text">Mission</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              SRD Foundation is dedicated to empowering newcomers in Canada by
              providing comprehensive settlement support, education, and
              community integration services. We believe that every individual
              deserves the opportunity to thrive in their new home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                We envision a Canada where every newcomer is welcomed with open
                arms and given the tools and support they need to build a
                fulfilling life. A nation strengthened by diversity, united by
                compassion, and enriched by the unique contributions of every
                individual.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Our goal is to create lasting change by addressing the root
                challenges faced by immigrants and refugees, and building bridges
                between cultures that strengthen our collective community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                What Drives Us
              </h3>
              <ul className="space-y-4">
                {[
                  "Every newcomer deserves a warm welcome",
                  "Diversity strengthens our communities",
                  "Education opens doors to opportunity",
                  "Community support creates lasting change",
                  "Cultural exchange enriches us all",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do at SRD Foundation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:bg-bg-tertiary/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-primary/20 transition-colors">
                  <value.icon className="text-accent-primary text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the dedicated people behind SRD Foundation."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-primary to-accent-orange mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-primary text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
