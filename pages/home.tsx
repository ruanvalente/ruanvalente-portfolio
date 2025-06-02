"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/shared/animated-section";
import { AnimatedLoader } from "@/components/shared/animated-loader";

const HeroSection = dynamic(
  () => import("@/components/shared/hero-section").then((m) => m.HeroSection),
  {
    loading: () => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-96 flex items-center justify-center"
      >
        <div className="animate-pulse text-muted-foreground">
          Loading Hero...
        </div>
      </motion.div>
    ),
  }
);

const AboutSection = dynamic(
  () => import("@/components/shared/about-section").then((m) => m.AboutSection),
  {
    loading: () => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-64 flex items-center justify-center"
      >
        <div className="animate-pulse text-muted-foreground">
          Loading About...
        </div>
      </motion.div>
    ),
  }
);

const SkillsSection = dynamic(
  () =>
    import("@/components/shared/skills-section").then((m) => m.SkillsSection),
  {
    loading: () => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-64 flex items-center justify-center"
      >
        <div className="animate-pulse text-muted-foreground">
          Loading Skills...
        </div>
      </motion.div>
    ),
  }
);

const ExperiencesSection = dynamic(
  () =>
    import("@/components/shared/experiences-section").then(
      (m) => m.ExperiencesSection
    ),
  {
    loading: () => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-64 flex items-center justify-center"
      >
        <div className="animate-pulse text-muted-foreground">
          Loading Experience...
        </div>
      </motion.div>
    ),
  }
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/shared/projects-section").then(
      (m) => m.ProjectsSection
    ),
  {
    loading: () => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-64 flex items-center justify-center"
      >
        <div className="animate-pulse text-muted-foreground">
          Loading Projects...
        </div>
      </motion.div>
    ),
  }
);

const TechChallengeSection = dynamic(
  () =>
    import("@/components/shared/tech-challenge-section").then(
      (m) => m.TechChallengeSection
    ),
  {
    loading: () => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-64 flex items-center justify-center"
      >
        <div className="animate-pulse text-muted-foreground">
          Loading Challenges...
        </div>
      </motion.div>
    ),
  }
);

const ContactSection = dynamic(
  () =>
    import("@/components/shared/contact-section").then((m) => m.ContactSection),
  {
    loading: () => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-64 flex items-center justify-center"
      >
        <div className="animate-pulse text-muted-foreground">
          Loading Contact...
        </div>
      </motion.div>
    ),
  }
);

// Componente wrapper para animações de seção

// Variantes de animação para o container principal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-background to-secondary dark:from-slate-950 dark:to-slate-900 text-foreground"
    >
      <Suspense fallback={<AnimatedLoader />}>
        {/* Hero Section - Sem delay pois é a primeira seção */}
        <motion.div variants={sectionVariants}>
          <HeroSection />
        </motion.div>

        {/* About Section */}
        <AnimatedSection delay={0.1}>
          <AboutSection />
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={0.2}>
          <SkillsSection />
        </AnimatedSection>

        {/* Experiences Section */}
        <AnimatedSection delay={0.3}>
          <ExperiencesSection />
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection delay={0.4}>
          <ProjectsSection />
        </AnimatedSection>

        {/* Tech Challenge Section */}
        <AnimatedSection delay={0.5}>
          <TechChallengeSection />
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection delay={0.6}>
          <ContactSection />
        </AnimatedSection>
      </Suspense>
    </motion.div>
  );
}
