import { useEffect, useState } from 'react';

/*
Efecto de maquina de escribir
Yo soy ... ingeniero de sistemas, desarrollador frontend y movil

Es la version en React de html-css-js/js/maquina_escribir.js
https://css-tricks.com/snippets/css/typewriter-effect/
https://codepen.io/hi-im-si/pen/ALgzqo

@param words   palabras que se escriben y se borran en bucle
@param period  milisegundos que la palabra permanece escrita antes de empezar a borrarse */
export const useTypewriter = (words: string[], period: number): string => {
  const [text, setText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopNum, setLoopNum] = useState<number>(0);

  useEffect(() => {
    const fullText: string = words[loopNum % words.length];

    /* la velocidad varia en cada letra para que parezca escritura humana */
    let delta: number = 200 - Math.random() * 100;

    if (isDeleting) {
      /* borrar es el doble de rapido que escribir */
      delta /= 2;
    }

    if (!isDeleting && text === fullText) {
      /* palabra completa - esperar antes de borrarla */
      delta = period;
    } else if (isDeleting && text === '') {
      /* palabra borrada - esperar antes de escribir la siguiente */
      delta = 500;
    }

    const timeoutId: number = window.setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((previousLoopNum: number) => previousLoopNum + 1);
        return;
      }

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
    }, delta);

    return () => window.clearTimeout(timeoutId);
  }, [text, isDeleting, loopNum, words, period]);

  return text;
};
