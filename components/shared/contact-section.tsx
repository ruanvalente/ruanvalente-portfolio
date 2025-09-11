"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center whitespace-pre-line">
          {t("contact.title")}
        </h2>

        <div className="max-w-3xl mx-auto bg-card rounded-lg p-8 shadow-lg border">
          <p className="text-center text-muted-foreground mb-8">
            {t("contact.subtitle")}
            <br />
            {t("contact.subtitle2")}
          </p>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-6 md:justify-between">

            <div className="flex items-center gap-4 min-w-[200px] flex-1">
              <div className="bg-amber-600 dark:bg-yellow-400 text-white dark:text-slate-900 p-3 rounded-full">
                <Mail size={24} />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium">{t("contact.email")}</h3>
                <a
                  href="mailto:contato.ruanvalente@gmail.com"
                  className="text-sm md:text-base text-muted-foreground hover:text-amber-600 dark:hover:text-yellow-400 break-words"
                >
                  contato.ruanvalente@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 min-w-[200px] flex-1">
              <div className="bg-amber-600 dark:bg-yellow-400 text-white dark:text-slate-900 p-3 rounded-full">
                <Linkedin size={24} />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium">{t("contact.linkedin")}</h3>
                <a
                  href="https://www.linkedin.com/in/ruan-valente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-muted-foreground hover:text-amber-600 dark:hover:text-yellow-400 break-words"
                >
                  linkedin.com/in/ruan-valente
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 min-w-[200px] flex-1">
              <div className="bg-amber-600 dark:bg-yellow-400 text-white dark:text-slate-900 p-3 rounded-full">
                <Github size={24} />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium">{t("contact.github")}</h3>
                <a
                  href="https://github.com/ruanvalente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-muted-foreground hover:text-amber-600 dark:hover:text-yellow-400 break-words"
                >
                  github.com/ruanvalente
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
