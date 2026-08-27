import { FOOTER } from "@/constants/profile.const";

const UNDERLINE: string =
  "bg-[linear-gradient(currentColor,currentColor)] bg-position-[0_100%] bg-size-[0%_1px] bg-no-repeat transition-[background-size] duration-300 ease-[ease] motion-reduce:transition-none";

const Footer = () => (
  <footer className="mx-auto mb-4 flex max-w-420 flex-row flex-wrap items-center justify-center gap-y-2.5 bg-day-footer p-[1.5%] text-step-0 dark:bg-night-footer">
    <p className="flex-[0_1_50%]">{FOOTER.madeWith}</p>

    <div className="flex-[0_1_50%]">
      <div className="flex flex-col flex-nowrap items-end justify-start">
        <a
          href={FOOTER.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/footer text-center"
        >
          <img
            src={FOOTER.logo}
            alt={FOOTER.alt}
            width={FOOTER.width}
            height={FOOTER.height}
            loading="lazy"
            decoding="async"
            className="mx-auto max-w-25"
          />

          <p
            className={`${UNDERLINE} mx-auto w-fit text-center group-hover/footer:bg-size-[100%_1px]`}
          >
            {FOOTER.label}
          </p>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
