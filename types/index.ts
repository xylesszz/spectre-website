export type Locale = "pt" | "en";

export interface Product {
  id: string;
  name: string;
  description: { pt: string; en: string };
  features: { pt: string[]; en: string[] };
  image: string;
  status: "active" | "beta" | "coming-soon";
  price: string;
  badge?: string;
}

export interface FAQItem {
  question: { pt: string; en: string };
  answer: { pt: string; en: string };
}

export interface TimelineEntry {
  year: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
}

export interface Tutorial {
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  icon: string;
}