export type TMenuItem = Record<"label" | "href" | "delay", string> &
  Record<"id", number>;

/*
logoWidth de TExperience -> clase de Tailwind que limita el ancho visual del logo (max-w-*)

En TExperience y TSkill:

width y height -> tamano REAL del archivo de imagen en px. Se pintan como
atributos width y height del <img> para que el navegador calcule la relacion
de aspecto y reserve el espacio ANTES de descargar la imagen, en vez de
empujar el contenido cuando termina de cargar (Cumulative Layout Shift)
https://web.dev/articles/optimize-cls

TContact NO los lleva */

export type TExperience = Record<
  | "company"
  | "role"
  | "date"
  | "logoLight"
  | "logoDark"
  | "alt"
  | "url"
  | "logoWidth",
  string
> &
  Record<"id" | "width" | "height", number>;

export type TSkill = Record<"logo" | "alt" | "url", string> &
  Record<"names", string[]> &
  Record<"id" | "width" | "height", number>;

export type TSkillCategory = Record<"category", string> &
  Record<"skills", TSkill[]> &
  Record<"id", number>;

export type TProject = Record<
  "technology" | "category" | "url" | "accent",
  string
> &
  Record<"id", number>;

export type TContact = Record<"label" | "logo" | "alt" | "url", string> &
  Record<"id", number>;
