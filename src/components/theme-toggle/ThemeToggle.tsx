import { useTheme } from 'next-themes';
import { useState } from 'react';

import MoonIcon from '@/components/theme-toggle/MoonIcon';
import SunIcon from '@/components/theme-toggle/SunIcon';
import type { Theme } from '@/types/theme.type';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [isAnimated, setIsAnimated] = useState(false);

  const isDark: boolean = resolvedTheme === 'dark';

  const toggleTheme = (): void => {
    setIsAnimated(true);

    const nextTheme: Theme = isDark ? 'light' : 'dark';

    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
      aria-pressed={isDark}
      className="fixed top-6.75 right-20.75 z-999 grid size-8 place-items-center"
    >
      <MoonIcon isAnimated={isAnimated} />

      <SunIcon isAnimated={isAnimated} />
    </button>
  );
};

export default ThemeToggle;
