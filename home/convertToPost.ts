import { Plant } from '../plant/Plant';
import { Quest } from '../quest/Quest';
import { Post } from './Post';

export function convertToItem(value:Quest|Plant, type:'plant'|'quest'):Post {
  return { ...value, type };
}

export function plantToPost(value:Plant) {
  return convertToItem(value, 'plant');
}

export function questToPost(value:Quest) {
  return convertToItem(value, 'quest');
}
