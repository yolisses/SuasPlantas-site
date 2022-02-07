import { GetServerSideProps } from 'next';
import { AddUserPage } from '../../../admin/AddUserPage';
import { isDev } from '../../../utils/isDev';

export default AddUserPage;

export const getServerSideProps : GetServerSideProps = async () => ({
  props: {},
  notFound: !isDev,
});
