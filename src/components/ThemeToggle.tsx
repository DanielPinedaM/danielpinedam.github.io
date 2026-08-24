import { useTheme } from 'next-themes';

/*
Boton que cambia entre tema oscuro y claro

El icono de luna cambia de color segun el tema seleccionado:
verde azulado oscuro en tema claro y cian neon en tema oscuro */
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark: boolean = resolvedTheme === 'dark';

  const toggleTheme = (): void => setTheme(isDark ? 'light' : 'dark');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
      aria-pressed={isDark}
      className="fixed top-[1.6875rem] right-[5.1875rem] z-[999] flex size-8 items-center justify-center"
    >
      {/*
      icono de luna de Bootstrap Icons
      https://icons.getbootstrap.com/icons/moon-fill/ */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        className="size-7 text-ink-cyan transition-colors duration-300 ease-menu dark:text-neon-cyan"
      >
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
      </svg>
    </button>
  );
};

export default ThemeToggle;
