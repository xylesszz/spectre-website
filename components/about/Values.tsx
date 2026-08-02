"use client";

import { Lightbulb, Gem, ShieldCheck, Users } from "lucide-react";
import { ValueCard } from "@/components/cards/ValueCard";
import { useLanguage } from "@/hooks/useLanguage";

export function Values() {
  const { t } = useLanguage();

  const values = [
    { icon: Lightbulb, title: t.about.values.innovation.title, desc: t.about.values.innovation.desc },
    { icon: Gem, title: t.about.values.quality.title, desc: t.about.values.quality.desc },
    { icon: ShieldCheck, title: t.about.values.security.title, desc: t.about.values.security.desc },
    { icon: Users, title: t.about.values.community.title, desc: t.about.values.community.desc },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((v, i) => (
        <ValueCard key={v.title} icon={v.icon} title={v.title} description={v.desc} delay={i * 0.1} />
      ))}
    </div>
  );
}