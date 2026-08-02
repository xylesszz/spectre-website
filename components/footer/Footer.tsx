"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitch } from "@/components/language/LanguageSwitch";
import { SocialIcons } from "@/components/social/SocialIcons";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const resolveLabel = (key: string) => {
    const k = key.replace("nav.", "") as keyof typeof t.nav;
    return t.nav[k];
  };

  return (
    <footer className="relative border-t border-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/favicon.png"
                  alt="Spectre"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold">Spectre</span>
            </Link>
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-text-secondary">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary text-sm transition-colors"
                  >
                    {resolveLabel(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-text-secondary">
              {t.footer.social}
            </h4>
            <SocialIcons />
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © {year} Spectre. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-text-secondary text-sm">{t.footer.language}:</span>
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}