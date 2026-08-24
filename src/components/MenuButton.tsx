interface IMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const LINE: string =
  'absolute inset-0 z-[999] m-auto h-1 w-[calc(100%-0.3125rem)] border-[0.0625rem] border-solid border-ink-cyan bg-ink-cyan transition-transform duration-[450ms] ease-menu dark:border-neon-cyan dark:bg-neon-cyan';

const MenuButton = ({ isOpen, onToggle }: IMenuButtonProps) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
    aria-expanded={isOpen}
    aria-controls="main-navigation"
    className="fixed top-[1.6875rem] right-[2.1875rem] z-[999]"
  >
    <span
      className={`relative block size-8 transition-transform duration-[450ms] ease-menu ${
        isOpen ? 'rotate-[5turn]' : 'rotate-0'
      }`}
    >
      <span className={`${LINE} ${isOpen ? 'rotate-45' : '-translate-y-full rotate-0'}`} />
      <span className={`${LINE} ${isOpen ? '-rotate-45' : 'translate-y-full rotate-0'}`} />
    </span>
  </button>
);

export default MenuButton;
