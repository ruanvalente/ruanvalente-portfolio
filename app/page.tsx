import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">Ruan Valente</div>
          <div className="hidden md:flex gap-6">
            <a
              href="#about"
              className="hover:text-yellow-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-yellow-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-yellow-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-yellow-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <Button
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
          >
            Resume
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
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
            delivering clean, accessible code and exceptional digital
            experiences.
          </p>
          <div className="flex gap-4 mb-8">
            <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
              Get in touch
            </Button>
            <Button variant="outline" className="border-white">
              View Projects
            </Button>
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
              href="mailto:info@ruanvalente.dev"
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
            />
          </div>
        </div>
      </section>

      {/* About Section */}
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
                years of experience in web development. My journey is driven by
                a passion for transforming digital experiences through clean,
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

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard
              title="Frontend"
              skills={[
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "Responsive Design",
              ]}
            />
            <SkillCard
              title="Frameworks"
              skills={["React", "Next.js", "Vue.js", "Angular", "Quasar"]}
            />
            <SkillCard
              title="Tools"
              skills={["Git", "Webpack", "Vite", "Jest", "Testing Library"]}
            />
            <SkillCard
              title="Other"
              skills={[
                "Accessibility",
                "Performance",
                "SEO",
                "UI/UX",
                "Design Systems",
              ]}
            />
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Main Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <TechBadge name="HTML5" color="bg-orange-600" />
              <TechBadge name="CSS3" color="bg-blue-500" />
              <TechBadge name="JavaScript" color="bg-yellow-500" />
              <TechBadge name="TypeScript" color="bg-blue-600" />
              <TechBadge name="React" color="bg-cyan-500" />
              <TechBadge name="Next.js" color="bg-black" />
              <TechBadge name="Vue.js" color="bg-green-500" />
              <TechBadge name="Angular" color="bg-red-600" />
              <TechBadge name="Node.js" color="bg-green-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Work Experience
          </h2>

          <div className="max-w-3xl mx-auto">
            <ExperienceCard
              title="Frontend Engineer"
              company="Compass UOL"
              period="Current"
              description="Collaborating on large-impact projects, developing modern web interfaces using React and Next.js. Working with multidisciplinary teams to deliver high-quality digital experiences."
              technologies={[
                "React",
                "Next.js",
                "TypeScript",
                "Design Systems",
              ]}
            />

            <ExperienceCard
              title="Frontend Developer"
              company="Previous Company"
              period="2020 - 2022"
              description="Developed responsive web applications and maintained existing codebases. Collaborated with designers and backend developers to implement new features and improve user experience."
              technologies={["Vue.js", "JavaScript", "SCSS", "REST APIs"]}
            />

            <ExperienceCard
              title="Junior Frontend Developer"
              company="Early Career"
              period="2018 - 2020"
              description="Started my professional journey building web interfaces and learning modern frontend technologies. Participated in code reviews and improved my skills in JavaScript and CSS."
              technologies={["HTML", "CSS", "JavaScript", "jQuery"]}
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <Tabs defaultValue="all" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="vue">Vue</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="Yube Challenge"
                description="Frontend challenge focused on building a modern web interface with React and TypeScript."
                tags={["React", "TypeScript", "CSS"]}
                link="https://github.com/ruanvalente/yube-challenge-frontend"
              />
              <ProjectCard
                title="Link Soluções Challenge"
                description="Frontend implementation for a company challenge, showcasing responsive design and modern JavaScript."
                tags={["JavaScript", "HTML", "CSS"]}
                link="https://github.com/ruanvalente/link-solucoes-challenge-frontend"
              />
              <ProjectCard
                title="Personal Portfolio"
                description="My personal portfolio website built with Next.js and Tailwind CSS."
                tags={["Next.js", "Tailwind", "React"]}
                link="#"
              />
              <ProjectCard
                title="E-commerce UI"
                description="A modern e-commerce user interface built with Vue.js and Vuex."
                tags={["Vue.js", "Vuex", "SCSS"]}
                link="#"
              />
            </TabsContent>

            <TabsContent value="react" className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="Yube Challenge"
                description="Frontend challenge focused on building a modern web interface with React and TypeScript."
                tags={["React", "TypeScript", "CSS"]}
                link="https://github.com/ruanvalente/yube-challenge-frontend"
              />
              <ProjectCard
                title="Personal Portfolio"
                description="My personal portfolio website built with Next.js and Tailwind CSS."
                tags={["Next.js", "Tailwind", "React"]}
                link="#"
              />
            </TabsContent>

            <TabsContent value="vue" className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="E-commerce UI"
                description="A modern e-commerce user interface built with Vue.js and Vuex."
                tags={["Vue.js", "Vuex", "SCSS"]}
                link="#"
              />
            </TabsContent>

            <TabsContent value="other" className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="Link Soluções Challenge"
                description="Frontend implementation for a company challenge, showcasing responsive design and modern JavaScript."
                tags={["JavaScript", "HTML", "CSS"]}
                link="https://github.com/ruanvalente/link-solucoes-challenge-frontend"
              />
            </TabsContent>
          </Tabs>

          <div className="text-center mt-10">
            <a
              href="https://github.com/ruanvalente"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-yellow-400 hover:underline"
            >
              View more on GitHub <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Challenges Section */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical Challenges
          </h2>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-yellow-400">
                  Yube Challenge
                </CardTitle>
                <CardDescription>Frontend Implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  A technical challenge focused on building a modern web
                  interface with React and TypeScript, demonstrating best
                  practices in frontend development.
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://github.com/ruanvalente/yube-challenge-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:underline inline-flex items-center"
                >
                  View on GitHub <ExternalLink size={16} className="ml-1" />
                </a>
              </CardFooter>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-yellow-400">
                  Link Soluções Challenge
                </CardTitle>
                <CardDescription>Frontend Implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  A challenge that showcases responsive design and modern
                  JavaScript implementation, focusing on clean code and user
                  experience.
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://github.com/ruanvalente/link-solucoes-challenge-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:underline inline-flex items-center"
                >
                  View on GitHub <ExternalLink size={16} className="ml-1" />
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                      href="mailto:info@ruanvalente.dev"
                      className="text-slate-300 hover:text-yellow-400"
                    >
                      info@ruanvalente.dev
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

      {/* Footer */}
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
    </div>
  );
}

// Component for skill cards
function SkillCard({ title, skills }: { title: string; skills: string[] }) {
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

// Component for tech badges
function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <Badge className={`${color} hover:${color} text-white px-3 py-1`}>
      {name}
    </Badge>
  );
}

// Component for experience cards
function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  isLast = false,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  isLast?: boolean;
}) {
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute left-3 top-3 bottom-0 w-px bg-slate-700"></div>
      )}
      <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-slate-900"></div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-400">{company}</span>
          <span className="text-sm text-slate-400">• {period}</span>
        </div>
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="border-slate-600">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

// Component for project cards
function ProjectCard({
  title,
  description,
  tags,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  link: string;
}) {
  return (
    <Card className="bg-slate-800 border-slate-700 hover:border-yellow-400 transition-colors">
      <CardHeader>
        <CardTitle className="text-yellow-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="border-slate-600">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline inline-flex items-center"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </CardFooter>
    </Card>
  );
}
