export interface IMenuItem {
  id: number;
  label: string;
  href: string;
  delay: string;
}

export interface IMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IMenuItemProps {
  item: IMenuItem;
  isOpen: boolean;
  onClose: () => void;
}

export interface IMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}
