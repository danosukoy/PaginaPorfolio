import type { Project } from "../data/projects";

interface ProjectMarqueeProps {
  projects: Project[];
}

export default function ProjectMarquee({ projects }: ProjectMarqueeProps) {
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="w-full overflow-hidden mt-12 mb-12">
      <div className="marquee flex gap-6">
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-dark-card border border-dark-border rounded-sm hover:border-gold/50 transition-colors cursor-default"
          >
            <span className="text-gold text-lg">🎮</span>
            <span className="text-white font-semibold whitespace-nowrap">
              {project.title}
            </span>
            <span className="text-text-muted text-sm whitespace-nowrap">
              • {project.engine}
            </span>
            <span className="text-text-muted text-sm whitespace-nowrap">
              • {project.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
