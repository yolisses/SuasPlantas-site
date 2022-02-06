export async function getFileFromImageUrl(url:string) {
  const res = await fetch(url);
  const blob = await res.blob();
  return new File([blob], 'downloaded by url image');
}
