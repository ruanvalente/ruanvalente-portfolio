"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useLanguage } from "@/context/language-context";

export function ProjectCard({
  title,
  description,
  tags,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  link: string;
}) {
  const { t } = useLanguage();
  return (
    <Card className="rounded-lg border bg-card text-card-foreground shadow-md hover:border-amber-600 dark:hover:border-yellow-400 transition-colors">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold leading-none tracking-tight text-amber-600 dark:text-yellow-400">
          {t(title)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{t(description)}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="border-slate-600">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 dark:text-yellow-400 hover:underline inline-flex items-center"
        >
          {t("projects.viewmore")} <ExternalLink size={16} className="ml-1" />
        </a>
      </CardFooter>
    </Card>
  );
}
