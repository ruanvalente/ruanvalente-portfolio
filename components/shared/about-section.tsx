import { Briefcase, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">
              Who I Am
            </h3>
            <p className="text-slate-300 mb-6">
              I'm a Frontend Engineer based in Belém-PA, Brazil with over 5
              years of experience in web development. My journey is driven by a
              passion for transforming digital experiences through clean,
              accessible, and high-performance code.
            </p>
            <p className="text-slate-300 mb-6">
              Currently working at Compass UOL, collaborating on large-impact
              projects and continuously improving my skills in modern frontend
              technologies.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-yellow-400" />
                <span>Belém-PA, Brazil</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-yellow-400" />
                <span>Frontend Engineer at Compass UOL</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">
              My Focus
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <div className="min-w-5 mt-1">✅</div>
                <div>
                  Working with modern frameworks like React, Next.js, Vue.js,
                  Quasar and Angular
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-5 mt-1">✅</div>
                <div>Focusing on performance and scalability</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-5 mt-1">✅</div>
                <div>Creating and maintaining design systems</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-5 mt-1">✅</div>
                <div>Committed to web accessibility</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-5 mt-1">✅</div>
                <div>Efficient collaboration in multidisciplinary teams</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-5 mt-1">📚</div>
                <div>Currently learning: Node.js, Ruby and Rails</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
