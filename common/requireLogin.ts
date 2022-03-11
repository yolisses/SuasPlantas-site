import { GetServerSideProps } from 'next';
import { authenticate } from '../auth/authenticate';

export const requireLogin:GetServerSideProps = async (ctx) => {
  const coisa = authenticate(ctx);

  if (coisa) return { props: {} };

  return {
    redirect: {
      destination: '/landing',
      permanent: false,
    },
  };
};
