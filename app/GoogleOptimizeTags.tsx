import Head from 'next/head';
import { isDev } from '../utils/isDev';

export function GoogleOptimizeTag() {
  if (isDev) return null;

  return (
    <Head>
      <script src="https://www.googleoptimize.com/optimize.js?id=OPT-N6G39VF" />
    </Head>
  );
}
