"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

import { TRANSLATIONS } from "@/constants/translations";
import { LANGUAGE_COOKIE } from "@/lib/i18n";
import type { Language } from "@/types";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    document.cookie = `${LANGUAGE_COOKIE}=${newLanguage}; path=/; max-age=31536000; samesite=lax`;
    try {
      localStorage.setItem(LANGUAGE_COOKIE, newLanguage);
    } catch {
      // localStorage may be unavailable (e.g. private browsing mode)
    }
    router.refresh();
  };

  const t = (key: string): string => {
    return (
      TRANSLATIONS[language][
        key as keyof (typeof TRANSLATIONS)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
