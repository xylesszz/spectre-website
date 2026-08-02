import type { ReactNode } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export function Section({ id, title, subtitle, children, className, centered = true }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 px-4 ${className || ""}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <FadeIn className={`mb-16 ${centered ? "text-center" : ""}`}>
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </FadeIn>
        )}
        {children}
      </div>
    </section>
  );
}