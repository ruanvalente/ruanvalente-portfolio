"use client";

import { useLanguage } from "@/context/language-context";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  const { t } = useLanguage();
  return (
    <Card className="rounded-lg border bg-card text-card-foreground shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold leading-none tracking-tight text-amber-600 dark:text-yellow-400">
          {t(title)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-yellow-400"></div>
              <span className="text-muted-foreground">{t(skill)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
