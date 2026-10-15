import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  period: string;
  description: string;
  tags: string[];
  link: string;
}

interface ProjectsProps {
  projects: Project[];
  showAll: boolean;
  onToggle: () => void;
}

export default function Projects({ projects, showAll, onToggle }: ProjectsProps) {
  return (
    <section id="projects" className="mb-20">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="space-y-12">
        {projects.slice(0, showAll ? projects.length : 3).map((project, idx) => (
          <div
            key={idx}
            className="pb-8 border-b border-zinc-800 last:border-0 last:pb-0"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                <p className="text-xs text-zinc-500">{project.period}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 mt-2 md:mt-0"
              >
                View <ExternalLink size={12} />
              </a>
            </div>
            <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
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
      {projects.length > 3 && (
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
