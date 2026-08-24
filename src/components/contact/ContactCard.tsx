import type { TContact } from '@/types/portfolio.types';

interface IContactCardProps {
  contact: TContact;
}

const ContactCard = ({ contact }: IContactCardProps) => (
  <div className="flex-[0_1_100%]">
    <a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-step-0 font-extrabold"
    >
      <img
        src={contact.logo}
        alt={contact.alt}
        className="mx-auto mb-4 h-[7.5rem] object-contain"
      />

      <address className="break-all not-italic">{contact.label}</address>
    </a>
  </div>
);

export default ContactCard;
