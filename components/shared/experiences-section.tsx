import { EXPERIENCES } from "@/constants/techbadge";
import { ExperienceCard } from "./experience-card";

export function ExperiencesSection() {
  return (
    <section id="experience" className="bg-secondary dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.isCurrent ? "Current" : experience.period}
              description={experience.description}
              technologies={experience.tecnologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
