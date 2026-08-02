"use client";

import productsData from "@/data/products.json";
import { ProductCard } from "@/components/cards/ProductCard";
import { useLanguage } from "@/hooks/useLanguage";
import type { Product } from "@/types";

export function ProductsGrid() {
  const { t, locale } = useLanguage();
  const products = productsData as Product[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p, i) => (
        <ProductCard
          key={p.id}
          product={{
            ...p,
            description: { pt: p.description.pt, en: p.description.en },
            features: { pt: p.features.pt, en: p.features.en },
          }}
          statusLabel={t.products.status[p.status]}
          buyLabel={t.products.buy}
          featuresLabel={t.products.features}
          delay={i * 0.1}
        />
      ))}
    </div>
  );
}