import { FiExternalLink } from "react-icons/fi";

const projects = [
/*   {
    img: "/img/Splitify.png",
    name: "Splitify",
    description:
      "Frontend y Backend de una aplicación web para dividir gastos en grupos de amigos...",
    tags: ["React","SQL","Node","Express","Sequelize","TailwindCSS"],
    link:"https://github.com/yunb12345/APITPO.git",
  }, */
  {
    img: "/img/chatify.png",
    name: "Chatify",
    description:
      "Aplicacion web de chat en tiempo real con sistema de autenticación y capaz de subir imagenes",
    tags: ["React","Node","WebSocket","MongoDB","Tailwind"],
    github:"https://github.com/yunb12345/chatifyapp.git",
    link:"https://profound-spontaneity-production-e505.up.railway.app/",
  },
  {
    img: "/img/facturalo.png",
    name: "Facturalo",
    description:
      "Un chatbot impulsado por IA que ayuda a los usuarios a generar facturas electrónicas de manera rápida y sencilla con lenguaje natural...",
    tags: ["Python","Whatsapp API","OpenAI","Flask"],
    github:"https://github.com/facundocarrizo99/AIChatbot.git",
    link:"",
  },
  {
    img: "/img/CookingBook.png",
    name: "CookingBook",
    description:
      "Una aplicacion movil para crear recetas, buscar recetas y clasificarlas",
    tags: ["Android","React Native","MongoDB","Node","Express"],
    github:"https://github.com/loveonick/devappfront.git",
    link:"",
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
            <a
              href={exp.github}
              target="_blank"
            >
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
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
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                  >
                    <span>Link de la app</span>
                    <FiExternalLink className="ml-2 text-base" />
                  </a>
                )}
              </div>
                <div className="relative overflow-hidden rounded-md border border-slate-200/10 aspect-[16/10] sm:col-span-2 sm:order-1 sm:translate-y-1">
                  <img
                    src={exp.img}
                    alt={exp.name}
                    className="absolute inset-0 h-full w-full object-cover brightness-95 contrast-105 saturate-110 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
            </div>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}