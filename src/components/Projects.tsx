import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { projects, type Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectPanel from "./ProjectPanel";
import { useState } from "react";

export default function Projects() {
  const visibleSections = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<"gamedev" | "webdev">(
    "gamedev",
  );

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory,
  );

  return (
    <section
      id="projects"
      className="portfolio-section bg-shared-portfolio min-h-screen"
    >
      <div className="section-container">
        <div
          id="projects-header"
          data-animate
          className={`section-header ${
            visibleSections.has("projects-header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">
            Una selección de mis trabajos más recientes en desarrollo de
            videojuegos y desarrollo web / backend
          </p>
        </div>

        <div className="flex flex-col gap-7">
          {/* Category Switcher */}
          <div className="flex flex-wrap gap-6 justify-center w-full mb-12">
            <button
              onClick={() => setActiveCategory("gamedev")}
              className={`tab-button ${
                activeCategory === "gamedev" ? "tab-button-active" : ""
              }`}
            >
              🕹️ GameDev
            </button>
            <button
              onClick={() => setActiveCategory("webdev")}
              className={`tab-button ${
                activeCategory === "webdev" ? "tab-button-active" : ""
              }`}
            >
              💻 Frontend & Backend
            </button>
          </div>

          <div
            id="projects-grid"
            data-animate
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pt-16 transition-all duration-700 delay-200 ${
              visibleSections.has("projects-grid")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>
      <ProjectPanel
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
