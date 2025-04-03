import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Ruan Valente. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/ruanvalente"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ruan-valente"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:info@ruanvalente.dev"
              className="text-slate-400 hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
