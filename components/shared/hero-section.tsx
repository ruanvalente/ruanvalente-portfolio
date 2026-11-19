import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { SITE_AUTHOR } from "@/lib/site";
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
    <section
      id="hero"
      data-enter="true"
      className="hero flex h-[100svh] flex-col justify-center pb-16 pt-28 lg:h-screen"
    >
      <div className="wrap">
        <div className="hero-text flex flex-col justify-center gap-space-lg">
          <div className="grid grid-cols-1 items-start gap-space-md md:grid-cols-2 md:gap-6 max-md:flex max-md:flex-col max-md:gap-0">
            <div className="max-md:contents">
              <p className="text-label-md text-muted-foreground max-md:order-1">
                {t("hero.hello")}
              </p>
              <h1 className="mt-space-sm text-hero-mobile text-primary md:text-display max-md:order-2">
                <span className="block text-foreground">{SITE_AUTHOR}</span>
                <span className="block">{t("hero.title")}</span>
              </h1>
              <p className="mt-space-md max-w-2xl text-body-md text-muted-foreground sm:hidden md:text-body-lg max-md:order-4">
                {t("hero.descriptionShort")}
              </p>
              <p className="mt-space-md hidden max-w-2xl text-body-md text-muted-foreground sm:block md:text-body-lg max-md:order-4">
                {t("hero.description")}
              </p>

              <div
                data-enter-follow
                className="mt-space-md flex flex-wrap gap-space-sm max-md:order-5"
              >
                <a
                  href="#projects"
                  className={buttonVariants({ variant: "default", size: "lg" })}
                >
                  {t("hero.cta.projects")}
                </a>
                <a
                  href="#contact"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  {t("hero.cta.contact")}
                </a>
              </div>

              <ul className="mt-space-md hidden flex-wrap items-center gap-x-space-md gap-y-space-sm sm:flex max-md:order-6">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex min-h-11 items-center gap-space-sm text-label-md text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon size={18} aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <figure
              data-ui="portrait"
              data-moment="picture-develops"
              data-moment-opts='{"look":"film","duration":1600}'
              className="relative aspect-square w-full overflow-hidden rounded-full border border-border/80 bg-surface-container max-md:order-3 max-md:mt-space-md"
            >
              <Image
                src="/profile-ruanvalente.jpg"
                alt="Retrato de Ruan Valente"
                fill
                className="!object-contain"
                priority
                quality={80}
                sizes="(max-width: 767px) 100vw, 640px"
              />
            </figure>
          </div>

          <dl className="hidden grid-cols-1 gap-space-md border-t border-border/60 pt-space-md sm:grid sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <dt className="order-2 text-label-sm text-muted-foreground">
                  {metric.label}
                </dt>
                <dd className="order-1 whitespace-pre-line text-body-md font-bold leading-snug text-foreground">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
