import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experience = [
  {
    role: 'Game Developer',
    company: 'Studio XYZ',
    period: '2024 - Presente',
    location: 'Remoto',
    description: 'Desarrollo de gameplay systems, IA de enemigos y optimización de rendimiento para título AA.',
  },
  {
    role: 'Junior Game Programmer',
    company: 'Indie Studio ABC',
    period: '2022 - 2024',
    location: 'Madrid, España',
    description: 'Implementación de mecánicas de juego, integración de assets y debugging multiplataforma.',
  },
  {
    role: 'Game Dev Intern',
    company: 'GameJam Collective',
    period: '2021 - 2022',
    location: 'Barcelona, España',
    description: 'Participación en múltiples game jams, prototipado rápido y desarrollo de juegos mobile.',
  },
];

export default function About() {
  const visibleSections = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div
            id="about-bio"
            data-animate
            className={`transition-all duration-700 ${
              visibleSections.has('about-bio') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em]">Sobre mí</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Passionate Game Developer
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Soy un desarrollador de videojuegos con más de 3 años de experiencia creando 
                experiencias interactivas en múltiples plataformas. Mi pasión está en el gameplay 
                programming y la creación de sistemas que hacen que los juegos se sientan bien.
              </p>
              <p>
                He trabajado con Unity, Unreal Engine y Godot, desarrollando desde juegos mobile 
                hypercasual hasta proyectos AA con sistemas complejos de IA y multijugador.
              </p>
              <p>
                Cuando no estoy programando, participo en game jams, contribuyo a proyectos 
                open source y experimento con nuevas tecnologías de rendering y procedural generation.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
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

          <div
            id="about-experience"
            data-animate
            className={`transition-all duration-700 delay-200 ${
              visibleSections.has('about-experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Experiencia</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-dark-border hover:border-gold/50 transition-colors group"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-dark-border group-hover:bg-gold transition-colors" />
                  <div className="mb-1">
                    <h4 className="text-white font-semibold">{exp.role}</h4>
                    <p className="text-gold text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-4 text-text-muted text-sm mb-2">
                    <span>{exp.period}</span>
                    <span>·</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
