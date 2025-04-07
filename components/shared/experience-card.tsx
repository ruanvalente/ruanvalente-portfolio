"use client";

import { useLanguage } from "@/context/language-context";
import { Badge } from "../ui/badge";

export function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  isLast = false,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  isLast?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute left-3 top-3 bottom-0 w-px bg-slate-700"></div>
      )}
      <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-amber-600 dark:bg-yellow-400 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white dark:bg-slate-900"></div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">{t(title)}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-amber-600 dark:text-yellow-400">
            {t(company)}
          </span>
          <span className="text-sm text-muted-foreground">• {t(period)}</span>
        </div>
        <p className="text-muted-foreground mb-4 whitespace-pre-line">
          {t(description)}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
