import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Code2, Gamepad2, Layers, Terminal, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Gamepad2,
    title: "Game Engines",
    skills: ["Unity", "Unreal Engine 5", "Godot", "Custom Engines"],
  },
  {
    icon: Code2,
    title: "Lenguajes",
    skills: ["C#", "C++", "GDScript", "TypeScript", "Python", "Lua"],
  },
  {
    icon: Brain,
    title: "Especialidades",
    skills: [
      "Gameplay Programming",
      "AI Systems",
      "Physics",
      "Multiplayer",
      "Shader Programming",
    ],
  },
  {
    icon: Layers,
    title: "Herramientas",
    skills: ["Git", "Perforce", "Jira", "Blender", "FMOD", "Visual Studio"],
  },
  {
    icon: Terminal,
    title: "Backend & Web",
    skills: ["Node.js", "REST APIs", "WebSockets", "Docker", "AWS"],
  },
  {
    icon: Wrench,
    title: "Otros",
    skills: [
      "CI/CD",
      "Agile/Scrum",
      "Code Review",
      "Technical Design",
      "Optimization",
    ],
  },
];

export default function Skills() {
  const visibleSections = useScrollAnimation();

  return (
    <section
      id="skills"
      className="py-40 px-8 lg:px-16 bg-dark-lighter w-full flex flex-col items-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div
          id="skills-header"
          data-animate
          className={`text-center mb-20 transition-all duration-700 ${
            visibleSections.has("skills-header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em]">
            Habilidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Tech Stack
          </h2>
          <p className="text-text-muted text-center">
            Tecnologías y herramientas que uso para dar vida a los juegos
          </p>
        </div>

        <div
          id="skills-grid"
          data-animate
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
            visibleSections.has("skills-grid")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-dark-card border border-dark-border rounded-sm p-8 hover:border-gold/50 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gold/10 rounded-sm group-hover:bg-gold/20 transition-colors">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-dark-lighter text-text-muted text-sm rounded-sm border border-dark-border hover:border-gold/30 hover:text-gold transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
