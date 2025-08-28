import { useState } from "react";
import Sidebar from "./assets/components/Sidebar";
import About from "./assets/components/About";
import Experience from "./assets/components/Experience";
import Projects from "./assets/components/Projects";

export default function App() {
  const [section, setSection] = useState("about");

  return (
    <div className="mx-auto min-h-screen bg-[#0a192f] text-gray-300 max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      {/* Sidebar */}
      <Sidebar setSection={setSection} section={section} />

      {/* Main Content */}
      <main className="flex-1 p-10">
        {section === "about" && <About />}
        {section === "experience" && <Experience />}
        {section === "projects" && <Projects />}
      </main>
    </div>
  );
}
