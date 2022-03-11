import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { PWAMeta } from '../document/PWAMeta';
import { FaviconMeta } from '../document/FaviconMeta';
import { LeafletStyle } from '../document/LeafletStyle';
import { HotjarScript } from '../document/HotjarScript';
import { interact } from '../interactions/interact';
import { AdSenseScript } from '../document/AdSenseScript';
import { SmartlookScript } from '../document/SmartlookScript';
import { DefaultPageMeta } from '../document/DefaultPageMeta';
import { GoogleOptimizeScript } from '../document/GoogleOptimizeScript';
import { FacebookButtonScript } from '../document/FacebookButtonScript';
import { googleOptimizeHydrate } from '../document/GoogleOptimizeHydrate';
import { GoogleAnalyticsScript } from '../document/GoogleAnalyticsScript';

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
