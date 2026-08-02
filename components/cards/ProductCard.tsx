"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  statusLabel: string;
  buyLabel: string;
  featuresLabel: string;
  delay?: number;
}

export function ProductCard({ product, statusLabel, buyLabel, featuresLabel, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full flex flex-col overflow-hidden p-0">
        <div className="relative h-48 bg-gradient-to-br from-bg-card to-bg-secondary overflow-hidden">
          <div className="absolute inset-0 radial-glow opacity-50" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {product.badge && (
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold">
              {product.badge}
            </div>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <Badge status={product.status} label={statusLabel} />
          </div>

          <p className="text-text-secondary text-sm mb-5 leading-relaxed">
            {product.description.pt}
          </p>

          <div className="mb-5">
            <div className="text-xs uppercase tracking-wider text-text-secondary mb-2">
              {featuresLabel}
            </div>
            <ul className="space-y-1.5">
              {product.features.pt.slice(0, 4).map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                  <Check size={14} className="text-success flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient-accent">{product.price}</div>
            <Button
              variant="primary"
              size="sm"
              icon={<ShoppingCart size={14} />}
              disabled={product.status === "coming-soon"}
            >
              {buyLabel}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}