import type { Language } from "@/types";

export const getResumePath = (locale: string): string => {
  const supportedLocales: Language[] = ["en", "pt-BR"];
  const normalizedLocale = locale?.toLowerCase() ?? "en";

  const isValidLocale = supportedLocales.some(
    (supported) => supported.toLowerCase() === normalizedLocale
  );

  const defaultLocale = "en";
  const currentLocale = isValidLocale ? normalizedLocale : defaultLocale;

  return currentLocale === "en"
    ? "/ruanvalente-resume-en.pdf"
    : "/ruanvalente-resume.pdf";
};
