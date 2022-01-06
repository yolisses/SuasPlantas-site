import { GetServerSideProps } from 'next';
import { api } from '../../../api/api';
import { PlantPage } from '../../../plant/PlantPage';

export default PlantPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await api.get(`plants/${params!.id}`);
  return {
    props: { data: res.data },
  };
};
