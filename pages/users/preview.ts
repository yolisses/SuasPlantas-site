import { GetServerSideProps } from 'next';
import { UserPage } from '../../user/UserPage';

export default UserPage;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    preview: true,
  },
});
