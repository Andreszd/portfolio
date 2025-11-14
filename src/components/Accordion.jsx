import { useState } from 'react';

export const Accordion = ({ children, text = '' }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)} className='flex items-center text-sm text-gray-700'>
        {text}
        <svg
          viewBox='0 0 20 20'
          fill='currentColor'
          data-slot='icon'
          aria-hidden='true'
          class='-mr-1 size-5 text-gray-700'
        >
          <path
            d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
            clip-rule='evenodd'
            fill-rule='evenodd'
          />
        </svg>
      </button>
      {show ? children : false}
    </>
  );
};
