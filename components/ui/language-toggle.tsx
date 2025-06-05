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
            <span>English </span>
            <span title="American flag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                aria-label="American flag"
              >
                <rect width="20" height="14" fill="#b22234" />
                <g fill="#fff">
                  <rect y="2" width="20" height="2" />
                  <rect y="6" width="20" height="2" />
                  <rect y="10" width="20" height="2" />
                </g>
                <rect width="8" height="7" fill="#3c3b6e" />
                <g fill="#fff">
                  <circle cx="1.5" cy="1" r="0.5" />
                  <circle cx="3.5" cy="2" r="0.5" />
                  <circle cx="5.5" cy="1" r="0.5" />
                  <circle cx="7" cy="2" r="0.5" />
                  <circle cx="2.5" cy="3" r="0.5" />
                  <circle cx="4.5" cy="3" r="0.5" />
                  <circle cx="6" cy="4" r="0.5" />
                  <circle cx="1.5" cy="5" r="0.5" />
                  <circle cx="3.5" cy="6" r="0.5" />
                  <circle cx="5.5" cy="5" r="0.5" />
                </g>
              </svg>
            </span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("pt-BR")}
          className="flex items-center gap-2"
        >
          <div className="w-full flex justify-between gap-4 hover:cursor-pointer">
            <span>Português</span>
            <span title="Brazilian flag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                aria-label="Brazilian flag"
              >
                <rect width="20" height="14" fill="#3eae46" />
                <polygon points="10,2 18,7 10,12 2,7" fill="#ffcc29" />
                <circle cx="10" cy="7" r="3" fill="#3e4095" />
                <path
                  d="M7.5 7a2.5 2.5 0 0 1 5 0"
                  stroke="#fff"
                  strokeWidth="0.5"
                  fill="none"
                />
              </svg>
            </span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
