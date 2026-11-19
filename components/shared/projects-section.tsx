"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { ProjectCard } from "./project-card";
import { SectionHeader } from "./section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { PROJECTS, TABS } from "@/constants/config";
import { useLanguage } from "@/context/language-context";

export function ProjectsSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const filtered = PROJECTS.filter((project) =>
    project.category.includes(filter)
  );
  const firstRow = filtered.slice(0, 3);
  const secondRow = filtered.slice(3);

  const cards = (items: typeof filtered) =>
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
        featured={"featured" in project && project.featured}
      />
    ));

  return (
    <section
      id="projects"
      data-screen="free"
      className="section g2 projects scroll-mt-16 py-20 lg:py-24"
    >
      <div className="wrap">
        <Tabs
          value={filter}
          onValueChange={setFilter}
          className="flex min-h-0 flex-1 flex-col"
        >
          <TabsContent
            value={filter}
            data-ui="project-gallery"
            className="g2-grid min-h-0 flex-1"
          >
            <div className="screen-group">
              <SectionHeader
                eyebrow={t("projects.eyebrow")}
                title={t("projects.title")}
                accent
                align="left"
                className="mb-space-md"
              />

              <TabsList className="mb-space-md flex h-auto flex-wrap items-center justify-start gap-2 rounded-none bg-transparent p-0">
                {TABS.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="rounded-none px-space-md"
                  >
                    {t(`projects.filter.${tab.value}`)}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="grid auto-rows-fr gap-space-md md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {cards(firstRow)}
              </div>
            </div>

            {secondRow.length > 0 ? (
              <div className="screen-group">
                <div className="grid auto-rows-fr gap-space-md md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                  {cards(secondRow)}
                </div>
              </div>
            ) : null}
          </TabsContent>
        </Tabs>

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
