"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useLanguage } from "@/context/language-context";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="w-1/4 border-slate-300 dark:border-slate-700"
        >
          {language === "en" ? "🇺🇸" : "🇧🇷"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className="flex items-center gap-2 hover:cursor-pointer"
        >
          <div className="w-full flex justify-between gap-4">
            <span>English</span>
            <span title="American flag">🇺🇸</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("pt-BR")}
          className="flex items-center gap-2"
        >
          <div className="w-full flex justify-between gap-4 hover:cursor-pointer">
            <span>Português</span>
            <span title="Brazilian flag">🇧🇷</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
