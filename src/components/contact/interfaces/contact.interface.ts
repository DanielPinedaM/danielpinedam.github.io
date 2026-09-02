export interface IContact {
  id: number;
  label: string;
  logo: string;
  alt: string;
  url: string;
}

export interface IContactCardProps {
  contact: IContact;
}
