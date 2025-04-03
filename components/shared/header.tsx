const NAV_MENU = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Header() {
  return (
    <header className="container mx-auto py-6 px-4">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold">Ruan Valente</div>
        <div className="hidden md:flex gap-6">
          {NAV_MENU.map((menu, index) => (
            <a
              key={index}
              href={menu.href}
              className="hover:text-yellow-400 transition-colors"
            >
              {menu.label}
            </a>
          ))}
        </div>
        <a
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-10 px-4 py-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 hover:animate-pulse"
          href="/ruanvalente-resume.pdf"
          download
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
