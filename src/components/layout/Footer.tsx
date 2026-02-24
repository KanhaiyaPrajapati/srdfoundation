"use client";

import Image from "next/image";
import Link from "next/link";
import { footerLinks, contactInfo } from "@/data/siteData";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";

const socialIcons = [
  { icon: FaFacebookF, href: contactInfo.socialLinks.facebook, label: "Facebook" },
  { icon: FaTwitter, href: contactInfo.socialLinks.twitter, label: "Twitter" },
  { icon: FaInstagram, href: contactInfo.socialLinks.instagram, label: "Instagram" },
  { icon: FaLinkedinIn, href: contactInfo.socialLinks.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="logo-blend">
                <Image
                  src="/srdlogo.png"
                  alt="SRD Foundation"
                  width={260}
                  height={65}
                  className="logo-img h-14 w-auto"
                />
              </div>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Empowering newcomers to build a brighter future in Canada through
              comprehensive community support and integration services.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center text-text-muted hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-200"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Settlement Support</li>
              <li>Education & Training</li>
              <li>Community Integration</li>
              <li>Family Services</li>
              <li>Health & Wellness</li>
              <li>Employment Assistance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>{contactInfo.address}</li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-accent-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-accent-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} SRD Foundation. All rights
            reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1">
            Made with <FaHeart className="text-accent-primary text-xs" /> in
            Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
