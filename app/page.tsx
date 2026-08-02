import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Stats } from "@/components/home/Stats";
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Spectre — ${SITE.description.pt}`,
  description: SITE.description.pt,
  alternates: {
    languages: { "pt-BR": "/", "en-US": "/" },
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
    </>
  );
}