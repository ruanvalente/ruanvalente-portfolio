import { ComponentType } from "react";
import dynamic from "next/dynamic";

import { SectionLoader } from "@/components/shared/section-loader";

interface RoutesSection {
  Component: ComponentType;
  delay: number;
}

export const ROUTES_SECTION: RoutesSection[] = [
  {
    Component: dynamic(
      () =>
        import("@/components/shared/hero-section").then((m) => m.HeroSection),
      { loading: () => <SectionLoader text="Hero" height="h-96" /> }
    ),
    delay: 0,
  },
  {
    Component: dynamic(
      () =>
        import("@/components/shared/about-section").then((m) => m.AboutSection),
      { loading: () => <SectionLoader text="About" /> }
    ),
    delay: 0.1,
  },
  {
    Component: dynamic(
      () =>
        import("@/components/shared/skills-section").then(
          (m) => m.SkillsSection
        ),
      { loading: () => <SectionLoader text="Skills" /> }
    ),
    delay: 0.2,
  },
  {
    Component: dynamic(
      () =>
        import("@/components/shared/experiences-section").then(
          (m) => m.ExperiencesSection
        ),
      { loading: () => <SectionLoader text="Experience" /> }
    ),
    delay: 0.3,
  },
  {
    Component: dynamic(
      () =>
        import("@/components/shared/projects-section").then(
          (m) => m.ProjectsSection
        ),
      { loading: () => <SectionLoader text="Projects" /> }
    ),
    delay: 0.4,
  },
  {
    Component: dynamic(
      () =>
        import("@/components/shared/tech-challenge-section").then(
          (m) => m.TechChallengeSection
        ),
      { loading: () => <SectionLoader text="Challenges" /> }
    ),
    delay: 0.5,
  },
  {
    Component: dynamic(
      () =>
        import("@/components/shared/contact-section").then(
          (m) => m.ContactSection
        ),
      { loading: () => <SectionLoader text="Contact" /> }
    ),
    delay: 0.6,
  },
];
