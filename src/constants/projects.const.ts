import type { TProject } from '@/types/portfolio.types';

/*
Proyectos

"accentBorder" es el borde superior de la card y "accentText" el color del texto.
El primer color es el del tema claro y el que lleva el prefijo dark: es el del tema oscuro */
export const PROJECTS: TProject[] = [
  {
    technology: 'Angular',
    name: 'Estructura Base Angular',
    description:
      'Base reutilizable para acelerar el desarrollo de aplicaciones empresariales',
    url: 'https://github.com/DanielPinedaM/arquitectura-base-Angular',
    accentBorder: 'border-t-ink-red dark:border-t-neon-red',
    accentText: 'text-ink-red dark:text-neon-red',
  },
  {
    technology: 'React / Next.js',
    name: 'Estructura Base React / Next.js',
    description:
      'Estructura lista para crear aplicaciones web modernas siguiendo estándares y buenas prácticas de desarrollo',
    url: 'https://github.com/DanielPinedaM/arquitectura-base-Next-JS',
    accentBorder: 'border-t-ink-blue dark:border-t-neon-blue',
    accentText: 'text-ink-blue dark:text-neon-blue',
  },
  {
    technology: 'React',
    name: 'Buscador de Películas',
    description:
      'Aplicación web que busca y muestra películas en tiempo real mientras el usuario escribe',
    url: 'https://danielpinedam.github.io/react-api-buscar-peliculas/',
    accentBorder: 'border-t-ink-yellow dark:border-t-neon-yellow',
    accentText: 'text-ink-yellow dark:text-neon-yellow',
  },
  {
    technology: 'React',
    name: 'Rick and Morty',
    description:
      'Aplicación web que consulta y muestra información de personajes mediante el consumo de una API',
    url: 'https://danielpinedam.github.io/react-rick-and-morty-api/',
    accentBorder: 'border-t-ink-green dark:border-t-neon-green',
    accentText: 'text-ink-green dark:text-neon-green',
  },
];
