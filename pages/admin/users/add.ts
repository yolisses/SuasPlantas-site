import { GetStaticProps } from 'next';
import { AddUserPage } from '../../../admin/AddUserPage';
import { isDev } from '../../../utils/isDev';

export default AddUserPage;

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  notFound: !isDev,
});
