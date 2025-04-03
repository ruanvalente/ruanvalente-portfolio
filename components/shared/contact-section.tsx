import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

        <div className="max-w-3xl mx-auto bg-slate-800 rounded-lg p-8">
          <p className="text-center text-slate-300 mb-8">
            Interested in working together or have any questions? Feel free to
            reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 text-slate-900 p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:contato.ruanvalente@gmail.com"
                    className="text-slate-300 hover:text-yellow-400"
                  >
                    contato.ruanvalente@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 text-slate-900 p-3 rounded-full">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/ruan-valente"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-yellow-400"
                  >
                    linkedin.com/in/ruan-valente
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 text-slate-900 p-3 rounded-full">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a
                    href="https://github.com/ruanvalente"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-yellow-400"
                  >
                    github.com/ruanvalente
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-md bg-slate-700 border border-slate-600 focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-md bg-slate-700 border border-slate-600 focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 rounded-md bg-slate-700 border border-slate-600 focus:border-yellow-400 focus:outline-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
