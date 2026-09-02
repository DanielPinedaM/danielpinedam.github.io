import SkillCard from '@/components/skills/SkillCard';
import { SKILL_CATEGORIES } from '@/constants/skills.const';
import type { TSkill, TSkillCategory } from '@/types/portfolio.types';

const Skills = () => (
  <section id="conocimientos">
    <h2 className="my-12.5 text-center font-medium hyphens-auto">Conocimientos</h2>

    {SKILL_CATEGORIES.map((skillCategory: TSkillCategory) => (
      <article key={skillCategory.id} className="mb-20 last:mb-0">
        <h3 className="mb-2.5 text-center text-step-1 font-medium hyphens-auto">
          {skillCategory.category}
        </h3>

        <div className="flex flex-row flex-wrap items-center justify-center gap-x-2.5 gap-y-0.75 xsm:gap-y-0">
          {skillCategory.skills.map((skill: TSkill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </article>
    ))}
  </section>
);

export default Skills;
