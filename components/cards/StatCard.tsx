"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, suffix = "", label, delay = 0 }: StatCardProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate(count, value, { duration: 2, delay, ease: "easeOut" });
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [count, value, delay]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center p-8 rounded-2xl glass border border-border"
    >
      <div className="text-5xl md:text-6xl font-bold text-gradient-accent mb-2">
        {display.toLocaleString()}
        {suffix}
      </div>
      <div className="text-text-secondary text-sm uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}