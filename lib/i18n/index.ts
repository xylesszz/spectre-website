import { translations } from "./translations";
import type { Locale } from "@/types";

export type TranslationKeys = typeof translations.pt;

export function getTranslation(locale: Locale): TranslationKeys {
  return translations[locale];
}

export { translations };