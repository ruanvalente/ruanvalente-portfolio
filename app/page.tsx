import { cookies } from "next/headers";

import { HeroSection } from "@/components/shared/hero-section";
import { AboutSection } from "@/components/shared/about-section";
import { SkillsSection } from "@/components/shared/skills-section";
import { ExperiencesSection } from "@/components/shared/experiences-section";
import { ProjectsSection } from "@/components/shared/projects-section";
import { RecentProjectsSection } from "@/components/shared/recent-projects-section";
import { TechChallengeSection } from "@/components/shared/tech-challenge-section";
import { ContactSection } from "@/components/shared/contact-section";
import { createTranslator, getLanguage, LANGUAGE_COOKIE } from "@/lib/i18n";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = getLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);
  const t = createTranslator(lang);

  return (
    <main id="main" className="bg-background text-foreground">
      <HeroSection t={t} />
      <AboutSection t={t} />
      <SkillsSection t={t} />
      <ExperiencesSection t={t} />
      <ProjectsSection />
      <RecentProjectsSection />
      <TechChallengeSection t={t} />
      <ContactSection t={t} />
    </main>
  );
}
