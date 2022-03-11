import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { interact } from '../interactions/interact';
import { GoogleOptimizeTag } from '../app/GoogleOptimizeTags';
import { googleOptimizeHydrate } from '../app/GoogleOptimizeHydrate';

class MyDocument extends Document {
  componentDidMount() {
    interact({ type: 'start session', localTime: new Date() });
    googleOptimizeHydrate();
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <GoogleOptimizeTag />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
