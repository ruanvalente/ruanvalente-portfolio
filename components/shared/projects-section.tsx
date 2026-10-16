"use client";

import { ExternalLink } from "lucide-react";
import { ProjectCard } from "./project-card";
import { SectionHeader } from "./section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { PROJECTS, TABS } from "@/constants/config";
import { useLanguage } from "@/context/language-context";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-space-xl md:py-space-2xl">
      <div className="container px-gutter-mobile md:px-gutter">
        <SectionHeader
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          accent
        />

        <Tabs defaultValue="all" className="mx-auto max-w-4xl">
          <TabsList className="mb-space-lg flex h-auto flex-wrap items-center justify-center gap-space-sm rounded-none bg-transparent p-0">
            {TABS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-full border border-border/80 bg-transparent px-space-md py-space-xs text-label-md text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
              >
                {t(`projects.filter.${tab.value}`)}
              </TabsTrigger>
            ))}
          </TabsList>

          {TABS.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="grid gap-space-md md:grid-cols-2 md:gap-space-lg lg:grid-cols-3"
            >
              {PROJECTS.filter((project) =>
                project.category.includes(tab.value)
              ).map((project, idx) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={t(project.descriptionKey)}
                  tags={project.tags}
                  link={project.link}
                  category={t(
                    `projects.filter.${
                      project.category.find((value) => value !== "all") ??
                      "other"
                    }`
                  )}
                  featured={"featured" in project && project.featured}
                  index={idx}
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-space-lg text-center md:mt-space-xl">
          <a
            href="https://github.com/ruanvalente"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-sm px-1 text-primary transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {t("projects.viewmore")}
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
