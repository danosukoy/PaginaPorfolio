import { ExternalLink, Play } from "lucide-react";
import type { Project } from "../data/projects";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: () => void;
}

export default function ProjectCard({
  project,
  index,
  onSelect,
}: ProjectCardProps) {
  return (
    <div
      className="project-card"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="project-card-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-80" />
        <div className="absolute top-4 right-4">
          <span className="project-card-badge">
            {project.engine}
          </span>
        </div>
      </div>

      <div className="project-card-content">
        <div>
          <div className="project-card-header">
            <h3 className="project-card-title">
              {project.title}
            </h3>
            <span className="project-card-year">
              {project.year}
            </span>
          </div>

          <p className="project-card-description">
            {project.description}
          </p>

          <div className="project-card-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-card-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="project-card-footer">
          <div className="project-card-links">
            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                className="project-card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
            {project.videoUrl && project.videoUrl !== "#" && (
              <a
                href={project.videoUrl}
                className="project-card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play size={16} />
                Video
              </a>
            )}
            {project.repoUrl && project.repoUrl !== "#" && (
              <a
                href={project.repoUrl}
                className="project-card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
                Código
              </a>
            )}
          </div>
          
          <button
            onClick={onSelect}
            className="btn-details"
            aria-label={`Ver detalles de ${project.title}`}
          >
            Detalles
          </button>
        </div>
      </div>
    </div>
  );
}
