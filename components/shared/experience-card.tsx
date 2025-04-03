import { Badge } from "../ui/badge";

export function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  isLast = false,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  isLast?: boolean;
}) {
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute left-3 top-3 bottom-0 w-px bg-slate-700"></div>
      )}
      <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-slate-900"></div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-400">{company}</span>
          <span className="text-sm text-slate-400">• {period}</span>
        </div>
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="border-slate-600">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
