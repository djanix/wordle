import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';
import { RecoilRoot } from 'recoil';

import styles from './tailwind.css';
import normalize from '../styles/modern-normalize.css';
import App from '~/app';

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: normalize },
  ];
}

export const meta: MetaFunction = () => {
  return { title: 'Wordle game' };
};

export default function Root() {
  return (
    <html lang='en' className='h-full'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>

      <RecoilRoot>
        <App />
      </RecoilRoot>
    </html>
  );
}
