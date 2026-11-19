import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "./section-header";
import type { Translator } from "@/lib/i18n";

type ContactChannel = {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
};

export function ContactSection({ t }: { t: Translator }) {
  const channels: ContactChannel[] = [
    {
      label: t("contact.email"),
      value: "contato.ruanvalente@gmail.com",
      href: "mailto:contato.ruanvalente@gmail.com",
      icon: <Mail size={24} aria-hidden="true" />,
    },
    {
      label: t("contact.linkedin"),
      value: "linkedin.com/in/ruan-valente",
      href: "https://www.linkedin.com/in/ruan-valente",
      icon: <Linkedin size={24} aria-hidden="true" />,
      external: true,
    },
    {
      label: t("contact.github"),
      value: "github.com/ruanvalente",
      href: "https://github.com/ruanvalente",
      icon: <Github size={24} aria-hidden="true" />,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section scroll-mt-16">
      <div className="wrap">
        <SectionHeader
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          accent
          align="left"
          subtitle={`${t("contact.subtitle")} ${t("contact.subtitle2")}`}
        />

        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="grid gap-space-sm">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex min-h-14 items-center gap-space-md border-b border-border/60 transition-colors hover:border-primary"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center text-primary">
                    {channel.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-label-md font-semibold text-foreground">
                      {channel.label}
                    </span>
                    <span className="block w-full truncate text-body-sm text-muted-foreground transition-colors group-hover:text-primary">
                      {channel.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-space-md">
              <a
                href="mailto:contato.ruanvalente@gmail.com"
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                <Mail aria-hidden="true" />
                {t("contact.form.send")}
              </a>
            </div>
          </div>

          <div
            data-ui="contact-card"
            className="flex min-h-[20rem] flex-col justify-between rounded-md border border-border/80 bg-surface-container-low p-space-lg md:min-h-[24rem]"
          >
            <div className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
              <MapPin size={24} aria-hidden="true" />
            </div>
            <div>
              <p className="text-label-md font-semibold text-foreground">
                {t("about.company.location")}
              </p>
              <p className="mt-space-sm max-w-sm text-body-md text-muted-foreground">
                {t("contact.subtitle2")}
              </p>
            </div>
            <div className="mt-space-md border-t border-border/60 pt-space-md font-mono text-label-sm text-primary">
              frontend / design systems / accessibility
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
