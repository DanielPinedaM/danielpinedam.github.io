export interface ISkill {
  id: number;
  logo: string;
  logoDark?: string;
  alt: string;
  url: string;
  names: string[];
  width: number;
  height: number;
  widthDark?: number;
  heightDark?: number;
}

export interface ISkillCategory {
  id: number;
  category: string;
  skills: ISkill[];
}

export interface ISkillCardProps {
  skill: ISkill;
}
