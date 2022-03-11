import { GetServerSideProps } from 'next';
import { api } from '../../api/api';
import { PlantPage } from '../../plant/PlantPage';
import { authenticate } from '../../auth/authenticate';

export default PlantPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  authenticate(ctx);
  const res = await api.get(`plants/${ctx.params!.id}`);
  return {
    props: { data: res.data },
  };
};
