import ContactCard from '@/components/contact/ContactCard';
import { CONTACT } from '@/components/contact/constants/contact.const';
import type { IContact } from '@/components/contact/interfaces/contact.interface';

const Contact = () => (
  <section
    id="contactame"
    className="mx-auto my-12.5 flex min-h-dvh max-w-420 flex-col flex-nowrap items-stretch justify-center text-center"
  >
    <div>
      <h2 className="mb-3.75 font-medium hyphens-auto">Contáctame</h2>

      <div className="flex flex-col flex-nowrap items-center justify-center gap-x-[4%] gap-y-6.25 sm:flex-row sm:flex-nowrap">
        {CONTACT.map((contact: IContact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
