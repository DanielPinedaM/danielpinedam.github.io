import SkillCard from '@/components/skills/SkillCard';
import { SKILLS } from '@/constants/skills.const';
import type { TSkill } from '@/types/portfolio.types';

const Skills = () => (
  <section id="conocimientos">
    <h2 className="my-[3.125rem] text-center font-medium hyphens-auto">Conocimientos</h2>

    <div className="flex flex-row flex-wrap items-center justify-center gap-x-[0.625rem] gap-y-[0.1875rem] xsm:gap-y-0">
      {SKILLS.map((skill: TSkill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  </section>
);

export default Skills;
