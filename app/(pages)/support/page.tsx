"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FAQSection } from "@/components/support/FAQSection";
import { FadeIn } from "@/components/animations/FadeIn";
import { RefundPolicy } from "@/components/support/RefundPolicy";
import { useLanguage } from "@/hooks/useLanguage";
import { COMPANY_CONFIG } from "@/lib/config";
import { MessageCircle, CreditCard, ArrowRight } from "lucide-react";

export default function SupportPage() {
  const { t, locale } = useLanguage();

  return (
    <main className="pt-20">
      {/* Discord Hero */}
      <Section title={t.support.title} subtitle={t.support.subtitle}>
        <FadeIn>
          <Card className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-bg-secondary border border-border flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{t.support.discord.title}</h3>
            <p className="text-text-secondary text-sm mb-8 leading-relaxed">
              {t.support.discord.desc}
            </p>
            <a href={COMPANY_CONFIG.social.discord} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                {t.support.discord.cta}
              </Button>
            </a>
          </Card>
        </FadeIn>
      </Section>

      {/* Payment Method */}
      <Section>
        <FadeIn>
          <Card className="max-w-2xl mx-auto text-center border-white/10">
            <div className="w-14 h-14 rounded-2xl bg-bg-secondary border border-border flex items-center justify-center mx-auto mb-4">
              <CreditCard size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t.support.payment.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {t.support.payment.desc}
            </p>
          </Card>
        </FadeIn>
      </Section>

      {/* Refund Policy */}
      <Section title={t.support.refund.title} subtitle={t.support.refund.subtitle}>
        <RefundPolicy />
      </Section>

      {/* FAQ */}
      <Section title={t.support.faq.title} subtitle={t.support.faq.subtitle}>
        <FAQSection />
      </Section>
    </main>
  );
}