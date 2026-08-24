import ProjectCard from '@/components/projects/ProjectCard';
import { PROJECTS } from '@/constants/projects.const';
import type { TProject } from '@/types/portfolio.types';

const Projects = () => (
  <section id="proyectos">
    <h2 className="my-[3.125rem] text-center font-medium hyphens-auto">Proyectos</h2>

    <div className="flex flex-row flex-wrap items-center justify-center gap-x-[1.5625rem] gap-y-[3.125rem]">
      {PROJECTS.map((project: TProject) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
