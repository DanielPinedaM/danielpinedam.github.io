import type { TSkill } from '@/types/portfolio.types';

interface ISkillCardProps {
  skill: TSkill;
}

const SkillCard = ({ skill }: ISkillCardProps) => (
  <div className="flex-[0_0_calc(50%-0.625rem)] rounded-[0.625rem] px-[1%] py-[2%] hover:outline-[0.0625rem] hover:outline-night hover:outline-solid xsm:flex-[0_0_calc(33.3333333333%-0.625rem)] sm:flex-[0_0_calc(25%-0.625rem)] md:flex-[0_0_calc(20%-0.625rem)] lg:flex-[0_0_calc(14.2857142857%-0.625rem)] dark:hover:outline-white">
    <picture className="block h-56">
      <img
        src={skill.logo}
        alt={skill.alt}
        className="mx-auto mb-4 h-56 object-contain"
      />
    </picture>

    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto flex max-w-[14.375rem] flex-col items-center justify-center rounded-[1.25rem] border-[0.0625rem] border-solid border-night p-[1.5%] text-center shadow-card hover:bg-night hover:text-white hover:shadow-[0_15px_20px_var(--color-ink-cyan)] active:bg-night active:text-white active:shadow-[0_15px_20px_var(--color-ink-cyan)] dark:border-white dark:hover:bg-black dark:hover:shadow-[0_15px_20px_var(--color-neon-cyan)] dark:active:bg-black dark:active:shadow-[0_15px_20px_var(--color-neon-cyan)]"
    >
      {skill.names.map((name: string) => (
        <h3 key={name} className="text-step-0">
          {name}
        </h3>
      ))}
    </a>
  </div>
);

export default SkillCard;
