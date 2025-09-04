const experiences = [
  {
    date: "2025 - Present",
    role: "Licenciatura en Sistemas",
    description:
      "Actualmente cursando la Licenciatura en Sistemas en la UADE, profundizando en áreas como análisis de sistemas, desarrollo de software y gestión de proyectos informáticos.",
    tags: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    date: "2023 - 2025",
    role: "Tecnicatura en Desarrollo de Software",
    description:
      "Estudio en la UADE de la carrera de Tecnicatura en Desarrollo de Software, adquiriendo conocimientos en programación, bases de datos y desarrollo web.",
    tags: ["Java", "Python", "SQL", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <ol className="group/list">
        {experiences.map((exp, idx) => (
          <li key={idx} className="relative mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {exp.date}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="text-lg font-semibold text-white">
                  {exp.role}
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