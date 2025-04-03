import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-yellow-400">Ruan Valente</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-slate-300">
          Frontend Engineer
        </h2>
        <p className="text-lg text-slate-300 mb-8">
          Passionate frontend developer with 5+ years of experience creating
          modern, scalable, and high-performance web interfaces. Focused on
          delivering clean, accessible code and exceptional digital experiences.
        </p>
        <div className="flex gap-4 mb-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-yellow-400 text-slate-900 hover:bg-yellow-500"
          >
            Get in touch
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 border-white"
            href="#projects"
          >
            View Projects
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/ruanvalente"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ruan-valente"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contato.ruanvalente@gmail.com"
            className="text-slate-300 hover:text-white"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400">
          <Image
            src="https://avatars.githubusercontent.com/u/6674232?s=400&u=62eb573c8af66e882bbf633187e0f247714d30ec&v=4"
            alt="Ruan Valente"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
