"use client";

import { useLanguage } from "@/context/language-context";
import { Briefcase, MapPin } from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-secondary dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t("about.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-600 dark:text-yellow-400">
              {t("about.whoiam.title")}
            </h3>
            <p className="text-muted-foreground mb-6">{t("about.whoiam.p1")}</p>
            <p className="text-muted-foreground mb-6">{t("about.whoiam.p2")}</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MapPin
                  size={18}
                  className="lucide lucide-map-pin text-amber-600 dark:text-yellow-400"
                />
                <span>Belém-PA, Brazil</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase
                  size={18}
                  className="lucide lucide-map-pin text-amber-600 dark:text-yellow-400"
                />
                <span>Frontend Engineer at Compass UOL</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-600 dark:text-yellow-400">
              {t("about.focus.title")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <div className="min-w-5 mt-1">✅</div>
                <div>{t("about.focus.item1")}</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-5 mt-1">✅</div>
                <div> {t("about.focus.item2")}</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-5 mt-1">✅</div>
                <div>{t("about.focus.item3")}</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-5 mt-1">✅</div>
                <div>{t("about.focus.item4")}</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-5 mt-1">✅</div>
                <div>{t("about.focus.item5")}</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-5 mt-1">📚</div>
                <div>{t("about.focus.item6")}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
