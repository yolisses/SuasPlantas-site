import { GetServerSideProps } from 'next';
import { PreviewPage } from '../../preview/PreviewPage';

export default PreviewPage;

export const getServerSideProps:GetServerSideProps = async ({ query }) => ({
  props: { query },
});
