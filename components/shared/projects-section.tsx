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
              <TabsTrigger
                className="data-[state=active]:animate-in data-[state=active]:fade-in-50 duration-700 ease-in-out"
                key={index}
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {TABS.map((tab, index) => (
            <TabsContent
              key={index}
              value={tab.value}
              className="grid md:grid-cols-2 gap-6 cursor-pointer data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 duration-700 ease-in-out"
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
            className="inline-flex items-center text-amber-600 dark:text-yellow-400 hover:underline"
          >
            View more on GitHub <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
