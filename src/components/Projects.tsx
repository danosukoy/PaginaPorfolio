import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const visibleSections = useScrollAnimation();

  return (
    <section
      id="projects"
      className="py-40 px-8 lg:px-16 w-full flex flex-col items-center"
    >
      <div className="max-w-6xl mx-auto">
        <div
          id="projects-header"
          data-animate
          className={`text-center mb-20 transition-all duration-700 ${
            visibleSections.has("projects-header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em]">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-text-muted text-center">
            Una selección de mis trabajos más recientes en desarrollo de
            videojuegos
          </p>
        </div>

        <div
          id="projects-grid"
          data-animate
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
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
