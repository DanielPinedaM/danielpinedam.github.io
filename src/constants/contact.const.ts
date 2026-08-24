import type { TContact } from '@/types/portfolio.types';

/*
Formas de contacto

El enlace de WhatsApp se genero aqui:
https://vilmanunez.com/crear-enlace-whatsapp/ */
export const CONTACT: TContact[] = [
  {
    label: 'pineda.daniel700@gmail.com',
    logo: '/assets/image/logo/contactame/gmail.png',
    alt: 'logo de Gmail',
    url: 'https://mail.google.com/',
  },
  {
    label: '+57 305 314 57 58',
    logo: '/assets/image/logo/contactame/whatsapp.png',
    alt: 'logo de WhatsApp',
    url: 'https://api.whatsapp.com/send?phone=573053145758&text=Hola%20vi%20tu%20portafolio%20y%20me%20gustaria%20hablarte',
  },
];
