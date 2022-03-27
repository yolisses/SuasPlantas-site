import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { isDev } from '../utils/isDev';
import { PWAMeta } from '../document/PWAMeta';
import { interact } from '../interactions/interact';
import { FaviconMeta } from '../document/FaviconMeta';
import { DefaultMeta } from '../document/DefaultMeta';
import { LeafletStyle } from '../document/LeafletStyle';
import { HotjarScript } from '../document/HotjarScript';
import { AdSenseScript } from '../document/AdSenseScript';
import { SmartlookScript } from '../document/SmartlookScript';
import { GoogleAdsScript } from '../document/GoogleAdsScript';
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
          <DefaultMeta />
          <FaviconMeta />
          <LeafletStyle />
          <AdSenseScript />
          <FacebookButtonScript />
          {!isDev && (
            <>
              <HotjarScript />
              <SmartlookScript />
              <GoogleAdsScript />
              <GoogleOptimizeScript />
              <GoogleAnalyticsScript />
            </>
          )}
        </Head>
        <DefaultMeta />
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
