import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={twMerge(
        "relative rounded-2xl bg-bg-card border border-border p-6 transition-all duration-300",
        hover && "hover:border-text-secondary/40 hover:-translate-y-0.5 hover:shadow-card",
        className
      )}
    >
      {children}
    </div>
  );
}