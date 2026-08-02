"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Timeline } from "@/components/about/Timeline";
import { Values } from "@/components/about/Values";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/hooks/useLanguage";
import { Target, Eye, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="pt-20">
      <Section title={t.about.title} subtitle={t.about.subtitle}>
        <FadeIn>
          <Card className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-secondary leading-relaxed">{t.about.story}</p>
          </Card>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FadeIn delay={0}>
            <Card className="h-full">
              <div className="w-12 h-12 rounded-xl bg-bg-secondary border border-border flex items-center justify-center mb-4">
                <Target size={22} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t.about.mission.title}</h3>
              <p className="text-text-secondary leading-relaxed">{t.about.mission.desc}</p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card className="h-full">
              <div className="w-12 h-12 rounded-xl bg-bg-secondary border border-border flex items-center justify-center mb-4">
                <Eye size={22} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t.about.vision.title}</h3>
              <p className="text-text-secondary leading-relaxed">{t.about.vision.desc}</p>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <Section title={t.about.values.title}>
        <Values />
      </Section>

      <Section title={t.about.timeline.title}>
        <Timeline />
      </Section>

      <Section title={t.about.why.title}>
        <FadeIn>
          <Card className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {t.about.why.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-white flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </Section>
    </main>
  );
}