import { Image } from '../types/Image';
import { Sending } from '../upload/Sending';
import { imageKeyByUri } from './imageKeyByUri';
import { SendingsCollection } from './ImagesInput';

export function imagesToSendings(images:Image[]):SendingsCollection {
  const result : SendingsCollection = {};
  images.forEach(({ uri }) => {
    result[Math.random()] = new Sending({ key: imageKeyByUri(uri) });
  });
  return result;
}
