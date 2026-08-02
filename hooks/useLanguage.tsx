"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getTranslation, type TranslationKeys } from "@/lib/i18n";
import type { Locale } from "@/types";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "spectre-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "pt" || stored === "en") {
      setLocaleState(stored);
    } else {
      const browser = navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
      setLocaleState(browser);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // storage unavailable
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: getTranslation(locale) }),
    [locale, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}