import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';
import { RecoilRoot } from 'recoil';

import styles from './tailwind.css';
import normalize from '../styles/modern-normalize.css';

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: normalize },
  ];
}

export const meta: MetaFunction = () => {
  return { title: 'Wordle game' };
};

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>

      <RecoilRoot>
        <body>
          <div className='container mx-auto px-4'>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            {process.env.NODE_ENV === 'development' && <LiveReload />}
          </div>
        </body>
      </RecoilRoot>
    </html>
  );
}
