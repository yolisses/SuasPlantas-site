export function imageKeyByUri(uri:string) {
  console.log(uri);
  return uri.split('https://suasplantas.s3.sa-east-1.amazonaws.com/uploads/')[1];
}
