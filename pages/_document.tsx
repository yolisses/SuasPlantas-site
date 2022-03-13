import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { isDev } from '../utils/isDev';
import { PWAMeta } from '../document/PWAMeta';
import { interact } from '../interactions/interact';
import { FaviconMeta } from '../document/FaviconMeta';
import { LeafletStyle } from '../document/LeafletStyle';
import { HotjarScript } from '../document/HotjarScript';
import { AdSenseScript } from '../document/AdSenseScript';
import { SmartlookScript } from '../document/SmartlookScript';
import { GoogleOptimizeScript } from '../document/GoogleOptimizeScript';
import { FacebookButtonScript } from '../document/FacebookButtonScript';
import { googleOptimizeHydrate } from '../document/GoogleOptimizeHydrate';
import { GoogleAnalyticsScript } from '../document/GoogleAnalyticsScript';
import { devIndicator } from '../utils/devIndicator';
import { DefaultMeta } from '../document/DefaultMeta';

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
          <AdSenseScript />
          <FacebookButtonScript />
          {!isDev && (
          <>
            <HotjarScript />
            <SmartlookScript />
            <GoogleOptimizeScript />
            <GoogleAnalyticsScript />
          </>
          )}
        </Head>
        <body>
          <DefaultMeta />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
