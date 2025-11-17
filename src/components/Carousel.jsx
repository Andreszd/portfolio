import { useCallback, useEffect, useState } from 'react';

export const Carousel = ({ imgs = [] }) => {
  const [img, setImg] = useState(imgs[0]);
  const [run, setRun] = useState(false);

  const ref = useCallback((node) => {
    if (node !== null) {
      const active = () => setRun(true);
      const unActive = () => setRun(false);

      node.parentNode.parentNode.parentNode.addEventListener('mouseenter', active);

      node.parentNode.parentNode.parentNode.addEventListener('mouseleave', unActive);

      node._clear = () => {
        window.removeEventListener('mouseenter', active);
        window.removeEventListener('mouseleave', unActive);
      };
    } else {
      if (node._clear) {
        console.log('cleaned');
        node._clear();
      }
    }
  }, []);

  useEffect(() => {
    if (!run) return;
    let index = 1;
    if (imgs.length <= 1) return;

    const interval = window.setInterval(() => {
      if (index === imgs.length) {
        index = 0;
      }
      setImg(imgs[index]);
      index++;
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [run]);

  return <img ref={ref} src={img} class='w-full h-full' />;
};
