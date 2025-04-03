import { Badge } from "../ui/badge";
export function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <Badge className={`${color} hover:${color} text-white px-3 py-1`}>
      {name}
    </Badge>
  );
}
