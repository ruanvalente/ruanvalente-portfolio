"use client";

import { ArrowUp } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export function BackToTopButton() {
  const { t } = useLanguage();

  return (
    <a
      href="#top"
      className={buttonVariants({
        variant: "outline",
        size: "default",
        className: "h-11 min-h-11",
      })}
    >
      <ArrowUp aria-hidden="true" className="size-4" />
      {t("footer.backToTop")}
    </a>
  );
}
