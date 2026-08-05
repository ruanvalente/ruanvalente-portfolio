import { TRANSLATIONS } from "@/constants/translations";
import type { Language } from "@/types";

export const LANGUAGE_COOKIE = "language";

export function getLanguage(cookie?: string): Language {
  return cookie === "pt-BR" ? "pt-BR" : "en";
}

export function translate(lang: Language, key: string): string {
  return (
    TRANSLATIONS[lang][key as keyof (typeof TRANSLATIONS)[typeof lang]] || key
  );
}

export type Translator = (key: string) => string;

export function createTranslator(lang: Language): Translator {
  return (key: string) => translate(lang, key);
}
