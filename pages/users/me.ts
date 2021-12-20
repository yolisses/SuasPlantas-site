import { GetServerSideProps } from 'next';
import { api } from '../../api/api';
import { UserScreen } from '../../user/UserScreen';

export default UserScreen;
export const getServerSideProps:GetServerSideProps = async ({ req }) => {
  const res = await api.get('users/me', {
    headers: { ...req.headers } as {[key:string]:string},
  });
  return {
    props: { user: res.data },
  };
};
