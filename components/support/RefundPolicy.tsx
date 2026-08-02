"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { COMPANY_CONFIG } from "@/lib/config";
import { useLanguage } from "@/hooks/useLanguage";

export function RefundPolicy() {
  const { locale } = useLanguage();
  const { refund } = COMPANY_CONFIG;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {refund.tiers.map((tier, index) => (
          <motion.div
            key={tier.license}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full text-center p-8 border-dashed hover:border-white/20">
              <div className="w-14 h-14 rounded-2xl bg-bg-secondary border border-border flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{tier.license}</h3>
              <p className="text-text-secondary text-sm">
                {locale === "pt" ? "Prazo para reembolso:" : "Refund deadline:"}
                <br />
                <span className="text-white font-medium text-lg mt-1 block">
                  {tier.deadline[locale]}
                </span>
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}