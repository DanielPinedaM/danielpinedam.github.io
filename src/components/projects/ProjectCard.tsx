import type { IProjectCardProps } from "@/components/projects/interfaces/projects.interface";

const ProjectCard = ({ project }: IProjectCardProps) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative flex min-h-40 flex-[0_0_100%] flex-col flex-nowrap items-start justify-start gap-y-2 overflow-hidden rounded-[0.625rem] border border-solid border-black/10 bg-day-card px-6.25 pt-6.25 pb-5 transition-colors duration-200 ease-[ease] hover:border-black/18 hover:bg-day-card-hover md:flex-[0_0_calc(50%-1.5625rem)] lg:flex-[0_0_calc(33.3333333333%-1.5625rem)] dark:border-white/12 dark:bg-night-card dark:hover:border-white/25 dark:hover:bg-night-card-hover ${project.accent}`}
  >
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-0.5 animate-project-bar bg-[var(--project-fluor)] motion-reduce:animate-none"
    />

    <p className="text-meta text-black/64 dark:text-white/56">
      {project.category}
    </p>

    <h3 className="animate-project-title text-step-1 font-semibold text-[var(--project-accent)] motion-reduce:animate-none">
      {project.technology}
    </h3>

    <span className="mt-auto flex flex-row flex-nowrap items-center gap-x-1.5 text-step-0 text-black/64 dark:text-white/56">
      Ver repositorio
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-[0.9em] transition-transform duration-200 ease-[ease] group-hover:translate-x-0.5 motion-reduce:transition-none"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </span>
  </a>
);

export default ProjectCard;
