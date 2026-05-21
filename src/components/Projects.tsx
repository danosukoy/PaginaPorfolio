import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const visibleSections = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          id="projects-header"
          data-animate
          className={`text-center mb-16 transition-all duration-700 ${
            visibleSections.has("projects-header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em]">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Una selección de mis trabajos más recientes en desarrollo de
            videojuegos
          </p>
        </div>

        <div
          id="projects-grid"
          data-animate
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            visibleSections.has("projects-grid")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
