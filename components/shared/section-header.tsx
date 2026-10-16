import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  accent?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  accent = false,
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <header className={cn("mb-space-xl", centered && "text-center", className)}>
      {eyebrow ? (
        <p className="text-label-sm uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-headline-lg-mobile font-bold md:text-headline-lg",
          eyebrow && "mt-space-sm"
        )}
      >
        {title}
      </h2>
      {accent ? (
        <span
          aria-hidden="true"
          className={cn(
            "mt-space-md block h-1 w-12 rounded-full bg-primary",
            centered && "mx-auto"
          )}
        />
      ) : null}
      {subtitle ? (
        <p
          className={cn(
            "mt-space-md text-body-md text-muted-foreground md:text-body-lg",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
