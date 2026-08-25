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
      '[--project-accent:var(--color-ink-red)] [--project-accent-pulse:var(--color-ink-red-pulse)] dark:[--project-accent:var(--color-neon-red)] dark:[--project-accent-pulse:var(--color-neon-red-pulse)]',
  },
  {
    id: 2,
    technology: 'React / Next.js',
    name: 'Estructura Base React / Next.js',
    description:
      'Estructura lista para crear aplicaciones web modernas siguiendo estándares y buenas prácticas de desarrollo',
    url: 'https://github.com/DanielPinedaM/arquitectura-base-Next-JS',
    accent:
      '[--project-accent:var(--color-ink-blue)] [--project-accent-pulse:var(--color-ink-blue-pulse)] dark:[--project-accent:var(--color-neon-blue)] dark:[--project-accent-pulse:var(--color-neon-blue-pulse)]',
  },
  {
    id: 3,
    technology: 'React',
    name: 'Buscador de Películas',
    description:
      'Aplicación web que busca y muestra películas en tiempo real mientras el usuario escribe',
    url: 'https://danielpinedam.github.io/react-api-buscar-peliculas/',
    accent:
      '[--project-accent:var(--color-ink-yellow)] [--project-accent-pulse:var(--color-ink-yellow-pulse)] dark:[--project-accent:var(--color-neon-yellow)] dark:[--project-accent-pulse:var(--color-neon-yellow-pulse)]',
  },
  {
    id: 4,
    technology: 'React',
    name: 'Rick and Morty',
    description:
      'Aplicación web que consulta y muestra información de personajes mediante el consumo de una API',
    url: 'https://danielpinedam.github.io/react-rick-and-morty-api/',
    accent:
      '[--project-accent:var(--color-ink-green)] [--project-accent-pulse:var(--color-ink-green-pulse)] dark:[--project-accent:var(--color-neon-green)] dark:[--project-accent-pulse:var(--color-neon-green-pulse)]',
  },
];
