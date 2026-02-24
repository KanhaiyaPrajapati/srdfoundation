"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-primary to-accent-orange text-white hover:shadow-[0_0_30px_rgba(94,158,53,0.3)] hover:scale-105",
    outline:
      "border-2 border-accent-primary text-accent-primary hover:bg-accent-primary/10",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
