import { ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function ProjectCard({
  title,
  description,
  tags,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  link: string;
}) {
  return (
    <Card className="bg-slate-800 border-slate-700 hover:border-yellow-400 transition-colors">
      <CardHeader>
        <CardTitle className="text-yellow-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="border-slate-600">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline inline-flex items-center"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </CardFooter>
    </Card>
  );
}
