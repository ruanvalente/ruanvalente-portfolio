import { cookies } from "next/headers";

import { HeroSection } from "@/components/shared/hero-section";
import { AboutSection } from "@/components/shared/about-section";
import { SkillsSection } from "@/components/shared/skills-section";
import { ExperiencesSection } from "@/components/shared/experiences-section";
import { TestimonialsSection } from "@/components/shared/testimonials-section";
import { ProjectsSection } from "@/components/shared/projects-section";
import { TechChallengeSection } from "@/components/shared/tech-challenge-section";
import { ContactSection } from "@/components/shared/contact-section";
import { createTranslator, getLanguage, LANGUAGE_COOKIE } from "@/lib/i18n";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = getLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);
  const t = createTranslator(lang);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary dark:from-slate-950 dark:to-slate-900 text-foreground">
      <HeroSection t={t} />
      <AboutSection t={t} />
      <SkillsSection t={t} />
      <ExperiencesSection t={t} />
      <TestimonialsSection />
      <ProjectsSection />
      <TechChallengeSection t={t} />
      <ContactSection t={t} />
    </div>
  );
}
