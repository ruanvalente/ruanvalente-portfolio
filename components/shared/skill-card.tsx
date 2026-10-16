import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

export function SkillCard({
  title,
  skills,
  icon: Icon,
}: {
  title: string;
  skills: string[];
  icon?: LucideIcon;
}) {
  return (
    <Card className="h-full border border-border/80 bg-card shadow-sm transition-shadow hover:shadow-[0_10px_30px_-10px_rgba(24,24,27,0.05),0_4px_6px_-2px_rgba(24,24,27,0.02)]">
      <CardHeader>
        {Icon ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-muted text-primary">
            <Icon size={20} aria-hidden="true" />
          </span>
        ) : null}
        <CardTitle className="text-label-md font-semibold text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-space-xs text-body-sm text-muted-foreground">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center gap-space-sm">
              <span
                aria-hidden="true"
                className="h-1 w-1 shrink-0 rounded-full bg-primary/50"
              />
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
