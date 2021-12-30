export function DevScreen() {
  const uri = 'https://suasplantas.s3.sa-east-1.amazonaws.com/uploads/4b638af6-451c-48aa-930f-0322ec0d397c';
  return (
    <div>
      oie
      {JSON.stringify(uri.split('https://suasplantas.s3.sa-east-1.amazonaws.com/uploads/')[1])}
    </div>
  );
}
