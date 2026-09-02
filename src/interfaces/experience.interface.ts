export interface IExperience {
  id: number;
  company: string;
  role: string;
  date: string;
  logoLight: string;
  logoDark: string;
  alt: string;
  url: string;
  logoWidth: string;
  width: number;
  height: number;
}

export interface IExperienceCardProps {
  experience: IExperience;
}
