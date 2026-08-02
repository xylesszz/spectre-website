"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="text-8xl font-bold text-gradient-accent mb-4">404</div>
        <h1 className="text-3xl font-bold mb-3">{t.common.notFound}</h1>
        <p className="text-text-secondary mb-8">{t.common.notFoundDesc}</p>
        <Link href="/">
          <Button variant="primary" icon={<Home size={16} />}>{t.common.backHome}</Button>
        </Link>
      </motion.div>
    </main>
  );
}