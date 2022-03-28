import { GetServerSideProps } from 'next';
import { api } from '../../../api/api';
import { EditPlantPage } from '../../../plant/EditPlantPage';

export default EditPlantPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await api.get(`plants/${params!.id}`);
  return {
    props: { data: res.data, edit: true },
  };
};
