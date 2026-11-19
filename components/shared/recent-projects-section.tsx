"use client";

import { ExternalLink } from "lucide-react";
import { ProjectCard } from "./project-card";
import { SectionHeader } from "./section-header";
import { RECENT_PROJECTS } from "@/constants/config";
import { useLanguage } from "@/context/language-context";

export function RecentProjectsSection() {
  const { t } = useLanguage();
  const firstRow = RECENT_PROJECTS.slice(0, 3);
  const secondRow = RECENT_PROJECTS.slice(3);

  const cards = (items: typeof RECENT_PROJECTS) =>
    items.map((project) => (
      <ProjectCard
        key={project.title}
        title={project.title}
        description={t(project.descriptionKey)}
        tags={project.tags}
        link={project.link}
        category={t(
          `projects.filter.${
            project.category.find((value) => value !== "all") ?? "other"
          }`
        )}
      />
    ));

  return (
    <section
      id="recent-work"
      data-screen="free"
      className="section g2 projects recent-projects scroll-mt-16 py-20 lg:py-24"
    >
      <div className="wrap">
        <div className="g2-grid min-h-0 flex-1">
          <div className="screen-group">
            <SectionHeader
              eyebrow={t("recent.eyebrow")}
              title={t("recent.title")}
              accent
              align="left"
              className="mb-space-md"
            />

            <div className="grid auto-rows-fr gap-space-md md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {cards(firstRow)}
            </div>
          </div>

          <div className="screen-group">
            <div className="grid auto-rows-fr gap-space-md md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {cards(secondRow)}
            </div>
          </div>
        </div>

        <div className="mt-space-lg border-t border-border/60 pt-space-md lg:mt-space-xl lg:pt-space-lg">
          <a
            href="https://github.com/ruanvalente"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1 rounded-sm text-primary transition-colors hover:underline"
          >
            {t("projects.viewmore")}
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
