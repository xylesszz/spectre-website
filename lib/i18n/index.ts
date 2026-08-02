import { translations } from "./translations";
import type { Locale } from "@/types";

// O tipo agora é inferido dinamicamente com base no locale, evitando conflito de literais
export function getTranslation(locale: Locale) {
  return translations[locale];
}

export type TranslationKeys = ReturnType<typeof getTranslation>;

export { translations };