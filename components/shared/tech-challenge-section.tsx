import { CHALLENGES } from "@/constants/techbadge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExternalLink } from "lucide-react";

export function TechChallengeSection() {
  return (
    <section className="bg-secondary dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Technical Challenges
        </h2>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {CHALLENGES.map((challenge, index) => (
            <Card
              className="rounded-lg border bg-card text-card-foreground shadow-md"
              key={index}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold leading-none tracking-tight text-amber-600 dark:text-yellow-400">
                  {challenge.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {challenge.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{challenge.content}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={challenge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 dark:text-yellow-400 hover:underline inline-flex items-center"
                >
                  View on GitHub <ExternalLink size={16} className="ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
