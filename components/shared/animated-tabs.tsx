"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AnimatedTabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedTabs({
  defaultValue,
  children,
  className,
}: AnimatedTabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className={className}>
      {children}
    </Tabs>
  );
}

interface AnimatedTabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedTabsList({
  children,
  className,
}: AnimatedTabsListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <TabsList className={className}>{children}</TabsList>
    </motion.div>
  );
}

interface AnimatedTabsTriggerProps {
  value: string;
  children: React.ReactNode;
  index: number;
}

export function AnimatedTabsTrigger({
  value,
  children,
  index,
}: AnimatedTabsTriggerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
    >
      <TabsTrigger value={value}>{children}</TabsTrigger>
    </motion.div>
  );
}

interface AnimatedTabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedTabsContent({
  value,
  children,
  className,
}: AnimatedTabsContentProps) {
  return (
    <TabsContent value={value} className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {children}
      </motion.div>
    </TabsContent>
  );
}
