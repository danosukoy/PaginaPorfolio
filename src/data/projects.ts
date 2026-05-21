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
    title: "Shadow Realm",
    description:
      "Action RPG con combate en tiempo real, sistema de habilidades y exploración de mazmorras generadas proceduralmente.",
    engine: "Unity",
    tags: ["C#", "RPG", "3D", "Procedural"],
    image: "https://placehold.co/600x400/1a1a1a/d4a853?text=Shadow+Realm",
    demoUrl: "#",
    videoUrl: "#",
    repoUrl: "#",
    year: 2020,
  },
  {
    id: "project-2",
    title: "Neon Drift",
    description:
      "Juego de carreras futurista con físicas personalizadas, multijugador online y pistas dinámicas.",
    engine: "Unreal Engine 5",
    tags: ["C++", "Racing", "Multiplayer", "Online"],
    image: "https://placehold.co/600x400/1a1a1a/d4a853?text=Neon+Drift",
    demoUrl: "#",
    videoUrl: "#",
    year: 2025,
  },
  {
    id: "project-3",
    title: "Pixel Quest",
    description:
      "Plataforma 2D estilo retro con puzzles ingeniosos, banda sonora original y más de 40 niveles.",
    engine: "Godot",
    tags: ["GDScript", "2D", "Platformer", "Pixel Art"],
    image: "https://placehold.co/600x400/1a1a1a/d4a853?text=Pixel+Quest",
    demoUrl: "#",
    repoUrl: "#",
    year: 2024,
  },
  {
    id: "project-4",
    title: "Void Tactics",
    description:
      "Estrategia por turnos ambientada en el espacio con sistema de clases, árboles de tecnología y campaña narrativa.",
    engine: "Unity",
    tags: ["C#", "Strategy", "Turn-Based", "Sci-Fi"],
    image: "https://placehold.co/600x400/1a1a1a/d4a853?text=Void+Tactics",
    demoUrl: "#",
    videoUrl: "#",
    year: 2024,
  },
  {
    id: "project-5",
    title: "Echoes of the Forest",
    description:
      "Aventura narrativa con mecánicas de sigilo, IA de enemigos avanzada y múltiples finales.",
    engine: "Unreal Engine 5",
    tags: ["Blueprints", "Adventure", "Stealth", "Narrative"],
    image: "https://placehold.co/600x400/1a1a1a/d4a853?text=Echoes+Forest",
    demoUrl: "#",
    year: 2023,
  },
  {
    id: "project-6",
    title: "Stack Crash",
    description:
      "Hypercasual mobile game con más de 100K descargas, sistema de leaderboards y daily challenges.",
    engine: "Godot",
    tags: ["GDScript", "Mobile", "Hypercasual", "iOS/Android"],
    image: "https://placehold.co/600x400/1a1a1a/d4a853?text=Stack+Crash",
    demoUrl: "#",
    year: 2023,
  },
];
