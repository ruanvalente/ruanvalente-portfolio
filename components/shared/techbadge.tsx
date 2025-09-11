
import {
  SiAngular,
  SiCss3,
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Badge } from "../ui/badge";

const ICON_MAP: Record<string, React.ReactElement> = {
  // Front-end
  HTML5: <SiHtml5 className="w-4 h-4 text-orange-500" />,
  CSS3: <SiCss3 className="w-4 h-4 text-blue-500" />,
  JavaScript: <SiJavascript className="w-4 h-4 text-yellow-400" />,
  TypeScript: <SiTypescript className="w-4 h-4 text-blue-600" />,
  React: <SiReact className="w-4 h-4 text-cyan-400" />,
  "Next.js": <SiNextdotjs className="w-4 h-4 text-black dark:text-white" />,
  "Vue.js": <SiVuedotjs className="w-4 h-4 text-green-500" />,
  Angular: <SiAngular className="w-4 h-4 text-red-600" />,
  TailwindCSS: <SiTailwindcss className="w-4 h-4 text-cyan-500" />,

  // Back-end
  "Node.js": <SiNodedotjs className="w-4 h-4 text-green-600" />,
  NestJS: <SiNestjs className="w-4 h-4 text-red-500" />,
  Prisma: <SiPrisma className="w-4 h-4 text-slate-900 dark:text-white" />,

  // Databases
  MongoDB: <SiMongodb className="w-4 h-4 text-green-500" />,
  PostgreSQL: <SiPostgresql className="w-4 h-4 text-blue-400" />,

  // Testing
  Jest: <SiJest className="w-4 h-4 text-red-600" />,

  // DevOps & Tools
  Git: <SiGit className="w-4 h-4 text-orange-600" />,
  Docker: <SiDocker className="w-4 h-4 text-blue-500" />,
};

export function TechBadge({ name }: { name: string }) {
  return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge className="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none bg-transparent border-slate-200 dark:border-white dark:text-white cursor-pointer">
            {ICON_MAP[name] && <span>{ICON_MAP[name]}</span>}
            {name}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">{name}</p>
        </TooltipContent>
      </Tooltip>
  );
}

