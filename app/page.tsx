import { cookies } from "next/headers";

import { HeroSection } from "@/components/shared/hero-section";
import { AboutSection } from "@/components/shared/about-section";
import { SkillsSection } from "@/components/shared/skills-section";
import { ExperiencesSection } from "@/components/shared/experiences-section";
import { TestimonialsSection } from "@/components/shared/testimonials-section";
import { ProjectsSection } from "@/components/shared/projects-section";
import { TechChallengeSection } from "@/components/shared/tech-challenge-section";
import { ContactSection } from "@/components/shared/contact-section";
import { SectionTransition } from "@/components/shared/section-transition";
import { createTranslator, getLanguage, LANGUAGE_COOKIE } from "@/lib/i18n";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = getLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);
  const t = createTranslator(lang);

  return (
    <div className="bg-background text-foreground">
      <SectionTransition>
        <HeroSection t={t} />
      </SectionTransition>
      <SectionTransition>
        <AboutSection t={t} />
      </SectionTransition>
      <SectionTransition>
        <SkillsSection t={t} />
      </SectionTransition>
      <SectionTransition>
        <ExperiencesSection t={t} />
      </SectionTransition>
      <SectionTransition>
        <TestimonialsSection />
      </SectionTransition>
      <SectionTransition>
        <ProjectsSection />
      </SectionTransition>
      <SectionTransition>
        <TechChallengeSection t={t} />
      </SectionTransition>
      <SectionTransition>
        <ContactSection t={t} />
      </SectionTransition>
    </div>
  );
}
