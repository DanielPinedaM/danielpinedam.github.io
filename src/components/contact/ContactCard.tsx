import type { TContact } from "@/types/portfolio.types";

interface IContactCardProps {
  contact: TContact;
}

const UNDERLINE: string =
  "bg-[linear-gradient(currentColor,currentColor)] bg-position-[0_100%] bg-size-[0%_1px] bg-no-repeat transition-[background-size] duration-300 ease-[ease] motion-reduce:transition-none";

const ContactCard = ({ contact }: IContactCardProps) => (
  <div className="flex-[0_1_100%]">
    <a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/contact inline-block rounded-[0.625rem] px-[1%] py-[2%] text-step-0 font-medium transition-colors duration-200 ease-[ease] hover:bg-black/5 dark:hover:bg-white/9"
    >
      <img
        src={contact.logo}
        alt={contact.alt}
        loading="lazy"
        decoding="async"
        className="mx-auto mb-4 h-30 object-contain"
      />

      <address
        className={`${UNDERLINE} mx-auto w-fit text-nowrap not-italic group-hover/contact:bg-size-[100%_1px]`}
      >
        {contact.label}
      </address>
    </a>
  </div>
);

export default ContactCard;
