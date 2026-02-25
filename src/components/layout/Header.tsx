"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleMobileMenu, closeMobileMenu, toggleTheme } from "@/store/slices/uiSlice";
import { navLinks } from "@/data/siteData";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { mobileMenuOpen, theme } = useSelector(
    (state: RootState) => state.ui
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const regularLinks = navLinks.filter((l) => l.href !== "/donate");
  const donateLink = navLinks.find((l) => l.href === "/donate")!;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card border-b border-border shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo — links to home */}
          <Link
            href="/"
            onClick={() => dispatch(closeMobileMenu())}
            className="flex items-center shrink-0"
          >
            <div className={`logo-blend ${!scrolled ? "logo-blend--top" : ""}`}>
              <Image
                src="/srdlogo.png"
                alt="SRD Foundation"
                width={240}
                height={60}
                unoptimized
                className="logo-img h-11 sm:h-14 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {regularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-accent-primary bg-accent-primary/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Donate CTA */}
            <Link
              href={donateLink.href}
              className={`ml-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                pathname === donateLink.href
                  ? "bg-gradient-to-r from-accent-primary to-accent-orange text-white shadow-[0_0_20px_rgba(94,158,53,0.3)]"
                  : "border border-accent-primary text-accent-primary hover:bg-gradient-to-r hover:from-accent-primary hover:to-accent-orange hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(94,158,53,0.3)] hover:scale-105"
              }`}
            >
              {donateLink.name}
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="ml-2 p-2 rounded-lg text-text-secondary hover:text-accent-primary hover:bg-bg-tertiary/50 transition-all duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {theme === "dark" ? (
                    <FaSun className="text-lg" />
                  ) : (
                    <FaMoon className="text-lg" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={() => dispatch(toggleTheme())}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="p-2 text-text-secondary hover:text-accent-primary transition-colors"
            >
              {theme === "dark" ? (
                <FaSun className="text-lg" />
              ) : (
                <FaMoon className="text-lg" />
              )}
            </button>
            <button
              className="text-text-secondary hover:text-text-primary p-2"
              onClick={() => dispatch(toggleMobileMenu())}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass-card border-t border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {regularLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => dispatch(closeMobileMenu())}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "text-accent-primary bg-accent-primary/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Donate CTA */}
              <Link
                href={donateLink.href}
                onClick={() => dispatch(closeMobileMenu())}
                className={`block mx-4 mt-3 px-4 py-3 rounded-lg text-sm font-semibold text-center transition-all duration-300 ${
                  pathname === donateLink.href
                    ? "bg-gradient-to-r from-accent-primary to-accent-orange text-white"
                    : "border border-accent-primary text-accent-primary"
                }`}
              >
                {donateLink.name}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
