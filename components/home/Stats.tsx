"use client";

import { Section } from "@/components/ui/Section";
import { StatCard } from "@/components/cards/StatCard";
import { useLanguage } from "@/hooks/useLanguage";
import { COMPANY_CONFIG } from "@/lib/config";

export function Stats() {
  const { t } = useLanguage();

  // Todos os valores agora são estritamente números, e o "+" é tratado no suffix
  const stats = [
    { value: COMPANY_CONFIG.stats.activeCustomers, suffix: "+", label: t.stats.customers, delay: 0 },
    { value: COMPANY_CONFIG.stats.products, suffix: "", label: t.stats.products, delay: 0.1 },
    { value: COMPANY_CONFIG.stats.weeklyUpdates, suffix: "+", label: t.stats.updates, delay: 0.2 },
    { value: 24, suffix: "/7", label: t.stats.support, delay: 0.3 },
  ];

  return (
    <Section>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <StatCard 
            key={s.label} 
            value={s.value} 
            suffix={s.suffix} 
            label={s.label} 
            delay={s.delay} 
          />
        ))}
      </div>
    </Section>
  );
}