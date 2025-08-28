export default function Sidebar({ setSection, section }) {
  const links = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ];

  return (
    <aside className="w-64 p-8 flex flex-col justify-between">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Brittany Chiang</h1>
        <p className="text-lg text-gray-400 mt-2">Front End Engineer</p>
        <p className="text-sm text-gray-500 mt-2">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>

      {/* Nav */}
      <nav className="mt-10 space-y-4">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => setSection(link.id)}
            className={`block text-left w-full border-l pl-4 ${
              section === link.id
                ? "border-white text-white"
                : "border-gray-600 text-gray-400 hover:text-white"
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Footer icons */}
      <div className="flex gap-4 mt-10 text-gray-400">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </aside>
  );
}
