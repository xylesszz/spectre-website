import { COMPANY_CONFIG } from "./config";

export const SITE = {
  name: COMPANY_CONFIG.name,
  description: COMPANY_CONFIG.tagline,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://spectre.app",
};

export const SOCIAL = COMPANY_CONFIG.social;

export const NAV_LINKS = [
  { href: "/", labelKey: "nav.home" },
  { href: "/products", labelKey: "nav.products" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/support", labelKey: "nav.support" },
] as const;