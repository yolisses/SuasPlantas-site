import { GetServerSideProps } from 'next';
import { api } from '../../api/api';
import { UserPage } from '../../user/UserPage';

export default UserPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await api.get(`users/${params!.id}`);
  return {
    props: { user: res.data },
  };
};
