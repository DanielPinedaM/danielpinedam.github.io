import { PROJECTS } from '@/constants/projects.const';
import type { TProject } from '@/types/portfolio.types';

/*
Proyectos

Cada card tiene un borde superior de color y el nombre del proyecto late
https://jacekjeznach.com/ */
const Projects = () => (
  <section id="proyectos">
    <h2 className="my-[3.125rem] text-center font-medium hyphens-auto">Proyectos</h2>

    <div className="flex flex-row flex-wrap items-center justify-center gap-x-[1.5625rem] gap-y-[3.125rem]">
      {PROJECTS.map((project: TProject) => (
        <a
          key={project.url}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex min-h-[17.1875rem] flex-[0_0_100%] flex-col flex-nowrap items-center justify-start gap-y-[0.625rem] rounded-t-[0.625rem] border-t-2 border-r-[0.01px] border-b-[0.01px] border-l-[0.01px] border-solid border-black/20 bg-day-card bg-[url(/assets/image/fondo_transparente.png)] bg-[length:100%_100%] bg-fixed bg-center bg-no-repeat px-[1.875rem] pt-[1.875rem] pb-[1.5625rem] shadow-project md:flex-[0_0_calc(50%-1.5625rem)] lg:flex-[0_0_calc(33.3333333333%-1.5625rem)] dark:bg-night-card ${project.accentBorder}`}
        >
          <h3
            className={`mr-auto text-step-0 font-extralight ${project.accentText}`}
          >
            {project.technology}
          </h3>

          <h4
            className={`animate-project-title text-center text-step-1 font-bold ${project.accentText}`}
          >
            {project.name}
          </h4>

          <p className="mr-auto text-step-0">{project.description}</p>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
