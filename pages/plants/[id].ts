import { GetServerSideProps } from 'next';
import { api } from '../../api/api';
import { ShowScreen } from '../../show/ShowScreen';

export default ShowScreen;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await api.get(`plants/${params!.id}`);
  return {
    props: { data: res.data },
  };
};
