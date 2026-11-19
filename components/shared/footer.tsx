"use client";

import { ArrowUpRight, Code2 } from "lucide-react";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="footer"
      className="closing section scroll-mt-16 border-t border-border bg-card"
    >
      <div className="wrap">
        <div className="grid flex-1 grid-cols-1 items-start gap-space-lg md:grid-cols-12 md:gap-6">
          <div className="max-w-2xl md:col-span-6">
            <p className="text-label-sm uppercase tracking-wide text-primary">
              {t("hero.cta.projects")}
            </p>
            <h2 className="mt-space-sm text-headline-lg-mobile font-bold md:text-headline-lg">
              {t("contact.title")}
            </h2>
            <p className="mt-space-md max-w-lg text-body-md text-muted-foreground">
              {t("contact.subtitle")}
            </p>
            <a
              href="#projects"
              className={`${buttonVariants({ variant: "default", size: "lg" })} mt-space-lg`}
            >
              {t("hero.cta.projects")}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div
            data-ui="closing-card"
            className="flex min-h-[18rem] flex-col justify-between rounded-md border border-border/80 bg-surface-container-low p-space-lg md:col-start-7 md:col-span-6 md:min-h-[22rem]"
          >
            <span className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Code2 size={24} aria-hidden="true" />
            </span>
            <div>
              <p className="text-label-md font-semibold text-foreground">
                {t("about.company.position")}
              </p>
              <p className="mt-space-sm max-w-sm text-body-md text-muted-foreground">
                {t("contact.subtitle2")}
              </p>
            </div>
            <p className="border-t border-border/60 pt-space-md font-mono text-label-sm text-primary">
              frontend / design systems / accessibility
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-space-md border-t border-border/60 pt-space-md md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground md:text-base">
            © {CURRENT_YEAR} Ruan Valente. {t("footer.rights")}
          </p>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
