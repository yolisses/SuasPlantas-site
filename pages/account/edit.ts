import { GetServerSideProps } from 'next';
import { api } from '../../api/api';
import { EditProfilePage } from '../../user/EditProfilePage';

export default EditProfilePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await api.get('users/me');
  return {
    props: { user: res.data },
  };
};
