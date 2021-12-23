import { ErrorPage } from '../error/ErrorPage';

export default ErrorPage;

export function getStaticProps() {
  return {
    props: {
      message: 'hello',
      status: 300,
    },
  };
}
