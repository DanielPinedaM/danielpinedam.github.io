import ContactCard from '@/components/contact/ContactCard';
import { CONTACT } from '@/constants/contact.const';
import type { TContact } from '@/types/portfolio.types';

const Contact = () => (
  <section
    id="contactame"
    className="mx-auto my-[3.125rem] flex min-h-dvh max-w-[105rem] flex-col flex-nowrap items-stretch justify-center bg-[url(/assets/image/fondo_transparente.png)] bg-[length:100%_100%] bg-fixed bg-center bg-no-repeat text-center"
  >
    <div>
      <h2 className="mb-[0.9375rem] font-medium hyphens-auto">Contáctame</h2>

      <div className="flex flex-col flex-nowrap items-center justify-center gap-x-[4%] gap-y-[25px] sm:flex-row sm:flex-nowrap">
        {CONTACT.map((contact: TContact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
