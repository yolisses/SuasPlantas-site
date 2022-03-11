import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { interact } from '../interactions/interact';
import { GoogleOptimizeScript } from '../app/GoogleOptimizeScripts';
import { googleOptimizeHydrate } from '../app/GoogleOptimizeHydrate';
import { GoogleAnalyticsScript } from '../app/GoogleAnalyticsScript';

class MyDocument extends Document {
  componentDidMount() {
    interact({ type: 'start session', localTime: new Date() });
    googleOptimizeHydrate();
  }

  render() {
    return (
      <Html>
        <Head>
          <GoogleOptimizeScript />
          <GoogleAnalyticsScript />
          <meta name="theme-color" content="#fff" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
