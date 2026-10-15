interface Role {
  title: string;
  period: string;
  description: string;
  tags: string[];
}

interface ExperienceItem {
  company: string;
  roles: Role[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
  showAll: boolean;
  onToggle: () => void;
}

export default function Experience({ experiences, showAll, onToggle }: ExperienceProps) {
  return (
    <section className="mb-20 py-12 border-t border-b border-zinc-800">
      <h2 className="text-2xl font-bold mb-8">Experience</h2>
      <div className="space-y-12">
        {experiences.slice(0, showAll ? experiences.length : 2).map((exp, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-6">{exp.company}</h3>
            {exp.roles.map((role, roleIdx) => (
              <div key={roleIdx} className="ml-4 pb-8 last:pb-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <h4 className="font-medium text-zinc-300">{role.title}</h4>
                  <span className="text-xs text-zinc-500">{role.period}</span>
                </div>
                <p className="text-sm text-zinc-400 mb-4">{role.description}</p>
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-zinc-900 text-zinc-400 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {experiences.length > 2 && (
        <button
          onClick={onToggle}
          className="mt-8 text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
}
