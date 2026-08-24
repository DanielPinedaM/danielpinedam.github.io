import { useEffect, useState } from 'react';
import Menu from '@/components/menu/Menu';
import MenuButton from '@/components/MenuButton';
import ThemeToggle from '@/components/ThemeToggle';
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

      <div className="absolute top-0 left-0 -z-10 block h-dvh w-full overflow-hidden bg-night">
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

      <div className="absolute top-0 left-0 z-[1] flex h-dvh w-full flex-col flex-nowrap items-center justify-center bg-white/15 text-center">
        <h1 className="text-hero font-extrabold opacity-100 xsm:opacity-70">
          {HERO.intro}{' '}
          <span className="block cursor-text text-hero leading-[1.9] text-white">
            <span className="border-r-[0.08em] border-solid border-white pr-px text-hero">
              {typedText}
            </span>
          </span>
        </h1>

        <a
          href={HERO.ctaHref}
          className="relative z-[999] mt-[5dvh] cursor-pointer rounded-[0.625rem] border-[0.1875rem] border-solid border-white px-[1.875rem] py-[0.9375rem] text-step-3 font-medium text-white opacity-100 active:top-[0.4688rem] xsm:text-black xsm:opacity-70"
        >
          <span>{HERO.cta}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
