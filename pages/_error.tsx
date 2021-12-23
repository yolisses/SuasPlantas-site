import ErrorPage from './dev';

export default ErrorPage;

(ErrorPage as any).getInitialProps = ({ err }:any) => {
  console.error(err);
  const { message: errJson } = err;
  const { message, status } = JSON.parse(errJson);
  return { err, message, status };
};
