import { GetServerSideProps } from 'next';
import { authenticate } from '../auth/authenticate';
import { PlantsPage } from '../home/PlantsPage';

export default PlantsPage;

export const getServerSideProps:GetServerSideProps = async ({ req }) => {
  const coisa = authenticate(req);

  if (coisa) return { props: {} };

  return {
    redirect: {
      destination: '/landing',
      permanent: false,
    },
  };
};
