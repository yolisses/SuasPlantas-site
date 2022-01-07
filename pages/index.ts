import { GetServerSideProps } from 'next';
import { api } from '../api/api';
import { HomePage } from '../home/HomePage';

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('plants');
  return {
    props: { data: res.data },
  };
};
