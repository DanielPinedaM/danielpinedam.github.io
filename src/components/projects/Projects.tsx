import ProjectCard from '@/components/projects/ProjectCard';
import {
  PROJECTS,
  PROJECTS_HIGHLIGHTS,
  PROJECTS_INTRO,
} from '@/constants/projects.const';
import type { TProject } from '@/types/portfolio.types';

const Projects = () => (
  <section id="proyectos">
    <h2 className="mt-12.5 mb-3.75 text-center font-medium hyphens-auto">Proyectos</h2>

    <p className="mx-auto mb-3.75 max-w-[45ch] text-center text-step-0 text-balance text-black/64 dark:text-white/56">
      {PROJECTS_INTRO}
    </p>

    <ul className="mx-auto mb-12.5 w-fit list-disc pl-5 text-step-0 leading-[1.55] text-black/64 marker:text-black/44 dark:text-white/56 dark:marker:text-white/36">
      {PROJECTS_HIGHLIGHTS.map((highlight: string) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>

    <div className="flex flex-row flex-wrap items-stretch justify-center gap-x-6.25 gap-y-12.5">
      {PROJECTS.map((project: TProject) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
