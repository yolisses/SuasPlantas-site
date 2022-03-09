import { GetStaticProps } from 'next';
import { isDev } from '../utils/isDev';
import { DevPage } from '../dev/DevPage';

export default DevPage;

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  notFound: !isDev,
});
