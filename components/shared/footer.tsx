"use client";

import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-card py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="flex items-end">
          <div className="ml-auto mb-4 text-center md:mb-0 md:text-right">
            <p className="text-muted-foreground">
              © 2025 Ruan Valente. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
