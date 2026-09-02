export type TMenuItem = Record<"label" | "href" | "delay", string> &
  Record<"id", number>;

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
  Record<"id" | "width" | "height", number> &
  Partial<Record<"logoDark", string>> &
  Partial<Record<"widthDark" | "heightDark", number>>;

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
