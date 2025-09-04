import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function Sidebar({ setSection, section }) {
  const links = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Agustin Yoon</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Desarrollador de Software</h2>
        <p className="text-sm text-gray-500 mt-2">
          Busco desarrollar experiencia para desarrollar software que impacte a las personas.
        </p>
      </div>
      <nav className="mt-10">
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault(); // evita el salto brusco
                  setSection(link.id);
                  document.getElementById(link.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group flex items-center py-3"
              >

                <span
                  className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                    section === link.id
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                  }`}
                ></span>
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
      <div className="flex gap-4 mt-10 text-gray-400">
        <a href="https://github.com/yunb12345" target="_blank" rel="noopener noreferrer">
          <AiFillGithub  className="text-3xl hover:text-white transition ease-in-out"/>
        </a>
        <a href="https://www.linkedin.com/in/agustin-yoon-818ab829a/" target="_blank" rel="noopener noreferrer">
          <AiOutlineLinkedin className="text-3xl hover:text-white transition ease-in-out"/>
        </a>
        <a href="https://wa.me/5491128234936" target="_blank" rel="noopener noreferrer">
          <AiOutlineWhatsApp className="text-3xl hover:text-white transition ease-in-out" />
        </a>
      </div>
    </header>
  );
}
