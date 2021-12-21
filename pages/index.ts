import { GetServerSideProps } from 'next';
import { api } from '../api/api';
import { HomeScreen } from '../home/HomeScreen';

export default HomeScreen;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('plants');
  return {
    props: { data: res.data.content },
  };
};
