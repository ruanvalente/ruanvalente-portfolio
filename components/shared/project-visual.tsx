import {
  SiBun,
  SiCss,
  SiDocker,
  SiHotwire,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNestjs,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPwa,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiSharp,
  SiSqlite,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";

const ICONS: Record<string, { icon: IconType; className: string }> = {
  HTML: { icon: SiHtml5, className: "text-orange-600" },
  CSS: { icon: SiCss, className: "text-blue-600" },
  JavaScript: { icon: SiJavascript, className: "text-yellow-500" },
  Typescript: { icon: SiTypescript, className: "text-blue-700" },
  TypeScript: { icon: SiTypescript, className: "text-blue-700" },
  React: { icon: SiReact, className: "text-cyan-600" },
  "Next.js": { icon: SiNextdotjs, className: "text-foreground" },
  "Vue.js": { icon: SiVuedotjs, className: "text-green-600" },
  "Nest.js": { icon: SiNestjs, className: "text-rose-600" },
  "Node.js": { icon: SiNodedotjs, className: "text-green-700" },
  Ruby: { icon: SiRuby, className: "text-red-700" },
  SQLite: { icon: SiSqlite, className: "text-sky-700" },
  MySQL: { icon: SiMysql, className: "text-orange-600" },
  Docker: { icon: SiDocker, className: "text-blue-600" },
  Supabase: { icon: SiSupabase, className: "text-emerald-600" },
  PWA: { icon: SiPwa, className: "text-indigo-600" },
  Sharp: { icon: SiSharp, className: "text-sky-600" },
  Rails: { icon: SiRubyonrails, className: "text-red-600" },
  PostgreSQL: { icon: SiPostgresql, className: "text-blue-700" },
  Hotwire: { icon: SiHotwire, className: "text-rose-500" },
  Bun: { icon: SiBun, className: "text-foreground" },
  Swift: { icon: SiSwift, className: "text-orange-600" },
  SwiftUI: { icon: SiSwift, className: "text-orange-500" },
  Tailwind: { icon: SiTailwindcss, className: "text-teal-600" },
  Tailwindcss: { icon: SiTailwindcss, className: "text-teal-600" },
};

export function ProjectVisual({ tags }: { tags: readonly string[] }) {
  const icons = tags
    .map((tag) => ICONS[tag])
    .filter((item): item is { icon: IconType; className: string } => !!item)
    .slice(0, 4);

  return (
    <div
      data-ui="project-stack"
      aria-hidden="true"
      className="relative flex h-32 items-center justify-center overflow-hidden rounded-md bg-surface-container-low"
    >
      <span className="absolute inset-x-8 top-1/2 h-px bg-border" />
      <span className="relative flex items-center gap-3">
        {icons.map(({ icon: Icon, className }, index) => (
          <span
            key={index}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-border/80 bg-card shadow-sm"
          >
            <Icon className={`size-6 ${className}`} />
          </span>
        ))}
      </span>
    </div>
  );
}
