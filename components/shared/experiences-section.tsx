import { EXPERIENCES } from "@/constants/config";
import { ExperienceCard } from "./experience-card";
import type { Translator } from "@/lib/i18n";

function getTranslatedExperience(index: number, t: Translator) {
  const fields = ["title", "company", "period", "description"];
  const translations = fields.map((field) =>
    t(`experience.job${index}.${field}`)
  );

  const isValid = translations.every(
    (value, i) => value !== `experience.job${index}.${fields[i]}`
  );

  if (!isValid) return null;

  const [title, company, period, description] = translations;

  return { title, company, period, description };
}

export function ExperiencesSection({ t }: { t: Translator }) {
  return (
    <section id="experience" className="bg-secondary dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t("experience.title")}
        </h2>

        <div className="max-w-3xl mx-auto">
          {EXPERIENCES.map((experience, index) => {
            const translated = getTranslatedExperience(index, t);
            if (!translated) return null;

            return (
              <ExperienceCard
                key={index}
                title={translated.title}
                company={translated.company}
                period={translated.period}
                description={translated.description}
                technologies={experience.technologies}
                isLast={index === EXPERIENCES.length - 1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
