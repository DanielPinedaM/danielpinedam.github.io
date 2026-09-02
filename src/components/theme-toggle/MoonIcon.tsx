import type { IMoonIconProps } from '@/components/theme-toggle/interfaces/theme.interface';

const MOON_ICON_PATH: string =
  'M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z';

const MOON_CLASS_NAME: string =
  'col-start-1 row-start-1 size-7 rotate-0 scale-100 text-ink-cyan opacity-100 transition-colors duration-300 ease-menu dark:rotate-90 dark:scale-0 dark:text-neon-cyan dark:opacity-0';

const MOON_ANIMATION_CLASS_NAME: string =
  'animate-theme-icon-in motion-reduce:animate-none dark:animate-theme-icon-out';

const MoonIcon = ({ isAnimated }: IMoonIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    className={`${MOON_CLASS_NAME} ${isAnimated ? MOON_ANIMATION_CLASS_NAME : ''}`}
  >
    <path d={MOON_ICON_PATH} />
  </svg>
);

export default MoonIcon;
