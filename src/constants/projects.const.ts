import type { TProject } from '@/types/portfolio.types';

/*
Texto comun a todos los proyectos.

Los tres proyectos son la misma clase de repositorio -una estructura base por
framework-, asi que lo que comparten se explica una sola vez encima de las card
en vez de repetir una descripcion casi identica dentro de cada una */
export const PROJECTS_INTRO = 'Estructuras base para empezar un proyecto en cada framework.';

export const PROJECTS_HIGHLIGHTS = [
  'Arquitectura de software ya definida',
  'Configuración de IA lista: skills y MCP',
  'Se descargan y se empieza a programar de inmediato',
];

export const PROJECTS: TProject[] = [
  {
    id: 1,
    technology: 'Angular',
    category: 'Frontend',
    url: 'https://github.com/DanielPinedaM/arquitectura-base-Angular',
    accent:
      '[--project-accent:var(--color-ink-red)] [--project-accent-pulse:var(--color-ink-red-pulse)] [--project-fluor:var(--color-vivid-red)] [--project-fluor-pulse:var(--color-vivid-red-pulse)] dark:[--project-accent:var(--color-neon-red)] dark:[--project-fluor:var(--color-fluor-red)] dark:[--project-fluor-pulse:var(--color-fluor-red-pulse)] dark:[--project-accent-pulse:var(--color-neon-red-pulse)]',
  },
  {
    id: 2,
    technology: 'React / Next.js',
    category: 'Frontend',
    url: 'https://github.com/DanielPinedaM/arquitectura-base-Next-JS',
    accent:
      '[--project-accent:var(--color-ink-blue)] [--project-accent-pulse:var(--color-ink-blue-pulse)] [--project-fluor:var(--color-vivid-blue)] [--project-fluor-pulse:var(--color-vivid-blue-pulse)] dark:[--project-accent:var(--color-neon-blue)] dark:[--project-fluor:var(--color-fluor-blue)] dark:[--project-fluor-pulse:var(--color-fluor-blue-pulse)] dark:[--project-accent-pulse:var(--color-neon-blue-pulse)]',
  },
  {
    id: 3,
    technology: 'Nest.js',
    category: 'Backend',
    url: 'https://github.com/DanielPinedaM/arquitectura-base-Nest-JS',
    accent:
      '[--project-accent:var(--color-ink-green)] [--project-accent-pulse:var(--color-ink-green-pulse)] [--project-fluor:var(--color-vivid-green)] [--project-fluor-pulse:var(--color-vivid-green-pulse)] dark:[--project-accent:var(--color-neon-green)] dark:[--project-fluor:var(--color-fluor-green)] dark:[--project-fluor-pulse:var(--color-fluor-green-pulse)] dark:[--project-accent-pulse:var(--color-neon-green-pulse)]',
  },
];
