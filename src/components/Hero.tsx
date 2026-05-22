import { ChevronDown, Gamepad2 } from "lucide-react";
import ProjectMarquee from "./ProjectMarquee";
import { projects } from "../data/projects";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark-lighter" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-gold) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-8 lg:px-16 w-full flex flex-col items-center">
        <div className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-[0.3em] mb-8">
          <Gamepad2 size={16} />
          <span>Game Developer</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Daniel
          <span className="text-gold"> Dongo</span>
        </h1>

        <p className="text-center text-lg md:text-xl mb-14 max-w-xl mx-auto leading-relaxed">
          Creo experiencias interactivas memorables. Especializado en gameplay
          programming, sistemas de IA y diseño de mecánicas innovadoras.
        </p>

        <ProjectMarquee projects={projects} />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-3 bg-gold text-dark font-semibold rounded-sm hover:bg-gold-light transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gold/50 text-gold font-semibold rounded-sm hover:bg-gold/10 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Contacto
          </a>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
