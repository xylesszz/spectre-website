"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

export function TimelineItem({ year, title, description, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />
      <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-glow" />
      <div className="ml-4">
        <div className="text-accent font-mono text-sm mb-1">{year}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}