import { GetServerSideProps } from 'next';
import { AdminPage } from '../admin/AdminPage';
import { isDev } from '../utils/isDev';

export default AdminPage;

export const getServerSideProps : GetServerSideProps = async function () {
  return {
    props: {},
    notFound: !isDev,
  };
};
