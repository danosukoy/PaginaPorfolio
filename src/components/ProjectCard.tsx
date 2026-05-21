import { ExternalLink, Play } from 'lucide-react';
import type { Project } from '../data/projects';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group bg-dark-card border border-dark-border rounded-sm overflow-hidden hover:border-gold/50 transition-all duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-dark/80 backdrop-blur-sm text-gold text-xs uppercase tracking-wider rounded-sm border border-gold/30">
            {project.engine}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
            {project.title}
          </h3>
          <span className="text-text-muted text-sm">{project.year}</span>
        </div>

        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-dark-lighter text-text-muted text-xs rounded-sm border border-dark-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
          {project.demoUrl && project.demoUrl !== '#' && (
            <a
              href={project.demoUrl}
              className="flex items-center gap-1.5 text-text-muted hover:text-gold transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
          {project.videoUrl && project.videoUrl !== '#' && (
            <a
              href={project.videoUrl}
              className="flex items-center gap-1.5 text-text-muted hover:text-gold transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play size={14} />
              Video
            </a>
          )}
          {project.repoUrl && project.repoUrl !== '#' && (
            <a
              href={project.repoUrl}
              className="flex items-center gap-1.5 text-text-muted hover:text-gold transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
