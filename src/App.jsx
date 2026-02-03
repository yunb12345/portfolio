import { useState, useEffect } from "react";
import Sidebar from "./assets/components/Sidebar";
import About from "./assets/components/About";
import Experience from "./assets/components/Experience";
import Projects from "./assets/components/Projects";

export default function App() {
  const [section, setSection] = useState("about");
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Detectar movimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  // Detectar sección visible (Observer)
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const onScroll = () => {
      if (window.scrollY <= 10) {
        setSection("about");
        return;
      }

      const centerY = window.innerHeight / 2;

      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - centerY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section.id;
        }
      });

      if (closestSection) {
        setSection(closestSection);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // inicial

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div
        id="gradient-bg"
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${coords.x}px ${coords.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
      <div className="mx-auto min-h-screen text-gray-300 max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar setSection={setSection} section={section} />
            <main className="pt-24 lg:w-[52%] lg:py-24">
              <section id="about">
                <About />
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="projects">
                <Projects />
              </section>
            </main>
        </div>
      </div>
    </div>
  );
}
