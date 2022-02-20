import { useEffect, useState } from 'react';
import { LiveReload, Outlet, Scripts, ScrollRestoration } from 'remix';
import { useRecoilValue } from 'recoil';

import { darkModeState } from '~/store';

export default function App() {
  const darkMode = useRecoilValue(darkModeState);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Use a useEffect to prevent server/client content mismatch because of localstorage value
  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return (
    <body className={`flex min-h-full ${isDarkMode ? 'dark' : ''}`}>
      <div className='flex-1 dark:bg-black dark:text-white'>
        <div className='container mx-auto p-4'>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </div>
      </div>
    </body>
  );
}
