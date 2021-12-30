import { GetServerSideProps } from 'next';
import { api } from '../../../api/api';
import { PlantScreen } from '../../../plant/PlantScreen';

export default PlantScreen;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await api.get(`plants/${params!.id}`);
  return {
    props: { data: res.data },
  };
};
