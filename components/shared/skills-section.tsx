"use client";

import { TECH_BADGE } from "@/constants/techbadge";
import { TechBadge } from "./techbadge";
import { SkillCard } from "./skill-card";

import { useLanguage } from "@/context/language-context";

export function SkillsSection() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t("skills.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard
            title={t("skills.frontend")}
            skills={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "Responsive Design",
            ]}
          />
          <SkillCard
            title={t("skills.frameworks")}
            skills={["React", "Next.js", "Vue.js", "Angular", "Quasar"]}
          />
          <SkillCard
            title={t("skills.tools")}
            skills={["Git", "Webpack", "Vite", "Jest", "Testing Library"]}
          />
          <SkillCard
            title={t("skills.other")}
            skills={[
              "Accessibility",
              "Performance",
              "SEO",
              "UI/UX",
              "Design Systems",
            ]}
          />
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            {t("skills.stack")}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_BADGE.map((badge, index) => (
              <TechBadge key={index} name={badge.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
