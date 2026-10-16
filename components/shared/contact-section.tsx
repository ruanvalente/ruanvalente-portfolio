import { Github, Linkedin, Mail } from "lucide-react";
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
      icon: <Mail size={22} aria-hidden="true" />,
    },
    {
      label: t("contact.linkedin"),
      value: "linkedin.com/in/ruan-valente",
      href: "https://www.linkedin.com/in/ruan-valente",
      icon: <Linkedin size={22} aria-hidden="true" />,
      external: true,
    },
    {
      label: t("contact.github"),
      value: "github.com/ruanvalente",
      href: "https://github.com/ruanvalente",
      icon: <Github size={22} aria-hidden="true" />,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-space-xl md:py-space-2xl">
      <div className="container px-gutter-mobile md:px-gutter">
        <SectionHeader
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          accent
          subtitle={`${t("contact.subtitle")} ${t("contact.subtitle2")}`}
        />

        <div className="mx-auto grid max-w-4xl gap-space-md sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              {...(channel.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex flex-col items-start gap-space-sm rounded-md border border-border/80 bg-card p-space-lg shadow-sm transition-all hover:border-primary/30 hover:shadow-[0_10px_30px_-10px_rgba(24,24,27,0.05),0_4px_6px_-2px_rgba(24,24,27,0.02)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.99]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-muted text-primary">
                {channel.icon}
              </span>
              <span className="block text-label-md font-semibold text-foreground">
                {channel.label}
              </span>
              <span className="block w-full truncate text-body-sm text-muted-foreground transition-colors group-hover:text-primary">
                {channel.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
