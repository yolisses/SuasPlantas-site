import { GetServerSideProps } from 'next';
import { PreviewPage } from '../../preview/PreviewPage';

export default PreviewPage;

export const getServerSideProps:GetServerSideProps = ({ query }) => ({
  props: { query },
});
