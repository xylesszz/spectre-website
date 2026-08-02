"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  icon?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-text-primary text-bg hover:bg-white border border-text-primary",
  secondary:
    "bg-bg-card border border-border text-text-primary hover:border-text-secondary hover:text-text-primary",
  ghost:
    "bg-transparent border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({ variant = "primary", size = "md", children, icon, className, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={twMerge(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-text-primary/50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </motion.button>
  );
}