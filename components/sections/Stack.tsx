interface StackProps {
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
}

export default function Stack({ skills }: StackProps) {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold mb-8">Stack</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-zinc-300 mb-3">
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full border border-zinc-800 text-xs text-zinc-400 hover:border-zinc-700 hover:text-zinc-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-300 mb-3">
            Frameworks & Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.frameworks.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full border border-zinc-800 text-xs text-zinc-400 hover:border-zinc-700 hover:text-zinc-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-300 mb-3">
            Tools & Services
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full border border-zinc-800 text-xs text-zinc-400 hover:border-zinc-700 hover:text-zinc-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
