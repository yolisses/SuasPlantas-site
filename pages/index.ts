import { GetServerSideProps } from 'next';
import { api } from '../api/api';
import { HomePage } from '../home/HomePage';

export default HomePage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const props:any = {
    query,
  };
  try {
    const res = await api.get('plants');
    props.data = res.data;
  } catch (err) {
    props.err = err;
  }
  return {
    props,
  };
};
