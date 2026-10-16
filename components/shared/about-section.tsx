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
      className="bg-surface-container py-space-xl md:py-space-2xl"
    >
      <div className="container px-gutter-mobile md:px-gutter">
        <SectionHeader
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          accent
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
              <p className="mt-space-md text-body-md text-muted-foreground">
                {t("about.whoiam.p2")}
              </p>
              <ul className="mt-space-lg space-y-space-sm border-t border-border/60 pt-space-lg">
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

          <Card className="border border-border/80 bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="text-headline-sm text-primary">
                {t("about.focus.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-space-md">
                {FOCUS_ITEMS.map((key) => (
                  <li
                    key={key}
                    className="flex items-start gap-space-sm text-body-md text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
