import type { TMenuItem } from '@/types/portfolio.types';

/*
Enlaces del menu de navegacion

"delay" escalona la entrada de cada enlace cuando se abre el menu:
equivale a calc(var(--td) * 2 * (n * 0.25)) del portafolio en HTML, CSS y JavaScript */
export const MENU_ITEMS: TMenuItem[] = [
  {
    label: 'Perfil Profesional',
    href: '#perfil_profesional',
    delay: 'delay-[75ms]',
  },
  {
    label: 'Experiencia',
    href: '#experiencia',
    delay: 'delay-[150ms]',
  },
  {
    label: 'Conocimientos',
    href: '#conocimientos',
    delay: 'delay-[225ms]',
  },
  {
    label: 'Proyectos',
    href: '#proyectos',
    delay: 'delay-[300ms]',
  },
  {
    label: 'Contáctame',
    href: '#contactame',
    delay: 'delay-[375ms]',
  },
];
