import { useEffect, useState } from 'react';

export const useTypewriter = (words: string[], period: number): string => {
  const [text, setText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopNum, setLoopNum] = useState<number>(0);

  useEffect(() => {
    const fullText: string = words[loopNum % words.length];

    let delta: number = 200 - Math.random() * 100;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && text === fullText) {
      delta = period;
    } else if (isDeleting && text === '') {
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
