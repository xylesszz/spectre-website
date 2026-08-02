"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { LanguageSwitch } from "@/components/language/LanguageSwitch";
import { SocialIcons } from "@/components/social/SocialIcons";
import { twMerge } from "tailwind-merge";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const scrolled = useScrollPosition();
  const [open, setOpen] = useState(false);

  const resolveLabel = (key: string) => {
    const k = key.replace("nav.", "") as keyof typeof t.nav;
    return t.nav[k];
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={twMerge(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/favicon.png"
              alt="Spectre"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-semibold tracking-wide">Spectre</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={twMerge(
                  "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  active ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                )}
              >
                {resolveLabel(link.labelKey)}
                {active && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-bg-card border border-border -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitch />
          <SocialIcons />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-border hover:border-text-secondary transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-strong border-t border-border"
        >
          <div className="px-6 py-6 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={twMerge(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href ? "bg-bg-card text-text-primary" : "text-text-secondary"
                )}
              >
                {resolveLabel(link.labelKey)}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-border mt-2">
              <LanguageSwitch />
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}