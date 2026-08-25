import SkillCard from '@/components/skills/SkillCard';
import { SKILLS } from '@/constants/skills.const';
import type { TSkill } from '@/types/portfolio.types';

const Skills = () => (
  <section id="conocimientos">
    <h2 className="my-12.5 text-center font-medium hyphens-auto">Conocimientos</h2>

    <div className="flex flex-row flex-wrap items-center justify-center gap-x-2.5 gap-y-0.75 xsm:gap-y-0">
      {SKILLS.map((skill: TSkill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  </section>
);

export default Skills;
