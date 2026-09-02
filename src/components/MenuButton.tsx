import type { IMenuButtonProps } from '@/components/menu/interfaces/menu.interface';

const LINE: string =
  'absolute inset-0 z-999 m-auto h-1 w-[calc(100%-0.3125rem)] rounded-full bg-ink-cyan transition-transform duration-450 ease-menu dark:bg-neon-cyan';

const MenuButton = ({ isOpen, onToggle }: IMenuButtonProps) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
    aria-expanded={isOpen}
    aria-controls="main-navigation"
    className="fixed top-6.75 right-8.75 z-999"
  >
    <span
      className={`relative block size-8 transition-transform duration-450 ease-menu ${
        isOpen ? 'rotate-[5turn]' : 'rotate-0'
      }`}
    >
      <span className={`${LINE} ${isOpen ? 'rotate-45' : '-translate-y-full rotate-0'}`} />
      <span className={`${LINE} ${isOpen ? '-rotate-45' : 'translate-y-full rotate-0'}`} />
    </span>
  </button>
);

export default MenuButton;
