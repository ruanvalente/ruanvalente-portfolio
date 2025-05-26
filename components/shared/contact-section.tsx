"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
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

          <div className="md:grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-amber-600 dark:bg-yellow-400 text-white dark:text-slate-900 p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium"> {t("contact.email")}</h3>
                  <a
                    href="mailto:contato.ruanvalente@gmail.com"
                    className="text-sm md:text-base text-muted-foreground hover:text-amber-600 dark:hover:text-yellow-400"
                  >
                    contato.ruanvalente@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-amber-600 dark:bg-yellow-400 text-white dark:text-slate-900 p-3 rounded-full">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="font-medium"> {t("contact.linkedin")}</h3>
                  <a
                    href="https://www.linkedin.com/in/ruan-valente"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-muted-foreground hover:text-amber-600 dark:hover:text-yellow-400"
                  >
                    linkedin.com/in/ruan-valente
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-amber-600 dark:bg-yellow-400 text-white dark:text-slate-900 p-3 rounded-full">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="font-medium">{t("contact.github")}</h3>
                  <a
                    href="https://github.com/ruanvalente"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-muted-foreground hover:text-amber-600 dark:hover:text-yellow-400"
                  >
                    github.com/ruanvalente
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 mt-4">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-md bg-background border border-input focus:border-amber-600 dark:focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-md bg-background border border-input focus:border-amber-600 dark:focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 rounded-md bg-background border border-input focus:border-amber-600 dark:focus:border-yellow-400 focus:outline-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-amber-600 text-white hover:bg-amber-700 dark:bg-yellow-400 dark:text-slate-900 dark:hover:bg-yellow-500">
                  {t("contact.form.send")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
