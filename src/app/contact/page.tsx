"use client";

import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { updateField, setStatus, resetForm } from "@/store/slices/contactSlice";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/data/siteData";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebookF, href: contactInfo.socialLinks.facebook, label: "Facebook" },
  { icon: FaTwitter, href: contactInfo.socialLinks.twitter, label: "Twitter" },
  { icon: FaInstagram, href: contactInfo.socialLinks.instagram, label: "Instagram" },
  { icon: FaLinkedinIn, href: contactInfo.socialLinks.linkedin, label: "LinkedIn" },
];

export default function ContactPage() {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.contact);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setStatus("submitting"));

    // Simulate form submission
    setTimeout(() => {
      dispatch(setStatus("success"));
      setTimeout(() => {
        dispatch(resetForm());
      }, 3000);
    }, 1500);
  };

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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              Have questions or want to get involved? We&apos;d love to hear
              from you. Reach out through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      dispatch(
                        updateField({ field: "name", value: e.target.value })
                      )
                    }
                    className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      dispatch(
                        updateField({ field: "email", value: e.target.value })
                      )
                    }
                    className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={form.subject}
                    onChange={(e) =>
                      dispatch(
                        updateField({ field: "subject", value: e.target.value })
                      )
                    }
                    className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      dispatch(
                        updateField({ field: "message", value: e.target.value })
                      )
                    }
                    className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  {form.status === "submitting"
                    ? "Sending..."
                    : form.status === "success"
                    ? "Message Sent!"
                    : "Send Message"}
                </Button>

                {form.status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent-primary text-sm text-center"
                  >
                    Thank you for reaching out! We&apos;ll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: FaMapMarkerAlt,
                    label: "Address",
                    value: contactInfo.address,
                  },
                  {
                    icon: FaEnvelope,
                    label: "Email",
                    value: contactInfo.email,
                    href: `mailto:${contactInfo.email}`,
                  },
                  {
                    icon: FaPhone,
                    label: "Phone",
                    value: contactInfo.phone,
                    href: `tel:${contactInfo.phone}`,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-text-muted text-sm">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-text-primary hover:text-accent-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text-primary">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center text-text-muted hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-200"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass-card rounded-2xl p-8 text-center">
                <FaMapMarkerAlt className="text-accent-primary text-2xl mx-auto mb-3" />
                <p className="text-text-primary font-medium mb-1">
                  Visit Our Office
                </p>
                <p className="text-text-secondary text-sm">
                  {contactInfo.address}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
