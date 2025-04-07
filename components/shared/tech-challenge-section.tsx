"use client";

import { CHALLENGES } from "@/constants/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function TechChallengeSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-secondary dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t("challenges.title")}
        </h2>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {CHALLENGES.map((challenge, index) => (
            <Card
              className="rounded-lg border bg-card text-card-foreground shadow-md"
              key={index}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold leading-none tracking-tight text-amber-600 dark:text-yellow-400">
                  {t(challenge.title)}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t(challenge.description)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t(challenge.descriptionKey)}
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href={challenge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 dark:text-yellow-400 hover:underline inline-flex items-center"
                >
                  {t("challenges.view")}{" "}
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
