import { GetStaticProps } from 'next';
import { AdminPage } from '../../admin/AdminPage';
import { isDev } from '../../utils/isDev';

export default AdminPage;

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  notFound: !isDev,
});
