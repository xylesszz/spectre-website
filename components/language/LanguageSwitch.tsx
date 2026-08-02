"use client";

import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import type { Locale } from "@/types";

const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

export function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const current = LOCALES.find((l) => l.code === locale)!;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border bg-bg-card hover:border-accent transition-colors text-sm"
        aria-label="Change language"
      >
        <Globe size={16} className="text-text-secondary" />
        <span>{current.flag}</span>
        <span className="hidden sm:inline text-text-secondary">{current.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 w-44 rounded-xl glass-strong border border-border p-1 z-50 shadow-soft"
            >
              {LOCALES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLocale(l.code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    l.code === locale ? "bg-accent/10 text-accent-hover" : "text-text-secondary hover:bg-bg-card hover:text-text-primary"
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}