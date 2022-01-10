import { GetServerSideProps } from 'next';
import { api } from '../api/api';
import { authenticate } from '../auth/authenticate';
import { HomePage } from '../home/HomePage';

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  authenticate(ctx);
  const props:any = {};
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
