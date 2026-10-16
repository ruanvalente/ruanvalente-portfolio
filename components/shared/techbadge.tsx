import {
  SiAngular,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

import { Badge } from "../ui/badge";

const ICON_MAP: Record<string, React.ReactElement> = {
  HTML5: <SiHtml5 aria-hidden="true" className="w-4 h-4 text-orange-500" />,
  CSS3: <SiCss aria-hidden="true" className="w-4 h-4 text-blue-500" />,
  JavaScript: (
    <SiJavascript aria-hidden="true" className="w-4 h-4 text-yellow-400" />
  ),
  TypeScript: (
    <SiTypescript aria-hidden="true" className="w-4 h-4 text-blue-600" />
  ),
  React: <SiReact aria-hidden="true" className="w-4 h-4 text-cyan-400" />,
  "Next.js": (
    <SiNextdotjs
      aria-hidden="true"
      className="w-4 h-4 text-black dark:text-white"
    />
  ),
  "Vue.js": (
    <SiVuedotjs aria-hidden="true" className="w-4 h-4 text-green-500" />
  ),
  Angular: <SiAngular aria-hidden="true" className="w-4 h-4 text-red-600" />,
  "Node.js": (
    <SiNodedotjs aria-hidden="true" className="w-4 h-4 text-green-600" />
  ),
};

export function TechBadge({ name }: { name: string }) {
  return (
    <Badge
      variant="outline"
      className="inline-flex items-center gap-space-xs rounded-full px-2.5 py-1 text-label-sm border-border/80 bg-muted/50 text-on-surface-variant"
    >
      {ICON_MAP[name]}
      {name}
    </Badge>
  );
}
