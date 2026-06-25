import { useEffect, useState } from "react";
import type { Project } from "../data/projects";
import { Play, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

// Icono Github personalizado para coincidir con el diseño del resto de la página
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

interface ProjectPanelProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectPanel({
  project,
  isOpen,
  onClose,
}: ProjectPanelProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  useEffect(() => {
    setActiveMediaIndex(0);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;
      
      const mediaList = project.media || [{ type: "image", url: project.image }];
      
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setActiveMediaIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
      } else if (e.key === "ArrowRight") {
        setActiveMediaIndex((prev) => (prev + 1) % mediaList.length);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, project, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!project) return null;

  const mediaList = project.media || [{ type: "image", url: project.image }];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => (prev + 1) % mediaList.length);
  };

  return (
    <>
      {/* Backdrop oscuro */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal Centrado Steam-like */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] max-w-5xl max-h-[90vh] bg-dark-card border border-dark-border backdrop-blur-2xl rounded-2xl p-6 md:p-8 transform transition-all duration-300 ease-out flex flex-col md:grid md:grid-cols-5 gap-6 md:gap-8 overflow-y-auto ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={`Detalles de ${project.title}`}
      >
        {/* Columna Izquierda: Galería Steam-like (col-span-3) */}
        <div className="md:col-span-3 flex flex-col w-full">
          {/* Visualizador Principal */}
          <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center group/viewer">
            {mediaList[activeMediaIndex].type === "video" ? (
              <video
                key={activeMediaIndex}
                src={mediaList[activeMediaIndex].url}
                className="w-full h-full object-contain"
                autoPlay
                muted
                loop
                controls
                playsInline
              />
            ) : (
              <img
                src={mediaList[activeMediaIndex].url}
                alt={`${project.title} - Captura ${activeMediaIndex}`}
                className="w-full h-full object-contain"
              />
            )}

            {/* Controles de Navegación del visualizador (sólo si hay más de 1 medio) */}
            {mediaList.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-gold hover:text-black text-white transition-all opacity-0 group-hover/viewer:opacity-100 cursor-pointer shadow-lg backdrop-blur-sm"
                  aria-label="Medio anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-gold hover:text-black text-white transition-all opacity-0 group-hover/viewer:opacity-100 cursor-pointer shadow-lg backdrop-blur-sm"
                  aria-label="Siguiente medio"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Indicador de posición */}
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/75 text-[10px] md:text-xs text-white/60 select-none font-medium border border-white/5">
              {activeMediaIndex + 1} / {mediaList.length}
            </div>
          </div>

          {/* Carrusel de Miniaturas (Thumbnails) */}
          {mediaList.length > 1 && (
            <div className="flex gap-2.5 mt-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gold scrollbar-track-transparent">
              {mediaList.map((media, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMediaIndex(idx)}
                  className={`relative flex-shrink-0 w-20 md:w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    idx === activeMediaIndex
                      ? "border-gold scale-[0.98] shadow-[0_0_12px_rgba(229,176,92,0.4)]"
                      : "border-transparent opacity-50 hover:opacity-100 hover:scale-[0.98]"
                  }`}
                >
                  {media.type === "video" ? (
                    <div className="relative w-full h-full bg-black">
                      {/* Usamos la imagen principal del proyecto como fondo de la miniatura de video */}
                      <img
                        src={project.image}
                        alt="Miniatura de video"
                        className="w-full h-full object-cover opacity-60 blur-[0.5px]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="p-1.5 rounded-full bg-gold/90 text-dark flex items-center justify-center shadow-lg">
                          <Play size={12} className="fill-dark text-dark" />
                        </span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={media.url}
                      alt={`Miniatura ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Columna Derecha: Detalles del Proyecto (col-span-2) */}
        <div className="md:col-span-2 flex flex-col justify-between w-full h-full">
          <div>
            {/* Título y Cerrar */}
            <div className="flex justify-between items-start gap-4 mb-3">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-white tracking-tight leading-tight">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Cerrar panel"
              >
                <X size={20} />
              </button>
            </div>

            {/* Badges de Información Rápida */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-2.5 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-md border border-gold/20 uppercase tracking-wider">
                {project.engine}
              </span>
              <span className="px-2.5 py-1 bg-white/5 text-white/70 text-xs font-semibold rounded-md border border-white/5">
                {project.year}
              </span>
            </div>

            {/* Ficha Técnica Estilo Steam */}
            <div className="bg-dark/45 border border-white/5 rounded-xl p-4 mb-5 space-y-2.5">
              <div className="grid grid-cols-3 text-xs border-b border-white/5 pb-2">
                <span className="text-text-muted font-medium">DESARROLLADOR:</span>
                <span className="col-span-2 text-white font-medium">Yo</span>
              </div>
              <div className="grid grid-cols-3 text-xs border-b border-white/5 pb-2">
                <span className="text-text-muted font-medium">
                  {project.category === "gamedev" ? "MOTOR:" : "STACK:"}
                </span>
                <span className="col-span-2 text-gold font-medium">{project.engine}</span>
              </div>
              <div className="grid grid-cols-3 text-xs border-b border-white/5 pb-2">
                <span className="text-text-muted font-medium">AÑO DE LANZAMIENTO:</span>
                <span className="col-span-2 text-white/90">{project.year}</span>
              </div>
              <div className="grid grid-cols-3 text-xs">
                <span className="text-text-muted font-medium">CATEGORÍAS:</span>
                <div className="col-span-2 flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] md:text-[10px] bg-white/5 text-white/70 px-2 py-0.5 rounded border border-white/5 hover:border-gold/20 hover:text-gold transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Acerca de este proyecto</h3>
              <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </div>

          {/* Enlaces de Acción en la parte inferior */}
          <div className="space-y-2.5 pt-4 border-t border-white/5">
            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gold hover:bg-gold-light text-dark font-bold rounded-xl transition-all text-sm shadow-[0_4px_16px_rgba(229,176,92,0.2)] hover:scale-[1.01] active:scale-[0.99]"
              >
                <ExternalLink size={16} />
                Jugar Demo Gratis
              </a>
            )}

            <div className="flex gap-2.5">
              {project.videoUrl && project.videoUrl !== "#" && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Play size={12} className="fill-white" />
                  Trailer
                </a>
              )}

              {project.repoUrl && project.repoUrl !== "#" && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <GithubIcon />
                  Ver Código
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
