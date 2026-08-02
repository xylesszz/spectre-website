"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Monitor, Smartphone, Apple } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/hooks/useLanguage";

type Category = "pc" | "android" | "ios";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  status: "active" | "beta";
  buyLink: string;
}

// Link oficial do Discord para todos os botões de compra
const DISCORD_INVITE = "https://discord.gg/cqsUYw3u7G";

const products: Record<Category, Product[]> = {
  pc: [
    {
      id: "external",
      name: "Free Fire External",
      description: "Solução externa avançada com detecção precisa e performance otimizada.",
      image: "/external.png",
      status: "active",
      buyLink: DISCORD_INVITE,
    },
    {
      id: "internal",
      name: "Free Fire Internal",
      description: "Injeção interna segura com recursos completos e atualizações constantes.",
      image: "/internal.png",
      status: "active",
      buyLink: DISCORD_INVITE,
    },
  ],
  android: [],
  ios: [],
};

const categoryLabels = {
  pc: { label: "PC", icon: Monitor },
  android: { label: "Android", icon: Smartphone },
  ios: { label: "iOS", icon: Apple },
};

export function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("pc");
  const { t } = useLanguage();

  const currentProducts = products[activeCategory];
  const ActiveIcon = categoryLabels[activeCategory].icon;

  return (
    <main className="pt-20">
      <Section 
        title="Produtos" 
        subtitle="Soluções premium desenvolvidas com precisão e qualidade."
      >
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {(Object.keys(categoryLabels) as Category[]).map((category) => {
            const { label, icon: Icon } = categoryLabels[category];
            const isActive = activeCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "bg-white text-black border border-white" 
                    : "bg-bg-card border border-border text-text-secondary hover:border-text-secondary hover:text-white"
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {currentProducts.length > 0 ? (
              currentProducts.map((product, index) => (
                <FadeIn key={product.id} delay={index * 0.1}>
                  <Card className="h-full overflow-hidden p-0 group flex flex-col">
                    {/* Image Area - AUMENTADO para acomodar banners (h-80 no mobile, h-96 no desktop) */}
                    <div className="relative h-80 md:h-96 bg-bg-secondary overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent opacity-80" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-lg">
                          {product.status === "active" ? "Disponível" : "Beta"}
                        </span>
                  </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                        {product.description}
                      </p>
                      
                      <a 
                        href={product.buyLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block w-full"
                      >
                        <Button 
                          variant="primary" 
                          className="w-full"
                          icon={<ExternalLink size={16} />}
                        >
                          {t.products.buy}
                        </Button>
                      </a>
                    </div>
                  </Card>
                </FadeIn>
              ))
            ) : (
              <div className="col-span-full">
                <Card className="text-center py-16 border-dashed border-border/50">
                  <div className="w-16 h-16 rounded-2xl bg-bg-secondary border border-border flex items-center justify-center mx-auto mb-4">
                    <ActiveIcon size={28} className="text-text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Em Breve</h3>
                  <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
                    Estamos desenvolvendo soluções exclusivas para {categoryLabels[activeCategory].label}. 
                    Em breve teremos novidades.
                  </p>
                </Card>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Section>
    </main>
  );
}