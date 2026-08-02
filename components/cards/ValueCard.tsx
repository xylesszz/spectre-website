"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ValueCard({ icon: Icon, title, description, delay = 0 }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full text-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center mx-auto mb-4">
          <Icon size={24} className="text-accent" />
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}