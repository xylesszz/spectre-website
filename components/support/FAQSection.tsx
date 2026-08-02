"use client";

import { FAQItem } from "@/components/cards/FAQItem";
import { useLanguage } from "@/hooks/useLanguage";

export function FAQSection() {
  const { t } = useLanguage();
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {t.support.faqItems.map((item, i) => (
        <FAQItem key={i} question={item.q} answer={item.a} index={i} />
      ))}
    </div>
  );
}