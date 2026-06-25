import type { Project } from "../data/projects";
import { useState } from "react";
import ProjectPanel from "./ProjectPanel";

interface ProjectMarqueeProps {
  projects: Project[];
}

export default function ProjectMarquee({ projects }: ProjectMarqueeProps) {
  // Sort projects chronologically (newest first)
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
  // Duplicate for seamless marquee looping
  const duplicatedProjects = [...sortedProjects, ...sortedProjects];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="marquee flex gap-6 w-max">
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}-dup`}
            onClick={() => setSelectedProject(project)}
            className="marquee-card"
          >
            {/* Aspect Video Image Wrapper */}
            <div className="marquee-card-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="marquee-card-image"
                loading="lazy"
              />
            </div>
            
            {/* Content Details */}
            <div className="marquee-card-content">
              <span className="marquee-card-title">
                {project.title}
              </span>
              
              <div className="flex items-center gap-2">
                <span className="marquee-card-badge">
                  {project.engine}
                </span>
                <span className="marquee-card-meta">
                  • {project.year}
                </span>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="marquee-card-footer">
              <span className="marquee-card-cta">
                Ver más →
              </span>
            </div>
          </div>
        ))}
      </div>

      <ProjectPanel
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
