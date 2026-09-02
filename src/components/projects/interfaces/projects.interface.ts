export interface IProject {
  id: number;
  technology: string;
  category: string;
  url: string;
  accent: string;
}

export interface IProjectCardProps {
  project: IProject;
}
