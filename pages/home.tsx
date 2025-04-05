import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroSection = dynamic(() =>
  import("@/components/shared/hero-section").then((m) => m.HeroSection)
);
const AboutSection = dynamic(() =>
  import("@/components/shared/about-section").then((m) => m.AboutSection)
);
const SkillsSection = dynamic(() =>
  import("@/components/shared/skills-section").then((m) => m.SkillsSection)
);
const ExperiencesSection = dynamic(() =>
  import("@/components/shared/experiences-section").then(
    (m) => m.ExperiencesSection
  )
);
const ProjectsSection = dynamic(() =>
  import("@/components/shared/projects-section").then((m) => m.ProjectsSection)
);
const TechChallengeSection = dynamic(() =>
  import("@/components/shared/tech-challenge-section").then(
    (m) => m.TechChallengeSection
  )
);
const ContactSection = dynamic(() =>
  import("@/components/shared/contact-section").then((m) => m.ContactSection)
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary dark:from-slate-950 dark:to-slate-900 text-foreground">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperiencesSection />
        <ProjectsSection />
        <TechChallengeSection />
        <ContactSection />
      </Suspense>
    </div>
  );
}
