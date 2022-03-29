import { SendingsCollection } from './SendingsCollection';

export async function allImagesSent(images: SendingsCollection) {
  const imagesPromisses = Object.values(images).map((image) => image.sendPromise);
  await Promise.all(imagesPromisses);
}
