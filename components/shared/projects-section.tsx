import { PROJECTS, TABS } from "@/constants/techbadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ProjectCard } from "./project-card";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <Tabs defaultValue="all" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {TABS.map((tab, index) => (
              <TabsTrigger key={index} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {TABS.map((tab, index) => (
            <TabsContent
              key={index}
              value={tab.value}
              className="grid md:grid-cols-2 gap-6 cursor-pointer"
            >
              {PROJECTS.filter((project) =>
                project.category.includes(tab.value)
              ).map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-10">
          <a
            href="https://github.com/ruanvalente"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-yellow-400 hover:underline"
          >
            View more on GitHub <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
