import { PROFILE } from '@/constants/profile.const';

const ProfessionalProfile = () => (
  <article
    id="perfil_profesional"
    className="flex flex-row flex-wrap items-center text-step-0"
  >
    <figure className="flex flex-[0_0_100%] flex-col flex-nowrap items-center justify-center text-center sm:flex-[0_0_50%]">
      <figcaption className="mb-4 text-step-3 font-medium">{PROFILE.name}</figcaption>

      <img
        src={PROFILE.photo}
        alt={PROFILE.alt}
        className="mx-auto max-w-[70%] rounded-[1.25rem] border-t-0 shadow-card outline-[0.0063rem] outline-night outline-solid xsm:max-w-[50%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[45%] dark:outline-white"
      />
    </figure>

    <section className="flex-[0_0_100%] sm:flex-[0_0_50%]">
      <h2 className="my-4 text-center font-medium hyphens-auto">{PROFILE.title}</h2>

      <p>{PROFILE.description}</p>

      <a
        href={PROFILE.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative mx-auto mt-[1.2rem] flex h-20 max-w-57.5 cursor-pointer items-center justify-center overflow-hidden rounded-[1.25rem] border-5 border-solid border-ink-teal text-center font-medium text-ink-teal shadow-card transition-all duration-300 ease-[ease] hover:bg-ink-teal hover:font-extrabold hover:text-white active:bg-ink-teal active:font-extrabold active:text-white dark:border-neon-teal dark:text-neon-teal dark:hover:bg-neon-teal dark:active:bg-neon-teal"
      >
        <div className="absolute -left-10 z-1 flex items-center justify-center opacity-0 transition-all duration-200 ease-in-out group-hover:left-[calc(100%-3.125rem)] group-hover:opacity-100 group-active:left-[calc(100%-3.125rem)] group-active:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            className="size-8.75 text-white"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </div>

        <span className="absolute transition-all duration-400 ease-in-out group-hover:left-5 group-active:left-5">
          {PROFILE.resumeLabel}
        </span>
      </a>
    </section>
  </article>
);

export default ProfessionalProfile;
