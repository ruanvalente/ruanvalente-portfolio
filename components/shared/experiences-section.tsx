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

  return (
    <section
      id="experience"
      className="bg-surface-container py-space-xl md:py-space-2xl"
    >
      <div className="container px-gutter-mobile md:px-gutter">
        <header className="mb-space-xl text-center">
          <p className="text-label-sm uppercase tracking-wide text-primary">
            {t("experience.eyebrow")}
          </p>
          <h2 className="mt-space-sm text-headline-lg-mobile font-bold md:text-headline-lg">
            {t("experience.title")}
          </h2>
        </header>

        <ol className="mx-auto max-w-5xl">
          {items.map((item, position) => {
            const isLast = position === items.length - 1;

            return (
              <li
                key={item.index}
                className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-space-md pb-space-xl last:pb-0 lg:grid-cols-[180px_2.5rem_minmax(0,1fr)] lg:gap-x-space-lg"
              >
                {/* Metadata (desktop only) */}
                <div className="hidden pt-space-lg text-right lg:col-start-1 lg:block">
                  <p className="text-label-md font-semibold text-foreground">
                    {item.period}
                  </p>
                  <p className="mt-space-xs text-label-sm text-muted-foreground">
                    {item.title}
                  </p>
                  <p className="text-label-sm text-muted-foreground">
                    {item.company}
                  </p>
                </div>

                {/* Timeline node + spine */}
                <div className="relative flex justify-center lg:col-start-2">
                  {position > 0 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-0 h-10 w-[1.5px] -translate-x-1/2 bg-border"
                    />
                  )}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-1/2 top-10 w-[1.5px] -translate-x-1/2 bg-border"
                    />
                  )}
                  <span className="relative z-10 mt-space-lg block h-4 w-4 rounded-full border-2 border-primary bg-surface-container">
                    <span className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                </div>

                {/* Experience card */}
                <div className="lg:col-start-3">
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
            );
          })}
        </ol>
      </div>
    </section>
  );
}
