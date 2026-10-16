"use client";

import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container px-gutter-mobile md:px-gutter">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm md:text-base text-muted-foreground">
            © 2025 Ruan Valente. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
