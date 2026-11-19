"use client";

import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { DownloadCloudIcon, Menu } from "lucide-react";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { getResumePath } from "@/lib/getResume";

const NAV_MENU = [
  { key: "nav.about", href: "#about" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" },
] as const;

function NavList({
  onNavigate,
  mobile = false,
}: {
  onNavigate?: () => void;
  mobile?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-space-md pt-space-md"
          : "flex items-center gap-4 xl:gap-5"
      }
    >
      {NAV_MENU.map(({ key, href }) => (
        <li key={key}>
          <a
            href={href}
            onClick={onNavigate}
            className={
              mobile
                ? "flex min-h-11 items-center rounded-sm text-lg text-foreground/90 transition-colors hover:text-primary"
                : "flex min-h-11 items-center whitespace-nowrap rounded-sm text-sm text-foreground/90 transition-colors hover:text-primary"
            }
          >
            {t(key)}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  const { t, language } = useLanguage();
  const resumePath = getResumePath(language);
  const [menuOpen, setMenuOpen] = useState(false);

  const resumeLink = (
    <a
      className={buttonVariants({
        variant: "default",
        size: "default",
        className: "h-11 min-w-11",
      })}
      href={resumePath}
      download
    >
      <span>{t("nav.resume")}</span>
      <DownloadCloudIcon aria-hidden="true" className="size-4" />
    </a>
  );

  return (
    <header className="nav fixed top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md">
      <nav aria-label={t("nav.skip")} className="contents">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:flex focus:min-h-11 focus:items-center focus:rounded-md focus:bg-primary focus:px-4 focus:text-primary-foreground focus:shadow-lg"
        >
          {t("nav.skip")}
        </a>
      </nav>
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-sm text-lg font-bold xl:text-xl"
        >
          Ruan Valente
        </a>

        <nav aria-label={t("nav.primary")} className="hidden lg:block">
          <NavList />
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          {resumeLink}
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label={t("nav.menu")}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            closeLabel={t("nav.close")}
            className="w-[280px] sm:w-[340px]"
          >
            <SheetTitle className="text-lg font-bold">
              {t("nav.menuTitle")}
            </SheetTitle>
            <div className="pt-4">
              <div className="flex flex-wrap items-center gap-3">
                <LanguageToggle />
                <ThemeToggle />
                {resumeLink}
              </div>
            </div>

            <nav aria-label={t("nav.mobile")}>
              <NavList mobile onNavigate={() => setMenuOpen(false)} />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
