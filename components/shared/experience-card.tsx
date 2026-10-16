import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CONTRIBUTION_MARKERS = [
  "Key contributions:",
  "Principais contribuições:",
];

function parseDescription(description: string) {
  let markerIndex = -1;
  let markerLength = 0;

  for (const marker of CONTRIBUTION_MARKERS) {
    const index = description.indexOf(marker);
    if (index !== -1 && (markerIndex === -1 || index < markerIndex)) {
      markerIndex = index;
      markerLength = marker.length;
    }
  }

  if (markerIndex === -1) {
    return { summary: description.trim(), responsibilities: [] as string[] };
  }

  const summary = description.slice(0, markerIndex).trim();
  const responsibilities = description
    .slice(markerIndex + markerLength)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-"))
    .map((line) => line.replace(/^-\s*/, "").trim())
    .filter(Boolean);

  return { summary, responsibilities };
}

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  isCurrent?: boolean;
  currentLabel?: string;
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  isCurrent = false,
  currentLabel,
}: ExperienceCardProps) {
  const { summary, responsibilities } = parseDescription(description);

  return (
    <Card className="border border-border/80 bg-card shadow-sm">
      <CardHeader>
        <div className="flex items-start justify-between gap-space-md">
          <div>
            <CardTitle className="text-headline-sm text-foreground">
              {title}
            </CardTitle>
            <p className="mt-space-xs text-label-md text-primary">{company}</p>
          </div>
          {isCurrent && currentLabel && (
            <span className="inline-flex shrink-0 items-center rounded-full border border-primary/20 bg-primary/10 px-space-sm py-space-xs text-label-sm text-primary">
              {currentLabel}
            </span>
          )}
        </div>
        <p className="mt-space-sm text-label-sm text-muted-foreground lg:hidden">
          {period}
        </p>
      </CardHeader>

      <CardContent>
        {summary && (
          <p className="whitespace-pre-line text-body-sm text-muted-foreground">
            {summary}
          </p>
        )}

        {responsibilities.length > 0 && (
          <ul className="mt-space-md space-y-space-sm">
            {responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-space-sm text-body-sm text-muted-foreground"
              >
                <Check
                  size={16}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-primary"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <ul className="mt-space-lg flex flex-wrap gap-space-xs">
            {technologies.map((technologie) => (
              <li key={technologie}>
                <Badge
                  variant="outline"
                  className="rounded-full border-border/80 text-on-surface-variant"
                >
                  {technologie}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
