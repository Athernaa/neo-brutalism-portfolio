"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface BrutalistButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "accent-yellow" | "accent-cyan" | "accent-pink" | "accent-lime";
  type?: "button" | "submit";
}

const variantStyles = {
  primary: "bg-foreground text-background hover:bg-hover-primary-bg hover:text-hover-primary-text",
  secondary: "bg-background text-foreground hover:bg-hover-secondary-bg hover:text-hover-secondary-text",
  "accent-yellow": "bg-accent-yellow text-text-on-yellow hover:bg-hover-yellow",
  "accent-cyan": "bg-accent-cyan text-text-on-cyan hover:bg-hover-cyan",
  "accent-pink": "bg-accent-pink text-text-on-pink hover:bg-hover-pink",
  "accent-lime": "bg-accent-lime text-text-on-lime hover:bg-hover-lime",
};

export function BrutalistButton({
  children,
  onClick,
  href,
  className,
  variant = "primary",
  type = "button",
}: BrutalistButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold brutal-border brutal-shadow transition-all",
    "active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          className={baseClasses}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
