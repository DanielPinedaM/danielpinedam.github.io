import type { TExperience } from "@/types/portfolio.types";

interface IExperienceCardProps {
  experience: TExperience;
}

const UNDERLINE: string =
  "bg-[linear-gradient(currentColor,currentColor)] bg-position-[0_100%] bg-size-[0%_1px] bg-no-repeat transition-[background-size] duration-300 ease-[ease] motion-reduce:transition-none";

const ExperienceCard = ({ experience }: IExperienceCardProps) => (
  <a
    href={experience.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group/experience flex flex-[0_1_21.25rem] flex-row flex-nowrap items-center justify-center gap-x-3.75 text-left"
  >
    <div className={`flex items-center justify-center ${experience.logoWidth}`}>
      <picture>
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
      <h4
        className={`${UNDERLINE} w-fit text-step-1 font-bold group-hover/experience:bg-size-[100%_1px]`}
      >
        {experience.company}
      </h4>

      <p className="text-step-0 font-medium">{experience.role}</p>

      <time className="block text-meta font-medium italic">
        {experience.date}
      </time>
    </div>
  </a>
);

export default ExperienceCard;
