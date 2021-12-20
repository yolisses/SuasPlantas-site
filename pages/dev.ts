import { DevScreen } from '../dev/DevScreen';
import { isDev } from '../utils/isDev';

export default DevScreen;

export function getStaticProps() {
  return {
    props: {
      notFound: !isDev,
    },
  };
}
