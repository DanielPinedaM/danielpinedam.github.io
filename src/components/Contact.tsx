import { CONTACT } from '@/constants/contact.const';
import type { TContact } from '@/types/portfolio.types';

/*
Contactame

Los dos contactos van en columna en celular y en fila desde 640px */
const Contact = () => (
  <section
    id="contactame"
    className="mx-auto my-[3.125rem] flex min-h-dvh max-w-[105rem] flex-col flex-nowrap items-stretch justify-center bg-[url(/assets/image/fondo_transparente.png)] bg-[length:100%_100%] bg-fixed bg-center bg-no-repeat text-center"
  >
    <div>
      <h2 className="mb-[0.9375rem] font-medium hyphens-auto">Contáctame</h2>

      <div className="flex flex-col flex-nowrap items-center justify-center gap-x-[4%] gap-y-[25px] sm:flex-row sm:flex-nowrap">
        {CONTACT.map((contact: TContact) => (
          <div key={contact.label} className="flex-[0_1_100%]">
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

              {/*
              not-italic quita la cursiva que el navegador le pone por defecto a <address>
              insertar salto de linea para que no se desborde el texto */}
              <address className="break-all not-italic">{contact.label}</address>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
