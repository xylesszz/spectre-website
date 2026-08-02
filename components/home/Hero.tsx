"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";
import { SOCIAL } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary via-bg to-bg" />
      
      <div className="relative max-w-5xl mx-auto px-6 md:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-bg-card border border-border text-xs text-text-secondary">
            Tecnologia Premium
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          {t.hero.title}
          <br />
          <span className="text-gradient">{t.hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/products">
            <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              {t.hero.ctaProducts}
            </Button>
          </Link>
          <a href={SOCIAL.discord} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              {t.hero.ctaDiscord}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}