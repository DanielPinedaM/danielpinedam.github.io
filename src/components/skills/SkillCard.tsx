import type { TSkill } from '@/types/portfolio.types';

interface ISkillCardProps {
  skill: TSkill;
}

const SkillCard = ({ skill }: ISkillCardProps) => (
  <div className="flex-[0_0_calc(50%-0.625rem)] rounded-[0.625rem] px-[1%] py-[2%] transition-colors duration-200 ease-[ease] hover:bg-black/5 xsm:flex-[0_0_calc(33.3333333333%-0.625rem)] sm:flex-[0_0_calc(25%-0.625rem)] md:flex-[0_0_calc(20%-0.625rem)] lg:flex-[0_0_calc(14.2857142857%-0.625rem)] dark:hover:bg-white/9">
    <picture className="block h-56">
      <img
        src={skill.logo}
        alt={skill.alt}
        width={skill.width}
        height={skill.height}
        loading="lazy"
        decoding="async"
        className="mx-auto mb-4 h-56 object-contain"
      />
    </picture>

    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto flex max-w-57.5 flex-col items-center justify-center rounded-[0.625rem] border border-solid border-black/20 px-3 py-2 text-center transition-colors duration-200 ease-[ease] hover:border-night hover:bg-night hover:text-white active:border-night active:bg-night active:text-white dark:border-white/25 dark:hover:border-white dark:hover:bg-white dark:hover:text-night dark:active:border-white dark:active:bg-white dark:active:text-night"
    >
      {skill.names.map((name: string) => (
        <h4 key={name} className="text-step-0">
          {name}
        </h4>
      ))}
    </a>
  </div>
);

export default SkillCard;
