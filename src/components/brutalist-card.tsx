"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  hoverColor?: "yellow" | "cyan" | "pink" | "lime" | "white";
  shadowSize?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
}

const hoverColorMap = {
  yellow: "hover:bg-hover-yellow hover:text-text-on-yellow",
  cyan: "hover:bg-hover-cyan hover:text-text-on-cyan",
  pink: "hover:bg-hover-pink hover:text-text-on-pink",
  lime: "hover:bg-hover-lime hover:text-text-on-lime",
  white: "hover:bg-hover-secondary-bg hover:text-hover-secondary-text",
};

const shadowMap = {
  sm: "brutal-shadow-sm",
  md: "brutal-shadow",
  lg: "brutal-shadow-lg",
  xl: "brutal-shadow-xl",
};

export function BrutalistCard({
  children,
  className,
  hoverColor = "white",
  shadowSize = "md",
  onClick,
}: BrutalistCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-background text-foreground brutal-border transition-colors duration-300",
        shadowMap[shadowSize],
        hoverColorMap[hoverColor],
        onClick && "cursor-pointer",
        className
      )}
      whileHover={{ y: -4, x: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
