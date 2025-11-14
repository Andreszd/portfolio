import { useEffect, useState } from 'react';

export const TypingAnimation = ({ texts, speed: defaultSpeed = 250 }) => {
  const [state, setState] = useState({
    displayed: texts[0],
    index: 0,
    isCleaning: true,
  });
  const [speed, setSpeed] = useState(defaultSpeed);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => {
        const { isCleaning, displayed, index } = state;
        const textLength = texts[index]?.length;

        if (!textLength) {
          return { ...state, index: 0, displayed: texts[0]?.[0] };
        }

        if (isCleaning && displayed.length === 0) {
          setSpeed(defaultSpeed);
          return { isCleaning: false, index: index + 1, displayed: texts[index + 1]?.[0] };
        }
        if (!isCleaning && displayed.length === textLength) {
          setSpeed(150);
          return { ...state, isCleaning: true };
        }

        if (isCleaning && displayed.length) {
          return { ...state, displayed: texts[index].slice(0, displayed.length - 1) };
        }

        if (!isCleaning && displayed.length >= 0) {
          return { ...state, displayed: texts[index].slice(0, displayed.length + 1) };
        }

        return state;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [texts, speed]);

  return (
    <span className='blink bg-gradient-to-r from-green-300 via-green-400 to-green-500 inline-block text-transparent bg-clip-text font-semibold'>
      {state.displayed}
    </span>
  );
};
