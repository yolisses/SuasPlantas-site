import { GetServerSideProps } from 'next';
import { DevScreen } from '../dev/DevScreen';
import { isDev } from '../utils/isDev';

export default DevScreen;

export const getServerSideProps : GetServerSideProps = async function () {
  return {
    props: {},
    notFound: !isDev,
  };
};
