import { ChevronDown, Gamepad2 } from "lucide-react";
import ProjectMarquee from "./ProjectMarquee";
import { projects } from "../data/projects";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-shared-portfolio w-full">
      <div className="relative z-10 text-center px-8 lg:px-16 max-w-7xl w-full mx-auto flex flex-col items-center gap-4">
        <div className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-[0.3em] mb-12 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-sm">
          <Gamepad2 size={16} />
          <span>Game Developer</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 tracking-tight">
          Daniel
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-gold-light to-white ml-18">
            Dongo
          </span>
        </h1>

        <p className="text-center text-lg md:text-xl mb-16 max-w-xl w-full leading-relaxed">
          Creo experiencias interactivas memorables. Especializado en gameplay
          programming, sistemas de IA y diseño de mecánicas innovadoras.
        </p>

        <ProjectMarquee projects={projects} />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14">
          <a href="#projects" className="boton-elegante">
            Ver Proyectos
          </a>
          <a href="#contact" className="boton-elegante">
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
