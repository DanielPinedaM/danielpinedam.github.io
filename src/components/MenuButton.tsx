interface IMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

/*
Boton hamburguesa que abre y cierra el menu de navegacion

Al abrirse, las dos lineas paralelas giran cinco vueltas
y se inclinan hasta formar una equis */
const MenuButton = ({ isOpen, onToggle }: IMenuButtonProps) => {
  /* clases comunes de las dos lineas */
  const line =
    'absolute inset-0 z-[999] m-auto h-1 w-[calc(100%-0.3125rem)] border-[0.0625rem] border-solid border-ink-cyan bg-ink-cyan transition-transform duration-[450ms] ease-menu dark:border-neon-cyan dark:bg-neon-cyan';

  return (
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
        <span className={`${line} ${isOpen ? 'rotate-45' : '-translate-y-full rotate-0'}`} />
        <span className={`${line} ${isOpen ? '-rotate-45' : 'translate-y-full rotate-0'}`} />
      </span>
    </button>
  );
};

export default MenuButton;
