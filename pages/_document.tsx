import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { PWAMeta } from '../app/PWAMeta';
import { FaviconMeta } from '../app/FaviconMeta';
import { LeafletStyle } from '../app/LeafletStyle';
import { HotjarScript } from '../app/HotjarScript';
import { interact } from '../interactions/interact';
import { AdSenseScript } from '../app/AdSenseScript';
import { SmartlookScript } from '../app/SmartlookScript';
import { DefaultPageMeta } from '../app/DefaultPageMeta';
import { GoogleOptimizeScript } from '../app/GoogleOptimizeScript';
import { FacebookButtonScript } from '../app/FacebookButtonScript';
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
          <PWAMeta />
          <FaviconMeta />
          <LeafletStyle />
          <HotjarScript />
          <AdSenseScript />
          <DefaultPageMeta />
          <SmartlookScript />
          <FacebookButtonScript />
          <GoogleOptimizeScript />
          <GoogleAnalyticsScript />
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
