import { useTheme } from "next-themes";
import { useState } from "react";

const MOON_ICON_PATH: string =
  "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z";

const SUN_ICON_PATH: string =
  "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z";

const ICON_CLASS_NAME: string =
  "col-start-1 row-start-1 size-7 text-ink-cyan transition-colors duration-300 ease-menu dark:text-neon-cyan";

const MOON_CLASS_NAME: string = `${ICON_CLASS_NAME} rotate-0 scale-100 opacity-100 dark:rotate-90 dark:scale-0 dark:opacity-0`;

const SUN_CLASS_NAME: string = `${ICON_CLASS_NAME} -rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100`;

const MOON_ANIMATION_CLASS_NAME: string =
  "animate-theme-icon-in motion-reduce:animate-none dark:animate-theme-icon-out";

const SUN_ANIMATION_CLASS_NAME: string =
  "animate-theme-icon-out motion-reduce:animate-none dark:animate-theme-icon-in";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [isAnimated, setIsAnimated] = useState(false);

  const isDark: boolean = resolvedTheme === "dark";

  const toggleTheme = (): void => {
    setIsAnimated(true);
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Activar tema claro" : "Activar tema oscuro"}
      aria-pressed={isDark}
      className="fixed top-[1.6875rem] right-[5.1875rem] z-[999] grid size-8 place-items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        className={`${MOON_CLASS_NAME} ${isAnimated ? MOON_ANIMATION_CLASS_NAME : ""}`}
      >
        <path d={MOON_ICON_PATH} />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        className={`${SUN_CLASS_NAME} ${isAnimated ? SUN_ANIMATION_CLASS_NAME : ""}`}
      >
        <path d={SUN_ICON_PATH} />
      </svg>
    </button>
  );
};

export default ThemeToggle;
