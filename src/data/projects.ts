export interface ProjectMedia {
  type: "image" | "video";
  url: string;
}

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
  media?: ProjectMedia[];
  category: "gamedev" | "webdev";
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "INTERLINK",
    description:
      "Action RPG con combate en tiempo real, sistema de habilidades y exploración de mazmorras generadas proceduralmente.",
    engine: "Unity",
    tags: ["C#", "RPG", "3D", "Procedural"],
    image: "src/assets/Gemini_Generated_Image_apwgw9apwgw9apwg.webp",
    demoUrl: "#",
    videoUrl: "#",
    repoUrl: "#",
    year: 2026,
    category: "gamedev",
    media: [
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-gaming-setup-with-neon-lights-42514-large.mp4",
      },
      {
        type: "image",
        url: "src/assets/Gemini_Generated_Image_apwgw9apwgw9apwg.webp",
      },
      {
        type: "image",
        url: "src/assets/interlink_zero_view.png",
      },
      {
        type: "image",
        url: "src/assets/avoid_light_view.png",
      },
    ],
  },
  {
    id: "project-2",
    title: "Pachamamad Venture",
    description:
      "Juego de carreras futurista con físicas personalizadas, multijugador online y pistas dinámicas.",
    engine: "Unity",
    tags: ["C++", "Pixel Art", "Culture", "2D"],
    image: "src/assets/pachamama_view.png",
    demoUrl: "#",
    videoUrl: "#",
    year: 2025,
    category: "gamedev",
    media: [
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-with-neon-lights-and-rain-31652-large.mp4",
      },
      {
        type: "image",
        url: "src/assets/pachamama_view.png",
      },
      {
        type: "image",
        url: "src/assets/avoid_light_view.png",
      },
      {
        type: "image",
        url: "src/assets/runner_jam_view.png",
      },
    ],
  },
  {
    id: "project-3",
    title: "Runner Jam",
    description:
      "Plataforma 2D estilo retro con puzzles ingeniosos, banda sonora original y más de 40 niveles.",
    engine: "Godot",
    tags: ["GDScript", "3D", "Runner", "Casual"],
    image: "src/assets/runner_jam_view.png",
    demoUrl: "#",
    repoUrl: "#",
    year: 2023,
    category: "gamedev",
    media: [
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-gamer-playing-with-a-controller-42353-large.mp4",
      },
      {
        type: "image",
        url: "src/assets/runner_jam_view.png",
      },
      {
        type: "image",
        url: "src/assets/pachamama_view.png",
      },
      {
        type: "image",
        url: "src/assets/interlink_zero_view.png",
      },
    ],
  },
  {
    id: "project-4",
    title: "Avoid Light",
    description:
      "Estrategia por turnos ambientada en el espacio con sistema de clases, árboles de tecnología y campaña narrativa.",
    engine: "Godot",
    tags: ["GDScript", "Hyper-Casual", "Sci-fi", "2D"],
    image: "src/assets/avoid_light_view.png",
    demoUrl: "#",
    videoUrl: "#",
    year: 2023,
    category: "gamedev",
    media: [
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-gaming-setup-with-neon-lights-42514-large.mp4",
      },
      {
        type: "image",
        url: "src/assets/avoid_light_view.png",
      },
      {
        type: "image",
        url: "src/assets/interlink_zero_view.png",
      },
      {
        type: "image",
        url: "src/assets/runner_jam_view.png",
      },
    ],
  },
  {
    id: "project-5",
    title: "Interlink Zero",
    description:
      "Aventura narrativa con mecánicas de sigilo, IA de enemigos avanzada y múltiples finales.",
    engine: "Unity",
    tags: ["C#", "Horde", "Arcade", "Shooter", "Procedural"],
    image: "src/assets/interlink_zero_view.png",
    demoUrl: "#",
    year: 2023,
    category: "gamedev",
    media: [
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-with-neon-lights-and-rain-31652-large.mp4",
      },
      {
        type: "image",
        url: "src/assets/interlink_zero_view.png",
      },
      {
        type: "image",
        url: "src/assets/pachamama_view.png",
      },
      {
        type: "image",
        url: "src/assets/avoid_light_view.png",
      },
    ],
  },
  {
    id: "project-6",
    title: "Nexus Dash",
    description:
      "Dashboard analítico en tiempo real con widgets personalizables, integración de WebSockets y visualización de datos de alto rendimiento.",
    engine: "React / Node.js",
    tags: ["React", "Node.js", "WebSockets", "Recharts", "Tailwind"],
    image: "src/assets/nexus_dash.jpg",
    demoUrl: "#",
    repoUrl: "#",
    year: 2026,
    category: "webdev",
    media: [
      {
        type: "image",
        url: "src/assets/nexus_dash.jpg",
      },
    ],
  },
  {
    id: "project-7",
    title: "Nova API Gateway",
    description:
      "Microservicio de API Gateway de alto rendimiento con rate-limiting, autenticación JWT, almacenamiento en caché con Redis y balanceo de carga.",
    engine: "Node.js / Express",
    tags: ["Node.js", "Redis", "Docker", "PostgreSQL", "JWT"],
    image: "src/assets/nova_api.jpg",
    demoUrl: "#",
    repoUrl: "#",
    year: 2025,
    category: "webdev",
    media: [
      {
        type: "image",
        url: "src/assets/nova_api.jpg",
      },
    ],
  },
  {
    id: "project-8",
    title: "Aether Commerce",
    description:
      "Plataforma de comercio electrónico headless premium con renderizado híbrido (ISR/SSR), integración de pasarela de pago Stripe y panel de administración.",
    engine: "Next.js / Stripe",
    tags: ["Next.js", "React", "Stripe", "PostgreSQL", "Tailwind CSS"],
    image: "src/assets/aether_commerce.jpg",
    demoUrl: "#",
    repoUrl: "#",
    year: 2025,
    category: "webdev",
    media: [
      {
        type: "image",
        url: "src/assets/aether_commerce.jpg",
      },
    ],
  },
];
