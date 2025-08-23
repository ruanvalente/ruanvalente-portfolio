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
import { getResumePath } from "@/utils/getResume";
import { useEffect, useState } from "react";

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
    <header className="container mx-auto py-6 px-4 border-b">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold">Ruan Valente</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {NAV_MENU.map((menu, index) => (
            <a
              key={index}
              href={menu.href}
              className="hover:text-amber-600 dark:hover:text-yellow-400 transition-colors"
            >
              {t(menu.key)}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <a
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-10 px-4 py-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-slate-900 hover:animate-pulse"
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
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[340px]">
            <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
            <div className="pt-4 border-b mt-4">
              <div className="flex gap-6 mb-4">
                <LanguageToggle />
                <ThemeToggle />
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-10 px-4 py-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-slate-900"
                  href={resumePath}
                  download
                >
                  <span> {t("nav.resume")}</span>
                  <span>
                    <DownloadCloudIcon />
                  </span>
                </a>
              </div>
            </div>

            <nav className="flex flex-col gap-6 pt-4">
              {NAV_MENU.map((menu, index) => (
                <a
                  key={index}
                  href={menu.href}
                  className="text-lg hover:text-amber-600 dark:hover:text-yellow-400 transition-colors"
                >
                  {t(menu.key)}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
