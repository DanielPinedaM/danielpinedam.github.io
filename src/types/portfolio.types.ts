export type TMenuItem = Record<'label' | 'href' | 'delay', string> & Record<'id', number>;

export type TExperience = Record<
  'company' | 'role' | 'date' | 'logoLight' | 'logoDark' | 'alt' | 'url' | 'logoWidth',
  string
> &
  Record<'id', number>;

export type TSkill = Record<'logo' | 'alt' | 'url', string> &
  Record<'names', string[]> &
  Record<'id', number>;

export type TProject = Record<
  'technology' | 'name' | 'description' | 'url' | 'accent',
  string
> &
  Record<'id', number>;

export type TContact = Record<'label' | 'logo' | 'alt' | 'url', string> &
  Record<'id', number>;
