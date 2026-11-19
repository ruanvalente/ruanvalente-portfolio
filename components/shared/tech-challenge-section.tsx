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
import { CHALLENGES } from "@/constants/config";
import { ProjectVisual } from "./project-visual";
import type { Translator } from "@/lib/i18n";

export function TechChallengeSection({ t }: { t: Translator }) {
  return (
    <section
      id="challenges"
      data-screen="free"
      className="section scroll-mt-16 bg-surface-container py-20 lg:py-24"
    >
      <div className="wrap">
        <SectionHeader
          eyebrow={t("challenges.eyebrow")}
          title={t("challenges.title")}
          accent
          align="left"
        />

        <div
          data-ui="challenge-gallery"
          className="grid gap-space-md md:grid-cols-2 lg:grid-cols-4"
        >
          {CHALLENGES.map((challenge) => {
            const description = t(challenge.descriptionKey);
            const category = t(`challenges.category.${challenge.category}`);
            const stack = challenge.tags;

            return (
              <Card
                key={challenge.link}
                className="flex h-full flex-col overflow-hidden border border-border/80 bg-card shadow-sm"
              >
                <ProjectVisual tags={stack} />
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
                    aria-label={`${challenge.title} — ${t("challenges.view")}`}
                    className="inline-flex min-h-11 items-center gap-1 rounded-sm font-medium text-primary transition-colors hover:underline"
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
