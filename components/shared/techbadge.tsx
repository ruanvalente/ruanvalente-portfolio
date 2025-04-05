import { Badge } from "../ui/badge";
export function TechBadge({ name }: { name: string }) {
  return (
    <Badge className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none  bg-transparent  border-slate-200 dark:border-white  dark:text-white">
      {name}
    </Badge>
  );
}
