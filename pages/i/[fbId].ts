import { GetServerSideProps } from 'next';
import { InvitePage } from '../../invite/InvitePage';

export default InvitePage;

export const getServerSideProps:GetServerSideProps = async ({ query }) => ({
  props: { query },
});
