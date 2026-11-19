import {
  Boxes,
  BrainCircuit,
  Layout,
  Palette,
  Sparkles,
  Wrench,
} from "lucide-react";
import { TECH_BADGE } from "@/constants/config";
import { TechBadge } from "./techbadge";
import { SkillCard } from "./skill-card";
import { SectionHeader } from "./section-header";
import type { Translator } from "@/lib/i18n";

export function SkillsSection({ t }: { t: Translator }) {
  const categories = [
    {
      key: "skills.frontend",
      icon: Layout,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "Responsive Design",
        "Accessibility",
      ],
    },
    {
      key: "skills.frameworks",
      icon: Boxes,
      skills: ["React", "Next.js", "Vue.js", "Angular", "Quasar"],
    },
    {
      key: "skills.ai",
      icon: BrainCircuit,
      skills: [
        "LLM Integration",
        "AI Agents",
        "Prompt Engineering",
        "RAG",
        "MCP",
        "Ollama",
      ],
    },
    {
      key: "skills.design",
      icon: Palette,
      skills: [
        "UI/UX",
        "Design Systems",
        "Design Tokens",
        "Component Architecture",
        "Product Thinking",
        "User-Centered Development",
        "Figma",
      ],
    },
    {
      key: "skills.tools",
      icon: Wrench,
      skills: ["Git", "Vite", "Webpack", "Jest", "Testing Library", "Docker"],
    },
    {
      key: "skills.other",
      icon: Sparkles,
      skills: ["Performance", "SEO", "Clean Code", "Agile (Scrum/Kanban)"],
    },
  ];

  return (
    <section
      id="skills"
      data-screen="free"
      className="section scroll-mt-16 py-20 lg:py-24"
    >
      <div className="wrap flex flex-col">
        <SectionHeader
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title")}
          align="left"
          className="mb-space-lg"
        />

        <div
          data-ui="skills-matrix"
          className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map(({ key, icon, skills }) => (
            <SkillCard key={key} title={t(key)} icon={icon} skills={skills} />
          ))}
        </div>

        <div className="mt-space-md">
          <h3 className="mb-space-md text-headline-sm text-muted-foreground">
            {t("skills.stack")}
          </h3>
          <div className="flex flex-wrap gap-space-sm md:gap-space-md">
            {TECH_BADGE.map((badge) => (
              <TechBadge key={badge.name} name={badge.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
