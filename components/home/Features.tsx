"use client";

import { Shield, Zap, RefreshCw, Award, UserCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { useLanguage } from "@/hooks/useLanguage";

export function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: Award, title: t.features.premium.title, desc: t.features.premium.desc },
    { icon: Zap, title: t.features.fast.title, desc: t.features.fast.desc },
    { icon: RefreshCw, title: t.features.updates.title, desc: t.features.updates.desc },
    { icon: Shield, title: t.features.secure.title, desc: t.features.secure.desc },
    { icon: UserCheck, title: t.features.professional.title, desc: t.features.professional.desc },
  ];

  return (
    <Section title={t.features.title} subtitle={t.features.subtitle}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc} delay={i * 0.1} />
        ))}
      </div>
    </Section>
  );
}