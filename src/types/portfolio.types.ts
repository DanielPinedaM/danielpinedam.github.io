/*
Tipos de las constantes que se iteran con .map() */

/* enlace del menu de navegacion */
export type TMenuItem = Record<'label' | 'href' | 'delay', string>;

/* card de experiencia laboral - hay un logo por tema porque el de TASS COL es blanco */
export type TExperience = Record<
  'company' | 'role' | 'date' | 'logoLight' | 'logoDark' | 'alt' | 'url' | 'logoWidth',
  string
>;

/* card de conocimiento - "names" es un array porque una card puede tener varios titulos */
export type TSkill = Record<'logo' | 'alt' | 'url', string> & Record<'names', string[]>;

/* card de proyecto - "accent*" son las clases de Tailwind del color de la card */
export type TProject = Record<
  'technology' | 'name' | 'description' | 'url' | 'accentBorder' | 'accentText',
  string
>;

/* enlace de contacto */
export type TContact = Record<'label' | 'logo' | 'alt' | 'url', string>;
