"use client";

import { motion } from "framer-motion";
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

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  category?: string;
  featured?: boolean;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  category,
  featured = false,
  index = 0,
}: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col border border-border/80 bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-[0_10px_30px_-10px_rgba(24,24,27,0.05),0_4px_6px_-2px_rgba(24,24,27,0.02)]">
        <CardHeader>
          <div className="flex items-start justify-between gap-space-sm">
            {category ? (
              <Badge
                variant="outline"
                className="rounded-full border-border/80 text-on-surface-variant"
              >
                {category}
              </Badge>
            ) : (
              <span aria-hidden="true" />
            )}
            {featured ? (
              <Badge className="rounded-full border-primary/20 bg-primary/10 text-primary hover:bg-primary/10">
                {t("projects.featured")}
              </Badge>
            ) : null}
          </div>
          <CardTitle className="mt-space-md text-headline-sm font-semibold tracking-tight text-primary transition-colors">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-body-sm text-muted-foreground">{description}</p>
          <div className="mt-space-md flex flex-wrap gap-space-xs">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-full border-border/80 text-on-surface-variant transition-colors group-hover:border-primary/40"
              >
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
            className="inline-flex items-center gap-1 rounded-sm font-medium text-primary transition-colors hover:text-primary/90 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {t("projects.viewmore")}
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
