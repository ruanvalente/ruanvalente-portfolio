"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SectionTransition({
  children,
  className,
  delay = 0,
}: SectionTransitionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
