import type { TProject } from '@/types/portfolio.types';

interface IProjectCardProps {
  project: TProject;
}

const ProjectCard = ({ project }: IProjectCardProps) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`relative flex min-h-64 flex-[0_0_100%] flex-col flex-nowrap items-center justify-start gap-y-2.5 overflow-hidden rounded-[0.625rem] border border-solid border-black/12 bg-day-card px-7.5 pt-7.5 pb-6.25 transition-colors duration-200 ease-[ease] hover:border-black/20 hover:bg-day-card-hover md:flex-[0_0_calc(50%-1.5625rem)] lg:flex-[0_0_calc(33.3333333333%-1.5625rem)] dark:border-white/12 dark:bg-night-card dark:hover:border-white/25 dark:hover:bg-night-card-hover ${project.accent}`}
  >
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-0.5 animate-project-bar bg-[var(--project-accent)] motion-reduce:animate-none"
    />

    <h3 className="mr-auto text-step-0 font-medium text-[var(--project-accent)]">
      {project.technology}
    </h3>

    <h4 className="animate-project-title text-center text-step-1 font-bold text-[var(--project-accent)] motion-reduce:animate-none">
      {project.name}
    </h4>

    <p className="mr-auto text-step-0 leading-[1.55]">{project.description}</p>
  </a>
);

export default ProjectCard;
