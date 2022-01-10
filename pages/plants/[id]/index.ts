import { GetServerSideProps } from 'next';
import { api } from '../../../api/api';
import { authenticate } from '../../../auth/authenticate';
import { PlantPage } from '../../../plant/PlantPage';

export default PlantPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  authenticate(ctx);
  const res = await api.get(`plants/${ctx.params!.id}`);
  return {
    props: { data: res.data },
  };
};
