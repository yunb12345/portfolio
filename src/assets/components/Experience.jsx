export default function Experience() {
  return (
    <section>
      <h2 className="text-xl font-bold text-white">Experience</h2>
      <div className="mt-6">
        <p className="text-gray-400">2024 — Present</p>
        <h3 className="text-lg font-semibold text-white">
          Senior Frontend Engineer, Accessibility · Klaviyo
        </h3>
        <p className="mt-2 text-gray-300">
          Build and maintain critical components used to construct Klaviyo’s
          frontend, across the whole product...
        </p>

        <div className="flex gap-2 mt-3">
          <span className="bg-teal-700 px-3 py-1 rounded text-sm">JavaScript</span>
          <span className="bg-teal-700 px-3 py-1 rounded text-sm">TypeScript</span>
          <span className="bg-teal-700 px-3 py-1 rounded text-sm">React</span>
          <span className="bg-teal-700 px-3 py-1 rounded text-sm">Storybook</span>
        </div>
      </div>
    </section>
  );
}
