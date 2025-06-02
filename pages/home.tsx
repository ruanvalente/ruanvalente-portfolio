"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/shared/animated-section";
import { AnimatedLoader } from "@/components/shared/animated-loader";
import { ROUTES_SECTION } from "@/routes/routes";
import { CONTAINER_VARIANTS } from "@/constants/animation";

export default function HomePage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={CONTAINER_VARIANTS}
      className="min-h-screen bg-gradient-to-b from-background to-secondary dark:from-slate-950 dark:to-slate-900 text-foreground"
    >
      <Suspense fallback={<AnimatedLoader />}>
        {ROUTES_SECTION.map(({ Component, delay }, index) => (
          <AnimatedSection key={index} delay={delay}>
            <Component />
          </AnimatedSection>
        ))}
      </Suspense>
    </motion.div>
  );
}
