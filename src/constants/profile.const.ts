export const PROFILE: Record<
  'name' | 'photo' | 'alt' | 'title' | 'description' | 'resumeLabel' | 'resumeUrl',
  string
> &
  Record<'width' | 'height', number> = {
  name: 'Daniel Pineda Mora',
  photo: '/assets/image/icono_progrmador.png',
  alt: 'icono de prorgamador',

  /** tamano real de icono_progrmador.png en px - evita saltos de maquetacion (CLS) */
  width: 512,
  height: 512,

  title: 'Perfil Profesional',
  description:
    'Ingeniero de Sistemas con más de 4 años de experiencia en tecnologías frontend (Angular, React, Next.js e Ionic). Trabajo en aplicaciones web y móviles desde su definición técnica hasta su construcción y publicación, con foco en la experiencia del usuario.',
  resumeLabel: 'HOJA DE VIDA',
  resumeUrl:
    'https://drive.google.com/file/d/1NuBATwtw34FaLn5wAGfHLMFo9xbdu9he/view?usp=drive_link',
};

export const FOOTER: Record<'madeWith' | 'label' | 'logo' | 'alt' | 'url', string> &
  Record<'width' | 'height', number> = {
  madeWith: 'Hecho con ❤️',
  label: 'Ver código portafolio',
  logo: '/assets/image/logo/conocimientos/github.png',
  alt: 'logo de GitHub',

  /** tamano real de github.png en px - evita saltos de maquetacion (CLS) */
  width: 522,
  height: 503,

  url: 'https://github.com/DanielPinedaM/DanielPinedaM.github.io',
};
