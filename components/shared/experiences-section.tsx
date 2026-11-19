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
  const items = EXPERIENCES.flatMap((experience, index) => {
    const translated = getTranslatedExperience(index, t);
    if (!translated) return [];

    return [
      {
        ...translated,
        technologies: experience.technologies,
        index,
      },
    ];
  });

  const rows = [items.slice(0, 2), items.slice(2)];

  return (
    <section
      id="experience"
      data-screen="free"
      className="section g2 scroll-mt-16 bg-surface-container"
    >
      <div className="wrap">
        {rows.map((row, groupIndex) => (
          <div key={groupIndex} className="screen-group">
            {groupIndex === 0 ? (
              <header className="mb-space-lg">
                <p className="text-label-sm uppercase tracking-wide text-primary">
                  {t("experience.eyebrow")}
                </p>
                <h2 className="mt-space-sm text-headline-lg-mobile font-bold md:text-headline-lg">
                  {t("experience.title")}
                </h2>
              </header>
            ) : null}

            <ol
              data-ui="career-path"
              className="grid gap-space-md md:grid-cols-2 md:gap-6"
            >
              {row.map((item) => (
                <li key={item.index} className="flex gap-space-md">
                  <span
                    aria-hidden="true"
                    className="mt-space-lg flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-surface-container"
                  >
                    <span className="size-1.5 rounded-full bg-primary" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <ExperienceCard
                      title={item.title}
                      company={item.company}
                      period={item.period}
                      description={item.description}
                      technologies={item.technologies}
                      isCurrent={item.index === 0}
                      currentLabel={t("experience.current")}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
