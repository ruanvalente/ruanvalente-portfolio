import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import Image from "next/image";
import type { Translator } from "@/lib/i18n";

const SOCIAL_LINKS: {
  label: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
}[] = [
  {
    label: "GitHub",
    href: "https://github.com/ruanvalente",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ruan-valente",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:contato.ruanvalente@gmail.com",
    icon: Mail,
    external: false,
  },
];

export function HeroSection({ t }: { t: Translator }) {
  const metrics = [
    {
      value: t("hero.metrics.years.value"),
      label: t("hero.metrics.years.label"),
    },
    {
      value: t("hero.metrics.seniority.value"),
      label: t("hero.metrics.seniority.label"),
    },
    {
      value: t("hero.metrics.specialty.value"),
      label: t("hero.metrics.specialty.label"),
    },
  ];

  return (
    <section className="container px-gutter-mobile py-space-xl md:px-gutter md:py-space-2xl">
      <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-x-space-2xl">
        {/* Status / availability */}
        <div className="order-1 mb-space-md md:col-start-1 md:row-start-1">
          <span className="inline-flex items-center gap-space-sm rounded-full border border-border/80 bg-card px-space-md py-space-xs text-label-sm text-on-surface-variant shadow-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-primary"
            />
            {t("hero.status")}
          </span>
        </div>

        {/* Greeting */}
        <p className="order-2 text-label-md text-muted-foreground md:col-start-1 md:row-start-2">
          {t("hero.hello")}
        </p>

        {/* Name */}
        <h1 className="order-3 mt-space-sm text-headline-lg text-primary md:col-start-1 md:row-start-3 md:text-display">
          Ruan Valente
        </h1>

        {/* Role */}
        <p className="order-4 mt-space-sm text-headline-sm text-foreground md:col-start-1 md:row-start-4 md:text-headline-md">
          {t("hero.title")}
        </p>

        {/* Avatar + floating metadata */}
        <div className="order-5 my-space-lg flex justify-center md:col-start-2 md:row-span-8 md:row-start-1 md:my-0 md:self-center">
          <div className="relative">
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-primary bg-surface-container shadow-[0_10px_30px_-10px_rgba(24,24,27,0.15)] sm:h-64 sm:w-64 md:h-80 md:w-80">
              <Image
                src="https://avatars.githubusercontent.com/u/6674232?s=400&u=62eb573c8af66e882bbf633187e0f247714d30ec&v=4"
                alt="Ruan Valente"
                fill
                className="object-cover"
                priority
                quality={80}
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 320px"
              />
            </div>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 top-8 hidden items-center gap-space-sm rounded-md border border-border/80 bg-card px-space-md py-space-sm text-label-sm text-on-surface-variant shadow-[0_4px_12px_-4px_rgba(24,24,27,0.12)] sm:inline-flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t("hero.badge.role")}
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 bottom-10 hidden items-center gap-space-sm rounded-md border border-border/80 bg-card px-space-md py-space-sm text-label-sm text-on-surface-variant shadow-[0_4px_12px_-4px_rgba(24,24,27,0.12)] sm:inline-flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t("hero.badge.stack")}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="order-6 mt-space-lg text-body-md text-muted-foreground md:col-start-1 md:row-start-5 md:text-body-lg">
          {t("hero.description")}
        </p>

        {/* CTAs */}
        <div className="order-7 mt-space-lg flex flex-wrap gap-space-sm md:col-start-1 md:row-start-6 md:gap-space-md">
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded bg-primary px-5 text-sm font-medium text-primary-foreground ring-offset-background transition-transform hover:-translate-y-px hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {t("hero.cta.projects")}
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded border border-border bg-background px-5 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {t("hero.cta.contact")}
          </a>
        </div>

        {/* Social */}
        <div className="order-8 mt-space-lg md:col-start-1 md:row-start-7">
          <p className="mb-space-sm text-label-sm uppercase tracking-wide text-muted-foreground my-4">
            {t("hero.social")}
          </p>
          <ul className="flex flex-wrap mt-4 items-center gap-space-lg">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-space-sm rounded-sm text-label-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        <dl className="order-9 mt-space-xl grid grid-cols-1 gap-space-md border-t border-border/60 pt-space-lg sm:grid-cols-3 md:col-start-1 md:row-start-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <dt className="order-2 text-label-sm text-muted-foreground">
                {metric.label}
              </dt>
              <dd className="order-1 whitespace-pre-line text-body-sm font-bold leading-snug text-foreground sm:text-body-md sm:font-bold">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
