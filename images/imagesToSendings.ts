import { Image } from '../upload/Image';
import { Sending } from '../upload/Sending';
import { SendingsCollection } from './ImagesInput';

export function imagesToSendings(images:Image[]):SendingsCollection {
  const result : SendingsCollection = {};
  images.forEach(({ uri }) => {
    result[Math.random()] = new Sending({ uri });
  });
  return result;
}
