import type { TMenuItem } from '@/types/portfolio.types';

interface IMenuItemProps {
  item: TMenuItem;
  isOpen: boolean;
  onClose: () => void;
}

const BAR: string =
  'absolute left-0 -z-1 h-1/2 w-full origin-[0_50%] translate-x-[-110%] bg-night-menu transition-transform duration-0 ease-menu group-hover/item:translate-x-[calc(100%-0.5rem)] group-hover/item:animate-blink group-hover/item:duration-450 dark:bg-neon-bar';

const MenuItem = ({ item, isOpen, onClose }: IMenuItemProps) => (
  <li
    className={`group/item relative block transition-[opacity,transform] ease-menu ${
      isOpen
        ? `translate-x-0 opacity-100 duration-300 ${item.delay}`
        : '-translate-x-4 opacity-0 duration-150'
    }`}
  >
    <a
      href={item.href}
      onClick={onClose}
      className="relative z-1 inline-block overflow-hidden px-4 pt-2 pb-0.5 font-menu text-menu font-normal text-ink-cyan transition-[color,opacity,transform] ease-menu hover:font-black hover:text-night hover:delay-0 dark:text-neon-cyan dark:hover:text-white"
    >
      <span aria-hidden="true" className={`${BAR} top-0`} />
      <span
        aria-hidden="true"
        className={`${BAR} bottom-0 group-hover/item:delay-75`}
      />
      {item.label}
    </a>
  </li>
);

export default MenuItem;
