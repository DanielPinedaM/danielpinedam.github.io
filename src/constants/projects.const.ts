import type { TProject } from '@/types/portfolio.types';

export const PROJECTS: TProject[] = [
  {
    id: 1,
    technology: 'Angular',
    name: 'Estructura Base Angular',
    description:
      'Base reutilizable para acelerar el desarrollo de aplicaciones empresariales',
    url: 'https://github.com/DanielPinedaM/arquitectura-base-Angular',
    accent:
      '[--project-accent:var(--color-ink-red)] [--project-accent-pulse:var(--color-ink-red-pulse)] [--project-fluor:var(--color-vivid-red)] [--project-fluor-pulse:var(--color-vivid-red-pulse)] dark:[--project-accent:var(--color-neon-red)] dark:[--project-fluor:var(--color-fluor-red)] dark:[--project-fluor-pulse:var(--color-fluor-red-pulse)] dark:[--project-accent-pulse:var(--color-neon-red-pulse)]',
  },
  {
    id: 2,
    technology: 'React / Next.js',
    name: 'Estructura Base React / Next.js',
    description:
      'Estructura lista para crear aplicaciones web modernas siguiendo estándares y buenas prácticas de desarrollo',
    url: 'https://github.com/DanielPinedaM/arquitectura-base-Next-JS',
    accent:
      '[--project-accent:var(--color-ink-blue)] [--project-accent-pulse:var(--color-ink-blue-pulse)] [--project-fluor:var(--color-vivid-blue)] [--project-fluor-pulse:var(--color-vivid-blue-pulse)] dark:[--project-accent:var(--color-neon-blue)] dark:[--project-fluor:var(--color-fluor-blue)] dark:[--project-fluor-pulse:var(--color-fluor-blue-pulse)] dark:[--project-accent-pulse:var(--color-neon-blue-pulse)]',
  },
  {
    id: 3,
    technology: 'Nest.js',
    name: 'Estructura Base Nest.js',
    description:
      'Estructura preparada para construir APIs escalables aplicando estándares y buenas prácticas de desarrollo',
    url: 'https://github.com/DanielPinedaM/arquitectura-base-Nest-JS',
    accent:
      '[--project-accent:var(--color-ink-green)] [--project-accent-pulse:var(--color-ink-green-pulse)] [--project-fluor:var(--color-vivid-green)] [--project-fluor-pulse:var(--color-vivid-green-pulse)] dark:[--project-accent:var(--color-neon-green)] dark:[--project-fluor:var(--color-fluor-green)] dark:[--project-fluor-pulse:var(--color-fluor-green-pulse)] dark:[--project-accent-pulse:var(--color-neon-green-pulse)]',
  },
];
