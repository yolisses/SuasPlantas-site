import { GetServerSideProps } from 'next';
import { DevPage } from '../dev/DevPage';
import { isDev } from '../utils/isDev';

export default DevPage;

export const getServerSideProps : GetServerSideProps = async function () {
  return {
    props: {},
    notFound: !isDev,
  };
};
