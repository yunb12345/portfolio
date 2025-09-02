export default function Sidebar({ setSection, section }) {
  const links = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Brittany Chiang</h1>
        <p className="text-lg text-gray-400 mt-2">Front End Engineer</p>
        <p className="text-sm text-gray-500 mt-2">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>

      {/* Nav */}
      <nav className="mt-10">
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault(); // evita el salto brusco
                  setSection(link.id);

                  // scroll suave hasta la sección
                  document.getElementById(link.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group flex items-center py-3"
              >
                {/* Línea a la izquierda */}
                <span
                  className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                    section === link.id
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                  }`}
                ></span>

                {/* Texto */}
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                    section === link.id
                      ? "text-slate-200"
                      : "text-slate-500 group-hover:text-slate-200"
                  }`}
                >
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer icons */}
      <div className="flex gap-4 mt-10 text-gray-400">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </header>
  );
}
