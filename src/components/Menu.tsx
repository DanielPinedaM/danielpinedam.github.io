import styles from '@/components/Menu.module.css';
import { MENU_ITEMS } from '@/constants/menu.const';
import type { TMenuItem } from '@/types/portfolio.types';

interface IMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/*
Menu de navegacion animado

Al abrirse, dos cortinas entran desde la izquierda y despues los enlaces
aparecen escalonados uno detras de otro */
const Menu = ({ isOpen, onClose }: IMenuProps) => {
  /* clases comunes de las dos cortinas que cubren la pantalla */
  const curtain =
    'absolute left-0 block h-[50dvh] w-full origin-[0_50%] bg-day-menu transition-transform duration-300 ease-menu dark:bg-night-menu';

  /* clases comunes de las dos barras que recorren el enlace cuando tiene el mouse encima */
  const bar =
    'absolute left-0 -z-[1] h-1/2 w-full origin-[0_50%] -translate-x-[110%] bg-night-menu transition-transform duration-0 ease-menu group-hover/item:translate-x-[calc(100%-0.5rem)] group-hover/item:animate-blink group-hover/item:duration-[450ms] dark:bg-neon-bar';

  return (
    <nav
      id="main-navigation"
      aria-label="Menú de navegación"
      inert={!isOpen}
      className={`fixed top-0 z-[2] flex min-h-dvh w-full items-center justify-center bg-day-menu dark:bg-night-menu ${
        isOpen ? 'left-0 transition-none' : '-left-full transition-[left] delay-300 duration-0'
      }`}
    >
      {/* cortina superior */}
      <span
        aria-hidden="true"
        className={`${curtain} top-0 ${
          isOpen ? 'translate-x-0 delay-0' : '-translate-x-[110%] delay-150'
        }`}
      />

      {/* cortina inferior */}
      <span
        aria-hidden="true"
        className={`${curtain} bottom-0 ${
          isOpen ? 'translate-x-0 delay-[75ms]' : '-translate-x-[110%] delay-150'
        }`}
      />

      <menu className={`${styles.menu} relative z-[1] text-center`}>
        {MENU_ITEMS.map((item: TMenuItem) => (
          <li
            key={item.href}
            className={`group/item relative block transition-[opacity,transform] ease-menu ${
              isOpen
                ? `translate-x-0 opacity-100 duration-300 ${item.delay}`
                : '-translate-x-4 opacity-0 duration-150'
            }`}
          >
            <a
              href={item.href}
              onClick={onClose}
              className="relative z-[1] inline-block overflow-hidden px-4 pt-2 pb-0.5 font-menu text-menu font-normal text-ink-cyan transition-[color,opacity,transform] ease-menu hover:font-black hover:text-night hover:delay-0 dark:text-neon-cyan dark:hover:text-white"
            >
              <span aria-hidden="true" className={`${bar} top-0`} />
              <span
                aria-hidden="true"
                className={`${bar} bottom-0 group-hover/item:delay-[75ms]`}
              />
              {item.label}
            </a>
          </li>
        ))}
      </menu>
    </nav>
  );
};

export default Menu;
