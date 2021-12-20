import { AxiosRequestHeaders } from 'axios';
import { GetServerSideProps } from 'next';
import { api } from '../../api/api';
import { UserScreen } from '../../user/UserScreen';

export default UserScreen;
export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const res = await api.get(`users/${params!.id}`, {
    headers: { ...req.headers } as AxiosRequestHeaders,
  });
  return {
    props: { user: res.data },
  };
};
