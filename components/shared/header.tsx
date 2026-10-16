"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/context/language-context";
import { DownloadCloudIcon, Menu } from "lucide-react";
import { LanguageToggle } from "../ui/language-toggle";
import { ThemeToggle } from "../ui/theme-toggle";
import { getResumePath } from "@/lib/getResume";

const NAV_MENU = [
  {
    key: "nav.about",
    href: "#about",
  },
  {
    key: "nav.skills",
    href: "#skills",
  },
  {
    key: "nav.experience",
    href: "#experience",
  },
  {
    key: "nav.projects",
    href: "#projects",
  },
  {
    key: "nav.contact",
    href: "#contact",
  },
];

export function Header() {
  const { t, language } = useLanguage();
  const resumePath = getResumePath(language);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-lg md:text-xl font-bold">Ruan Valente</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_MENU.map((menu, index) => (
            <a
              key={index}
              href={menu.href}
              className="text-sm md:text-base text-foreground/90 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-1"
            >
              {t(menu.key)}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <a
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-10 px-4 py-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            href={resumePath}
            download
          >
            <span>{t("nav.resume")}</span>
            <span>
              <DownloadCloudIcon />
            </span>
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button
              aria-label="Open menu"
              className="inline-flex items-center justify-center rounded p-2 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[340px]">
            <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
            <div className="pt-4 border-b mt-4">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <LanguageToggle />
                <ThemeToggle />
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-10 px-4 py-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  href={resumePath}
                  download
                >
                  <span>{t("nav.resume")}</span>
                  <span>
                    <DownloadCloudIcon />
                  </span>
                </a>
              </div>
            </div>

            <nav className="flex flex-col gap-space-md pt-space-md">
              {NAV_MENU.map((menu, index) => (
                <a
                  key={index}
                  href={menu.href}
                  className="text-lg text-foreground/90 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-1 py-1"
                >
                  {t(menu.key)}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
