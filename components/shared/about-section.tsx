import { BookOpen, Briefcase, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "./section-header";
import type { Translator } from "@/lib/i18n";

const FOCUS_ITEMS = [
  "about.focus.item1",
  "about.focus.item2",
  "about.focus.item3",
  "about.focus.item4",
  "about.focus.item5",
  "about.focus.item6",
] as const;

export function AboutSection({ t }: { t: Translator }) {
  const facts = [
    { icon: MapPin, label: t("about.company.location") },
    { icon: Briefcase, label: t("about.company.position") },
    { icon: BookOpen, label: t("about.education.title") },
  ];

  return (
    <section
      id="about"
      className="section scroll-mt-16 bg-surface-container py-20 lg:py-24"
    >
      <div className="wrap">
        <SectionHeader
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          accent
          align="left"
        />

        <div className="grid gap-space-lg md:grid-cols-2">
          <Card className="border border-border/80 bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="text-headline-sm text-primary">
                {t("about.whoiam.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-body-md text-muted-foreground">
                {t("about.whoiam.p1")}
              </p>
              <p className="mt-space-sm text-body-md text-muted-foreground md:mt-space-md">
                {t("about.whoiam.p2")}
              </p>
              <ul className="mt-space-sm space-y-space-sm border-t border-border/60 pt-space-sm md:mt-space-lg md:pt-space-lg">
                {facts.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-start gap-space-sm text-body-sm text-muted-foreground"
                  >
                    <Icon
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div
            data-ui="work-profile"
            className="flex min-h-[22rem] flex-col rounded-lg border border-border/80 bg-card p-space-lg shadow-sm md:min-h-[32rem]"
          >
            <div className="flex items-center gap-space-sm border-b border-border/60 pb-space-md">
              <span className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Briefcase size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="text-label-md font-semibold text-foreground">
                  {t("about.focus.title")}
                </p>
                <p className="text-label-sm text-muted-foreground">
                  {t("about.company.position")}
                </p>
              </div>
            </div>
            <ul className="mt-space-md flex flex-1 flex-col justify-between gap-space-sm">
              {FOCUS_ITEMS.map((key, index) => (
                <li
                  key={key}
                  className="flex items-start gap-space-md text-body-md text-muted-foreground"
                >
                  <span className="font-mono text-label-sm text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
