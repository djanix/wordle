import { useRecoilState } from 'recoil';
import { darkModeState } from '~/store';
import { useEffect, useState } from 'react';

export default function Stats() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Use a useEffect to prevent server/client content mismatch because of localstorage value
  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return (
    <div className='flex items-center justify-center w-full py-2'>
      <label htmlFor='themeSwitch' className='flex items-center cursor-pointer'>
        <div className='relative'>
          <input
            type='checkbox'
            role='switch'
            id='themeSwitch'
            className='sr-only'
            onChange={() => setDarkMode(!darkMode)}
            checked={isDarkMode}
          />
          <div
            className={`block w-11 h-6 rounded-full outline outline-2 outline-offset-0 ${
              isDarkMode ? 'outline-green-700' : 'outline-gray-300'
            }`}
          />
          <div
            className={`absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition ${
              isDarkMode ? 'bg-green-700 translate-x-full' : 'bg-gray-300'
            }`}
          />
        </div>

        <div className='ml-3 text-gray-700 font-medium dark:text-gray-300'>Dark mode</div>
      </label>
    </div>
  );
}
