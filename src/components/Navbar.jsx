import { useState } from 'react';

export const Navbar = ({ siteData }) => {
  const [isMenuShowing, setIsMenuShowing] = useState(false);

  return (
    <nav
      class='sm:px-10 md:px-15 lg:px-30 xl:px-50 fixed z-100 w-full flex justify-between items-center backdrop-blur-md max-sm:p-5 flex-wrap'
      id='header'
    >
      <div class='avatar'>
        <a href='#main' class='font-bold text-gray-700 hover:text-green-500'>
          {'<JA/>'}
        </a>
      </div>

      <div class='flex gap-10 py-5 items-center max-sm:hidden' id='navigation'>
        {siteData.navigation.map(({ name, path }) => (
          <a class='text-gray-500 hover:text-green-600' href={path}>
            {name}
          </a>
        ))}
        <a
          href={siteData.cv.url}
          class='bg-green-500 hover:bg-green-400
 p-2 px-4 text-white rounded-3xl'
        >
          {siteData.cv.label}
        </a>
      </div>

      <div class='sm:hidden flex items-center gap-5'>
        <a
          href={siteData.cv.url}
          class='bg-green-500 hover:bg-green-400
 p-2 px-4 text-white rounded-3xl'
        >
          {siteData.cv.label}
        </a>
        <button class='' onClick={() => setIsMenuShowing(!isMenuShowing)}>
          {isMenuShowing ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='lucide lucide-x'
            >
              <path d='M18 6 6 18'></path>
              <path d='m6 6 12 12'></path>
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='lucide lucide-menu'
            >
              <line x1='4' x2='20' y1='12' y2='12'></line>
              <line x1='4' x2='20' y1='6' y2='6'></line>
              <line x1='4' x2='20' y1='18' y2='18'></line>
            </svg>
          )}
        </button>
      </div>
      {isMenuShowing ? (
        <div className={`w-full py-5 animate-fade-in`}>
          <nav className='flex flex-col gap-5'>
            {siteData.navigation.map(({ name, path, emoji }) => (
              <a
                class='text-gray-500 hover:text-green-600 flex gap-3'
                href={path}
                onClick={() => setIsMenuShowing(false)}
              >
                <span>{emoji}</span>
                <span>{name}</span>
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </nav>
  );
};
