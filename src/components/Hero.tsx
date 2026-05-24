import { ChevronDown, Gamepad2 } from "lucide-react";
import ProjectMarquee from "./ProjectMarquee";
import { projects } from "../data/projects";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark-lighter" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-gold) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>
      
      {/* Premium Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center px-8 lg:px-16 max-w-7xl w-full mx-auto flex flex-col items-center gap-2">
        <div className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-[0.3em] mb-12 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-sm">
          <Gamepad2 size={16} />
          <span>Game Developer</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 tracking-tight">
          Daniel
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-gold-light to-white ml-4">
            Dongo
          </span>
        </h1>

        <p className="text-center text-lg md:text-xl mb-16 max-w-xl w-full leading-relaxed">
          Creo experiencias interactivas memorables. Especializado en gameplay
          programming, sistemas de IA y diseño de mecánicas innovadoras.
        </p>

        <ProjectMarquee projects={projects} />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-dark font-bold rounded-full hover:shadow-[0_0_30px_rgba(229,176,92,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-sm"
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
