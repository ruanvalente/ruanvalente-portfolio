import { Boxes, Layout, Sparkles, Wrench } from "lucide-react";
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
      key: "skills.tools",
      icon: Wrench,
      skills: ["Git", "Vite", "Webpack", "Jest", "Testing Library", "Docker"],
    },
    {
      key: "skills.other",
      icon: Sparkles,
      skills: [
        "Design Systems",
        "Performance",
        "SEO",
        "UI/UX",
        "Clean Code",
        "Agile (Scrum/Kanban)",
      ],
    },
  ];

  return (
    <section id="skills" className="py-space-xl md:py-space-2xl">
      <div className="container px-gutter-mobile md:px-gutter">
        <SectionHeader
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title")}
        />

        <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 md:grid-cols-4 md:gap-space-lg">
          {categories.map(({ key, icon, skills }) => (
            <SkillCard key={key} title={t(key)} icon={icon} skills={skills} />
          ))}
        </div>

        <div className="mt-space-xl md:mt-space-2xl">
          <h3 className="mb-space-lg text-center text-label-sm uppercase tracking-wide text-muted-foreground">
            {t("skills.stack")}
          </h3>
          <div className="flex flex-wrap justify-center gap-space-sm md:gap-space-md">
            {TECH_BADGE.map((badge) => (
              <TechBadge key={badge.name} name={badge.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
