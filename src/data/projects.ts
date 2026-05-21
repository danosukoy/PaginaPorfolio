export interface Project {
  id: string;
  title: string;
  description: string;
  engine: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  videoUrl?: string;
  repoUrl?: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "INTERLINK",
    description:
      "Action RPG con combate en tiempo real, sistema de habilidades y exploración de mazmorras generadas proceduralmente.",
    engine: "Unity",
    tags: ["C#", "RPG", "3D", "Procedural"],
    image: "https://placehold.co/600x400/1a1a1a/d4a853?text=Shadow+Realm",
    demoUrl: "#",
    videoUrl: "#",
    repoUrl: "#",
    year: 2026,
  },
  {
    id: "project-2",
    title: "Pachamamad Venture",
    description:
      "Juego de carreras futurista con físicas personalizadas, multijugador online y pistas dinámicas.",
    engine: "Unity",
    tags: ["C++", "Pixel Art", "Culture", "2D"],
    image: "https://placehold.co/600x400/1a1a1a/d4a853?text=Neon+Drift",
    demoUrl: "#",
    videoUrl: "#",
    year: 2025,
  },
  {
    id: "project-3",
    title: "Runner Jam",
    description:
      "Plataforma 2D estilo retro con puzzles ingeniosos, banda sonora original y más de 40 niveles.",
    engine: "Godot",
    tags: ["GDScript", "3D", "Runner", "Casual"],
    image: "https://placehold.co/600x400/1a1a1a/d4a853?text=Pixel+Quest",
    demoUrl: "#",
    repoUrl: "#",
    year: 2023,
  },
  {
    id: "project-4",
    title: "Avoid Light",
    description:
      "Estrategia por turnos ambientada en el espacio con sistema de clases, árboles de tecnología y campaña narrativa.",
    engine: "Godot",
    tags: ["GDScript", "Hyper-Casual", "Sci-fi", "2D"],
    image: "https://placehold.co/600x400/1a1a1a/d4a853?text=Void+Tactics",
    demoUrl: "#",
    videoUrl: "#",
    year: 2023,
  },
  {
    id: "project-5",
    title: "Interlink Zero",
    description:
      "Aventura narrativa con mecánicas de sigilo, IA de enemigos avanzada y múltiples finales.",
    engine: "Unity",
    tags: ["C#", "Horde", "Arcade", "Shooter", "Procedural"],
    image: "https://placehold.co/600x400/1a1a1a/d4a853?text=Echoes+Forest",
    demoUrl: "#",
    year: 2023,
  },
];
