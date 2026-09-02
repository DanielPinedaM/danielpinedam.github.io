import styles from '@/components/menu/Menu.module.css';
import MenuItem from '@/components/menu/MenuItem';
import { MENU_ITEMS } from '@/constants/menu.const';
import type { IMenuItem, IMenuProps } from '@/interfaces/menu.interface';

const CURTAIN: string =
  'absolute left-0 block h-[50dvh] w-full origin-[0_50%] bg-day-menu transition-transform duration-300 ease-menu dark:bg-night-menu';

const Menu = ({ isOpen, onClose }: IMenuProps) => (
  <nav
    id="main-navigation"
    aria-label="Menú de navegación"
    inert={!isOpen}
    className={`fixed top-0 z-2 flex min-h-dvh w-full items-center justify-center bg-day-menu dark:bg-night-menu ${
      isOpen ? 'left-0 transition-none' : '-left-full transition-[left] delay-300 duration-0'
    }`}
  >
    <span
      aria-hidden="true"
      className={`${CURTAIN} top-0 ${
        isOpen ? 'translate-x-0 delay-0' : 'translate-x-[-110%] delay-150'
      }`}
    />

    <span
      aria-hidden="true"
      className={`${CURTAIN} bottom-0 ${
        isOpen ? 'translate-x-0 delay-75' : 'translate-x-[-110%] delay-150'
      }`}
    />

    <menu className={`${styles.menu} relative z-1 text-center`}>
      {MENU_ITEMS.map((item: IMenuItem) => (
        <MenuItem key={item.id} item={item} isOpen={isOpen} onClose={onClose} />
      ))}
    </menu>
  </nav>
);

export default Menu;
