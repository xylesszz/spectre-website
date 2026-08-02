"use client";

import { motion } from "framer-motion";
import { BookOpen, Settings, Lock, Wrench } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/hooks/useLanguage";

const icons = [BookOpen, Settings, Lock, Wrench];

export function Tutorials() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {t.support.tutorialsList.map((tutorial, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="h-full flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{tutorial.title}</h3>
                <p className="text-text-secondary text-sm">{tutorial.description}</p>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}