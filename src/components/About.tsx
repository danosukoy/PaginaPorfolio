import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "Game Developer",
    company: "Studio XYZ",
    period: "2024 - Presente",
    location: "Remoto",
    description:
      "Desarrollo de gameplay systems, IA de enemigos y optimización de rendimiento para título AA.",
  },
  {
    role: "Junior Game Programmer",
    company: "Indie Studio ABC",
    period: "2022 - 2024",
    location: "Madrid, España",
    description:
      "Implementación de mecánicas de juego, integración de assets y debugging multiplataforma.",
  },
  {
    role: "Game Dev Intern",
    company: "GameJam Collective",
    period: "2021 - 2022",
    location: "Barcelona, España",
    description:
      "Participación en múltiples game jams, prototipado rápido y desarrollo de juegos mobile.",
  },
];

const education = [
  {
    degree: "Especialización Frontend & Backend Developer",
    institution: "Tech Academy",
    period: "2023",
    description: "Profundización en desarrollo web fullstack, APIs REST, Node.js y arquitectura en la nube (AWS/Docker).",
  },
  {
    degree: "Grado en Desarrollo de Videojuegos",
    institution: "Universidad de Tecnología y Arte",
    period: "2018 - 2022",
    description: "Especialización en programación gráfica, física de videojuegos y desarrollo de motores con C++ y Unity.",
  }
];

export default function About() {
  const visibleSections = useScrollAnimation();

  return (
    <section id="about" className="portfolio-section bg-shared-portfolio">
      <div className="section-container">
        
        {/* Unified Section Header */}
        <div
          id="about-header"
          data-animate
          className={`section-header ${
            visibleSections.has("about-header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-tag">Sobre mí</span>
          <h2 className="section-title">Mi Trayectoria</h2>
          <p className="section-subtitle">
            Conoce más sobre mi pasión por el desarrollo de videojuegos, ingeniería de software y mi experiencia profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column: Bio Details */}
          <div
            id="about-bio"
            data-animate
            className={`flex flex-col gap-10 transition-all duration-700 ${
              visibleSections.has("about-bio")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4">
              <span className="text-gold/80 text-sm font-semibold tracking-wider uppercase">
                Quién soy
              </span>
              <h3 className="text-3xl font-bold text-white leading-tight">
                Developer enfocado en crear experiencias interactivas y robustas
              </h3>
            </div>
            
            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>
                Soy un desarrollador con más de 3 años de experiencia en la creación 
                de videojuegos y desarrollo web. Mi enfoque principal está en el 
                gameplay programming y en construir arquitecturas frontend y backend 
                que ofrezcan experiencias de usuario excelentes y alto rendimiento.
              </p>
              <p>
                He trabajado en entornos indie y proyectos colaborativos desarrollando 
                sistemas complejos de IA, mecánicas de juego en 3D/2D con Unity y Godot, 
                así como aplicaciones web modernas utilizando React, Node.js y bases de datos.
              </p>
              <p>
                Me entusiasma aprender continuamente, participar en hackathons, 
                game jams y explorar tecnologías en la intersección del software web 
                y el desarrollo interactivo.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-text-muted">
                <Calendar size={16} className="text-gold" />
                <span className="text-sm">3+ años de experiencia</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Briefcase size={16} className="text-gold" />
                <span className="text-sm">10+ proyectos completados</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <MapPin size={16} className="text-gold" />
                <span className="text-sm">España</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Groups (Experience & Education) */}
          <div
            id="about-experience"
            data-animate
            className={`flex flex-col gap-12 transition-all duration-700 delay-200 ${
              visibleSections.has("about-experience")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Experience Group */}
            <div>
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase size={20} className="text-gold" />
                Experiencia Laboral
              </h3>
              <div className="flex flex-col gap-0">
                {experience.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-bullet" />
                    <div className="timeline-header">
                      <h4 className="timeline-title">{exp.role}</h4>
                      <p className="timeline-subtitle">{exp.company}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-badge">
                        {exp.period}
                      </span>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </div>
                    <p className="timeline-description">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Group */}
            <div className="pt-6 border-t border-white/5">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap size={20} className="text-gold" />
                Educación y Certificaciones
              </h3>
              <div className="flex flex-col gap-0">
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-bullet" />
                    <div className="timeline-header">
                      <h4 className="timeline-title">{edu.degree}</h4>
                      <p className="timeline-subtitle">{edu.institution}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-badge">
                        {edu.period}
                      </span>
                    </div>
                    <p className="timeline-description">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
