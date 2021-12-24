function Error({ status, message }:any) {
  return (
    <div>
      {status
        ? `An error ${status} occurred on server`
        : 'An error occurred on client'}
      <div>
        {message}
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }:any) => {
  // eslint-disable-next-line no-nested-ternary
  const { message: errJSON } = err;
  const { status, message } = JSON.parse(errJSON);
  return { status, message };
};

export default Error;
