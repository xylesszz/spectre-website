"use client";

import { motion } from "framer-motion";
import { COMPANY_CONFIG } from "@/lib/config";
import { useLanguage } from "@/hooks/useLanguage";

export function Timeline() {
  const { locale } = useLanguage();
  const timeline = COMPANY_CONFIG.timeline;

  return (
    <div className="max-w-3xl mx-auto">
      {timeline.map((entry, index) => (
        <motion.div
          key={entry.year}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 pb-12 last:pb-0"
        >
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-border to-transparent" />
          <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-lg" />
          <div className="ml-4">
            <div className="text-white font-mono text-sm mb-1">{entry.year}</div>
            <h3 className="text-xl font-bold mb-2">{entry.title[locale]}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{entry.description[locale]}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}