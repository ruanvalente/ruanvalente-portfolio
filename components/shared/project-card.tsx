"use client";

import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { ProjectVisual } from "./project-visual";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  category?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  category,
  featured = false,
}: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} — ${t("projects.view")}`}
      className="group block h-full rounded-md transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
    >
      <Card className="flex h-full flex-col border border-border/80 bg-card shadow-sm transition-shadow duration-200 group-hover:border-primary/30 group-hover:shadow-md">
        <ProjectVisual tags={tags} />
        <CardHeader>
          <div className="flex items-start justify-between gap-space-sm">
            {category ? (
              <Badge
                variant="outline"
                className="rounded-full border-border/80 text-on-surface-variant"
              >
                {category}
              </Badge>
            ) : null}
            {featured ? (
              <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/10">
                {t("projects.featured")}
              </Badge>
            ) : null}
          </div>
          <CardTitle className="mt-space-md text-headline-sm font-semibold text-primary">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-body-sm text-muted-foreground">{description}</p>
          <ul className="mt-space-md flex flex-wrap gap-space-xs">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge
                  variant="outline"
                  className="rounded-full border-border/80 text-on-surface-variant"
                >
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <span className="inline-flex min-h-11 items-center gap-1 font-medium text-primary underline-offset-4 transition-colors group-hover:underline">
            {t("projects.view")}
            <ExternalLink size={16} aria-hidden="true" />
          </span>
        </CardFooter>
      </Card>
    </a>
  );
}
