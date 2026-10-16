import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { SectionHeader } from "./section-header";
import { CHALLENGES, PROJECTS } from "@/constants/config";
import type { Translator } from "@/lib/i18n";

export function TechChallengeSection({ t }: { t: Translator }) {
  return (
    <section
      id="challenges"
      className="bg-surface-container py-space-xl md:py-space-2xl"
    >
      <div className="container px-gutter-mobile md:px-gutter">
        <SectionHeader
          eyebrow={t("challenges.eyebrow")}
          title={t("challenges.title")}
          accent
        />

        <div className="mx-auto grid max-w-3xl gap-space-md md:grid-cols-2">
          {CHALLENGES.map((challenge) => {
            const description = t(challenge.descriptionKey);
            const category = /backend/i.test(description)
              ? t("challenges.category.backend")
              : t("challenges.category.frontend");
            const stack =
              PROJECTS.find((project) => project.link === challenge.link)
                ?.tags ?? [];

            return (
              <Card
                key={challenge.link}
                className="flex flex-col border border-border/80 bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-[0_10px_30px_-10px_rgba(24,24,27,0.05),0_4px_6px_-2px_rgba(24,24,27,0.02)]"
              >
                <CardHeader>
                  <Badge
                    variant="outline"
                    className="w-fit rounded-full border-border/80 text-on-surface-variant"
                  >
                    {category}
                  </Badge>
                  <CardTitle className="mt-space-sm text-headline-sm font-semibold tracking-tight text-primary">
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-body-sm text-muted-foreground">
                    {description}
                  </p>
                  {stack.length > 0 ? (
                    <div className="mt-space-md flex flex-wrap gap-space-xs">
                      {stack.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="rounded-full border-border/80 text-on-surface-variant"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
                <CardFooter>
                  <a
                    href={challenge.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-sm font-medium text-primary transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {t("challenges.view")}
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
