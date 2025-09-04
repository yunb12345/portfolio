const projects = [
  {
    img: "",
    name: "Splitify",
    description:
      "Frontend y Backend de una aplicación web para dividir gastos en grupos de amigos...",
    tags: ["React","SQL","Node","Express","Sequelize","TailwindCSS"],
  },
  {
    img: "",
    name: "Facturalo",
    description:
      "Un chatbot impulsado por IA que ayuda a los usuarios a generar facturas electrónicas de manera rápida y sencilla con lenguaje natural...",
    tags: ["Python","Whatsapp API","OpenAI","Flask"],
  },
  {
    img: "",
    name: "CookingBook",
    description:
      "Una aplicacion movil para crear recetas, buscar recetas y clasificarlas",
    tags: ["Android","React Native","MongoDB","Node","Express"],
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <ol className="group/list">
        {projects.map((exp, idx) => (
          <li key={idx} className="relative mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {exp.date}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="text-lg font-semibold text-white">
                  <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                    </span>
                    <span>{exp.name}</span>
                  </a>
                  
                </h3>
                <p className="mt-2 text-gray-300">{exp.description}</p>
                <ul className="mt-2 flex flex-wrap">
                  {exp.tags.map((tag, i) => (
                    <li key={i} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {tag}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}