import ExperienceCard from '@/components/experience/ExperienceCard';
import { EXPERIENCE } from '@/constants/experience.const';
import type { TExperience } from '@/types/portfolio.types';

const Experience = () => (
  <section id="experiencia">
    <h2 className="my-[3.125rem] text-center font-medium hyphens-auto">Experiencia</h2>

    <article className="flex flex-row flex-wrap items-center justify-center gap-x-[7%] gap-y-[30px] md:justify-evenly">
      {EXPERIENCE.map((experience: TExperience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </article>
  </section>
);

export default Experience;
