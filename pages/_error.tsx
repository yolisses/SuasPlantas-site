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
  if (err) {
    const { message: errJSON } = err;
    const { status, message } = JSON.parse(errJSON);
    return { status, message };
  }
  return {};
};

export default Error;
