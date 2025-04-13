export const TECH_BADGE = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Vue.js" },
  { name: "Angular" },
  { name: "Node.js" },
];

export const EXPERIENCES = [
  {
    title: "Desenvolvedor FrontEnd Pleno",
    company: "Compass UOL",
    period: "out 2022 - current",
    description:
      "Developed responsive web applications and maintained existing codebases. Collaborated with designers and backend developers to implement new features and improve user experience.",
    tecnologies: [
      "JavaScript",
      "SCSS",
      "Vue.js",
      "Quasar Framework",
      "React.js",
      "Next.js",
      "Design System",
      "REST APIs",
      "Java",
      "Spring",
      "Oracle",
    ],
    isCurrent: true,
    isLast: false,
  },
  {
    title: "Desenvolvedor FrontEnd II",
    company: "CELK Sistemas",
    period: "jul 2021 - out 2022",
    description:
      "Experienced in developing and maintaining web and mobile applications within the public health management sector. Skilled in building intuitive and high-performance user interfaces while ensuring seamless system functionality.",
    tecnologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "Angular.js",
      "React.js",
      "Material UI",
      "Java",
      "Spring",
      "Flutter",
    ],
    isCurrent: false,
    isLast: false,
  },
  {
    title: "Desenvolvedor Web FrontEnd JR",
    company: "Consórcio SIGTRANS",
    period: "dez 2020 - jul 2021",
    description:
      "Developed responsive web applications and maintained existing codebases. Collaborated with designers and backend developers to implement new features and improve user experience.",
    tecnologies: [
      "Vue.js",
      "JavaScript",
      "SCSS",
      "REST APIs",
      "Git",
      "Scrum",
      "Kanban",
      "Docker",
    ],
    isCurrent: false,
    isLast: false,
  },
  {
    title: "Desenvolvedor JR",
    company: "Iago Cavalcante Desenvolvimento e Consultoria",
    period: "set 2018 - nov 2020",
    description:
      "Started my professional journey building web interfaces and learning modern frontend technologies. Participated in code reviews and improved my skills in JavaScript and CSS.",
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Quasar Framework",
      "Vue.js",
      "Adonis.js",
      "PostgreSQL",
      "Rest APIs",
      "Git",
      "Scrum",
      "Kanban",
      "Docker",
    ],
    isCurrent: false,
    isLast: true,
  },
];

export const TABS = [
  { value: "all", label: "All" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "node", label: "Node" },
  { value: "other", label: "Other" },
];

export const PROJECTS = [
  {
    title: "Yube Challenge",
    description:
      "Frontend challenge focused on building a modern web interface with React and TypeScript.",
    descriptionKey: "projects.descriptions.yube",

    tags: ["React", "TypeScript", "CSS"],
    link: "https://github.com/ruanvalente/yube-challenge-frontend",
    category: ["all", "react"],
  },
  {
    title: "Link Soluções Challenge",
    description:
      "Frontend implementation for a company challenge, showcasing responsive design and modern JavaScript.",
    descriptionKey: "projects.descriptions.link",

    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://yube-challenge-frontend-ruanopensuselinux.vercel.app",
    category: ["all", "other"],
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio website built with Next.js and Tailwind CSS.",
    descriptionKey: "projects.descriptions.portfolio",

    tags: ["Next.js", "Tailwind", "React"],
    link: "https://ruanvalente-portfolio.vercel.app",
    category: ["all", "react"],
  },
  {
    title: "DaisyUI Nuxt Application",
    description:
      "This project is a modern and highly productive dashboard developed with Nuxt, DaisyUI, Tailwind CSS, Vitest, Biome JS and TypeScript. The goal is to create a scalable, responsive and SEO-optimized solution by combining the power of these technologies.",
    descriptionKey: "projects.descriptions.ecommerce",

    tags: ["Vue.js", "Nuxt", "Pinia", "CSS", "DaisyUI", "Tailwindcss"],
    link: "https://daisy-ui-nuxt.vercel.app",
    category: ["all", "vue"],
  },
  {
    title: "MS Order Service",
    description:
      "Study project of a microservice responsible for managing customers, orders and order items.",
    descriptionKey: "projects.descriptions.order-service",

    tags: ["Nest.js", "Typescript", "PostgreSQL", "RabbitMQ", "Docker"],
    link: "https://github.com/ruanvalente/ms-customer-order-service",
    category: ["all", "node"],
  },
  {
    title: "Book Challenge",
    description: "challenges.description.book_challenge",
    descriptionKey: "projects.descriptions.book_challenge",
    tags: ["Nest.js", "Typescript", "MySQL", "Docker"],
    link: "https://github.com/ruanvalente/book-challenge-nest",
    category: ["all", "node"],
  },
];

export const CHALLENGES = [
  {
    title: "Yube Challenge",
    description: "challenges.description",
    descriptionKey: "projects.descriptions.yube",
    content:
      "A technical challenge focused on building a modern web interface with React and TypeScript, demonstrating best practices in frontend development.",
    link: "https://github.com/ruanvalente/yube-challenge-frontend",
  },
  {
    title: "Link Soluções",
    description: "challenges.description",
    descriptionKey: "projects.descriptions.link",
    content:
      "A challenge that showcases responsive design and modern JavaScript implementation, focusing on clean code and user experience.",
    link: "https://github.com/ruanvalente/link-solucoes-challenge-frontend",
  },
  {
    title: "Ledger CLI",
    description: "challenges.description.ledger",
    descriptionKey: "projects.descriptions.ledger",
    content:
      "Ledger CLI is a simple command line (CLI) financial management application using Ruby and SQLite. The project is part of a challenge provided by the DevsNorte community.",
    link: "https://github.com/ruanvalente/ledger_api_cli",
  },
  {
    title: "Desafio Técnico - Desenvolvedor Backend",
    description: "challenges.description.book_challenge",
    descriptionKey: "projects.descriptions.book_challenge",
    content: "Web API of a bookstore system with TDD.",
    link: "https://github.com/ruanvalente/book-challenge-nest",
  },
];
