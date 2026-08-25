import { useEffect, useState } from 'react';
import Menu from '@/components/menu/Menu';
import MenuButton from '@/components/MenuButton';
import ThemeToggle from '@/components/theme-toggle/ThemeToggle';
import { HERO, HERO_VIDEO } from '@/constants/hero.const';
import { useTypewriter } from '@/hooks/useTypewriter';

const VIDEO: string = 'absolute top-0 left-0 h-dvh w-full object-cover';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const typedText: string = useTypewriter(HERO.words, HERO.period);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="relative flex h-dvh w-full items-center justify-center text-white">
      <MenuButton
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((previousIsMenuOpen: boolean) => !previousIsMenuOpen)}
      />

      <ThemeToggle />

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="absolute top-0 left-0 z-0 block h-dvh w-full overflow-hidden bg-night">
        <video
          autoPlay
          loop
          playsInline
          muted
          src={HERO_VIDEO.mobile}
          className={`${VIDEO} block xsm:hidden`}
        />

        <video
          autoPlay
          loop
          playsInline
          muted
          src={HERO_VIDEO.desktop}
          className={`${VIDEO} hidden xsm:block`}
        />
      </div>

      <div className="absolute top-0 left-0 z-1 flex h-dvh w-full flex-col flex-nowrap items-center justify-center bg-white/15 text-center">
        <h1 className="text-hero font-extrabold">
          {HERO.intro}{' '}
          <span className="block cursor-text text-hero leading-[1.9] text-white">
            <span className="border-r-[0.08em] border-solid border-white pr-px text-hero">
              {typedText}
            </span>
          </span>
        </h1>

        <a
          href={HERO.ctaHref}
          className="relative z-999 mt-[5dvh] inline-flex cursor-pointer items-center justify-center rounded-[0.625rem] border-2 border-solid border-white px-7 py-3 text-step-1 font-medium text-white transition-[background-color,color,scale] duration-200 ease-[ease] hover:bg-white hover:text-night active:scale-[0.97] active:bg-white active:text-night motion-reduce:transition-none motion-reduce:active:scale-100"
        >
          <span>{HERO.cta}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
