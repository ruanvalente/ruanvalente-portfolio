"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useLanguage } from "@/context/language-context";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  index = 0,
}: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      className="h-full"
    >
      <Card className="rounded-lg border bg-card text-card-foreground shadow-md hover:border-amber-600 dark:hover:border-yellow-400 transition-all duration-300 h-full flex flex-col group hover:shadow-xl">
        <CardHeader>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          >
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight text-amber-600 dark:text-yellow-400 group-hover:text-amber-700 dark:group-hover:text-yellow-300 transition-colors duration-300">
              {t(title)}
            </CardTitle>
          </motion.div>
        </CardHeader>

        <CardContent className="flex-grow">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            className="text-muted-foreground mb-4 leading-relaxed"
          >
            {t(description)}
          </motion.p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <motion.div
                key={tagIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1 + 0.4 + tagIndex * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Badge
                  variant="outline"
                  className="border-slate-600 hover:border-amber-600 dark:hover:border-yellow-400 transition-colors duration-200"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 dark:text-yellow-400 hover:text-amber-700 dark:hover:text-yellow-300 hover:underline inline-flex items-center transition-colors duration-200 font-medium"
            >
              {t("projects.viewmore")}
              <motion.div
                className="ml-1"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink size={16} />
              </motion.div>
            </a>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
