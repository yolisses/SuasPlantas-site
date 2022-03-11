import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { interact } from '../interactions/interact';
import { GoogleOptimizeTag } from '../app/GoogleOptimizeTags';
import { googleOptimizeHydrate } from '../app/GoogleOptimizeHydrate';
import { GoogleAnalyticsTags } from '../app/GoogleAnalyticsTags';

class MyDocument extends Document {
  componentDidMount() {
    interact({ type: 'start session', localTime: new Date() });
    googleOptimizeHydrate();
  }

  render() {
    return (
      <Html>
        <Head>
          <GoogleOptimizeTag />
          <GoogleAnalyticsTags />
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
