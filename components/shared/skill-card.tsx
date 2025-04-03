import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-yellow-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
              <span className="text-slate-300">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
