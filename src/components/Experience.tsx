import { EXPERIENCE } from '@/constants/experience.const';
import type { TExperience } from '@/types/portfolio.types';

/*
Experiencia laboral */
const Experience = () => (
  <section id="experiencia">
    <h2 className="my-[3.125rem] text-center font-medium hyphens-auto">Experiencia</h2>

    <article className="flex flex-row flex-wrap items-center justify-center gap-x-[7%] gap-y-[30px] md:justify-evenly">
      {EXPERIENCE.map((experience: TExperience) => (
        <a
          key={experience.company}
          href={experience.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-[0_1_21.25rem] flex-row flex-nowrap items-center justify-center gap-x-[0.9375rem] text-left"
        >
          <div
            className={`flex items-center justify-center ${experience.logoWidth}`}
          >
            <picture>
              {/* se muestra un logo u otro segun el tema con el prefijo dark: de Tailwind */}
              <img
                src={experience.logoLight}
                alt={experience.alt}
                className="mx-auto dark:hidden"
              />

              <img
                src={experience.logoDark}
                alt={experience.alt}
                className="mx-auto hidden dark:block"
              />
            </picture>
          </div>

          <div className="w-full">
            <h4 className="text-step-1 font-bold">{experience.company}</h4>

            <p className="text-step-0 font-medium">{experience.role}</p>

            <time className="block text-meta font-medium italic">{experience.date}</time>
          </div>
        </a>
      ))}
    </article>
  </section>
);

export default Experience;
