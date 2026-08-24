import type { TExperience } from '@/types/portfolio.types';

/*
Experiencia laboral

El logo de TASS COL es blanco, asi que sobre el fondo del tema claro es invisible.
Por eso tiene dos variantes de la misma marca: la blanca para el tema oscuro
y la negra para el tema claro. Los otros dos logos se ven bien en los dos temas */
export const EXPERIENCE: TExperience[] = [
  {
    company: 'TASS COL',
    role: 'Desarrollador Frontend y Móvil',
    date: 'Octubre 2023 - Julio 2026',
    logoLight: '/assets/image/logo/experiencia/TASS-COL/TASS-11.png',
    logoDark: '/assets/image/logo/experiencia/TASS-COL/TASS-1.png',
    alt: 'logo de Telemetry And Security Systems (TASS COL)',
    url: 'https://www.tasstech.co/',
    logoWidth: 'max-w-[5.625rem]',
  },
  {
    company: 'Different Roads',
    role: 'Desarrollador frontend',
    date: 'Junio 2022 - Septiembre 2023',
    logoLight: '/assets/image/logo/experiencia/different_roads.png',
    logoDark: '/assets/image/logo/experiencia/different_roads.png',
    alt: 'logo de Different Roads',
    url: 'https://www.differentroads.es/',
    logoWidth: 'max-w-[5.625rem]',
  },
  {
    company: 'Bancolombia',
    role: 'Desarrollador de Automatización',
    date: 'Octubre 2021 - Mayo 2022',
    logoLight: '/assets/image/logo/experiencia/bancolombia.png',
    logoDark: '/assets/image/logo/experiencia/bancolombia.png',
    alt: 'logo de Bancolombia',
    url: 'https://www.bancolombia.com/personas',
    logoWidth: 'max-w-[5.9375rem]',
  },
];
